<?php
namespace App\Notifications;

use Illuminate\Support\Facades\Http;

class Mnotify
{
    public static function send(array $data)
    {
        Http::withHeaders([
            'key' => 'VQ392Lg1LgmDZQiZxvoIEGSs3rsB2UwXLA7OmoP8EcLD3',
        ])->post('https://api.mnotify.com/api/sms/quick', [
            'key' => 'VQ392Lg1LgmDZQiZxvoIEGSs3rsB2UwXLA7OmoP8EcLD3',
            'recipient' => $data['recipients'],
            'sender' => 'gracefields',
            'message' => $data['message'],
            'is_schedule' => $data['is_schedule'] ??= false,
            'schedule_date' => $data['schedule_date'] ??= '',
        ]);
    }
}
