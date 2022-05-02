<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin  = User::create([
            'name' => 'Bernard Kissi',
            'email' => 'admin@gracefields.com',
            'phone' => '233-000-0000',
            'password' => 'admin', //admin
        ]);

        $admin->assignRole('admin');
    }
}
