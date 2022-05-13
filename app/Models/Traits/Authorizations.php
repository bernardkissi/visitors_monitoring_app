<?php
namespace App\Models\Traits;

use Spatie\Permission\Models\Permission;

trait Authorizations
{
    public function getAccessAttribute()
    {
        $permissions = Permission::query()->select('name')->get();

        return collect($permissions)->map(function ($permission) {
            return [`$permission` => $this->can($permission) ? true : false];
        });
    }
}
