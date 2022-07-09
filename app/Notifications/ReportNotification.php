<?php

namespace App\Notifications;

use App\Services\GenerateReports;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReportNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $reports = GenerateReports::getData(now()->month, now()->year);
        $filename = now()->format('Y-m-d_H-i-s') . '_report.pdf';
        $pdf = \PDF::loadView('pdf', $reports)->save(public_path('storage/'.$filename));
        $url = asset($filename);

        return (new MailMessage)
                    ->subject('Monthly Visitors Report')
                    ->greeting('Hi Administrator!')
                    ->line('Please find the monthly visitors report attached.')
                    ->action('Click to view monthly report', route('reports.view', ['url' => $url]))
                    ->attachData($pdf->output(), $filename)
                    ->line('Thank you!!!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
