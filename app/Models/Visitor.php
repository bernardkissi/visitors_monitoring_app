<?php

namespace App\Models;

use App\Models\States\VisitorState;
use App\Models\Traits\VisitorAnalytics;
use App\Models\Traits\YearScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Rennokki\QueryCache\Traits\QueryCacheable;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\ModelStates\HasStates;

class Visitor extends Model
{
    use
    HasFactory,
    HasStates,
    LogsActivity,
    VisitorAnalytics,
    Notifiable,
    QueryCacheable,
    YearScope;

    protected $guarded = [];

    public $cacheFor = 3600;

    protected static $flushCacheOnUpdate = true;

    protected $casts = [
        'state' => VisitorState::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function actions()
    {
        return $this->hasMany(Action::class);
    }


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logUnguarded()
        ->useLogName('Visitor activity')
        ->logOnlyDirty()
        ->setDescriptionForEvent(fn (string $eventName) => "Visitor :properties.attributes.fullname has been {$eventName}");
    }
}
