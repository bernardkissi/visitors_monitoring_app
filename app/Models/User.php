<?php

namespace App\Models;

use App\Models\Traits\Authorizations;
use App\Models\Traits\YearScope;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Rennokki\QueryCache\Traits\QueryCacheable;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use
    HasApiTokens,
    HasFactory,
    Notifiable,
    HasRoles,
    LogsActivity,
    QueryCacheable,
    YearScope;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function actions()
    {
        return $this->hasMany(Action::class);
    }


    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }


    public function visitors()
    {
        return $this->hasMany(Visitor::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->useLogName('User activity')
        ->setDescriptionForEvent(fn (string $eventName) => "User has been {$eventName}");
    }

    public function getAccessAttribute()
    {
        $userPermissions = $this->getPermissionsViaRoles()->pluck('name');
        $permissions = Permission::query()->select('name')->get();
        return collect($permissions)->map(function ($permission) use ($userPermissions) {
            return [Str::slug($permission->name, '_') => $userPermissions->contains($permission->name)];
        })->collapse();
    }
}
