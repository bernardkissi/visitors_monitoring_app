<?php

namespace App\Jobs;

use App\Models\Setting;
use App\Models\Visitor;
use App\Notifications\Mnotify;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendVisitorMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        public Visitor $visitor,
        public string $message = 'Gracefields, thanks you for your visit, hope to see you again!',
        public bool $is_schedule = false,
        public string $schedule_date = ''
    ) {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $setting = Setting::find(1);
        if ($setting->automate_welcome_message) {
            Mnotify::send([
                'recipients' => [$this->visitor->phone],
                'message' => $this->message,
                'is_schedule' => $this->is_schedule,
                'schedule_date' => $this->schedule_date,
            ]);
        }

        if ($setting->msg_assignees && $this->visitor->user) {
            Mnotify::send([
                'recipients' => [$this->visitor->user->phone],
                'message' => 'You have a new visitor! ' .$this->visitor->fullname .' is assigned to you. Say Hi!',
                'is_schedule' => $this->is_schedule,
                'schedule_date' => $this->schedule_date,
            ]);
        }
    }
}
