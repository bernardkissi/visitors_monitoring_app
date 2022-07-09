<?php

namespace App\Models;

use App\Models\Traits\YearScope;
use Spatie\ModelStates\HasStates;
use Spatie\Activitylog\LogOptions;
use App\Models\States\VisitorState;
use Illuminate\Support\Facades\Auth;
use App\Models\Traits\VisitorAnalytics;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Rennokki\QueryCache\Traits\QueryCacheable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    // public $cacheFor = 3600;

    // protected static $flushCacheOnUpdate = true;

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

    public function scopeAdminFilter($query)
    {
        if (request()->user()->hasRole('admin')) {
            return $query;
        }
        return $query->where('user_id', Auth::id());
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
