<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Rennokki\QueryCache\Traits\QueryCacheable;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Setting extends Model
{
    use HasFactory, LogsActivity, QueryCacheable;

    protected $guarded = [];

    public $cacheFor = 6000;

    protected static $flushCacheOnUpdate = true;

    protected $casts = [
        'automate_welcome_message' => 'boolean',
        'msg_assignees' => 'boolean',
        'automate_reports' => 'boolean'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logUnguarded()
        ->useLogName('Setting activity')
        ->logOnlyDirty()
        ->setDescriptionForEvent(fn (string $eventName) => "Settings was {$eventName}");
    }
}
