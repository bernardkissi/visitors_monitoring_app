<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::create([
            'automate_welcome_message' => false,
            'msg_assignees' => false,
            'automate_reports' => false,
            'admin_email' => '', //admin email
        ]);
    }
}
