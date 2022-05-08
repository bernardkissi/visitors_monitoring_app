<?php

namespace App\Models;

use App\Models\Traits\YearScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Rennokki\QueryCache\Traits\QueryCacheable;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Action extends Model
{
    use HasFactory, LogsActivity, QueryCacheable, YearScope;

    protected $guarded = [];

    public $cacheFor = 5600;

    protected static $flushCacheOnUpdate = true;

    public function visitor()
    {
        return $this->belongsTo(Visitor::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getDiffTimeAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logUnguarded()
        ->useLogName('Action activity')
        ->logOnlyDirty()
        ->setDescriptionForEvent(fn (string $eventName) => "Action :properties.attributes.action_performed has been {$eventName}");
    }
}
