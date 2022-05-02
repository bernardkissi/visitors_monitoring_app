<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::upsert([
            ['name' => 'view users', 'guard_name' => 'web'],
            ['name' => 'update users', 'guard_name' => 'web'],
            ['name' => 'delete users', 'guard_name' => 'web'],
            ['name' => 'create users', 'guard_name' => 'web'],

            ['name' => 'view visitors', 'guard_name' => 'web'],
            ['name' => 'update visitors', 'guard_name' => 'web'],
            ['name' => 'delete visitors', 'guard_name' => 'web'],
            ['name' => 'create visitors', 'guard_name' => 'web'],
            ['name' => 'assign visitors', 'guard_name' => 'web'],

            ['name' => 'create actions', 'guard_name' => 'web'],
            ['name' => 'view actions', 'guard_name' => 'web'],
            ['name' => 'update actions', 'guard_name' => 'web'],
            ['name' => 'delete actions', 'guard_name' => 'web'],

        
            ['name' => 'update settings', 'guard_name' => 'web'],
            ['name' => 'view logs','guard_name' => 'web'],
        ], ['name'], []);
    }
}
