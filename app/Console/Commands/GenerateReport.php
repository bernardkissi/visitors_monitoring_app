<?php

namespace App\Console\Commands;

use App\Models\Setting;
use App\Notifications\ReportNotification;
use App\Services\GenerateReports;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;

class GenerateReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'report:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate visitors report';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $email = Setting::first()->admin_email;
        Notification::route('mail', $email)
            ->notify(new ReportNotification());
    }
}
