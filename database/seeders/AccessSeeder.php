<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AccessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::find(1);
        $user = Role::find(2);

        $permissions = Permission::all();

        $admin->givePermissionTo($permissions);
        $user->givePermissionTo([
            'view visitors',
            'update visitors',
            'create actions',
            'view actions',
            'update actions',
            'create visitors',
            'view logs',
        ]);
    }
}
