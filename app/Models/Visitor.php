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
    QueryCacheable;

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

    public function scopeFilterWithYear($query, string $year = null)
    {
        if ($year) {
            $query->whereYear('visited_at', $year);
        } else {
            $query->whereYear('visited_at', now()->year);
        }
    }

    public function scopeFilterWithQuery($query, array $filters)
    {
        $query->when($filters['search'] ?? null , function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('fullname', 'like', '%'.$search.'%')
                    ->orWhere('address', 'like', '%'.$search.'%');
            });
        })->when($filters['status'] ?? null, function ($query, $status) {
            if ($status === 'called') {
                $query->where('state', '=', 'called');
            } elseif ($status === 'visited') {
                $query->where('state', '=', 'visited');
            } elseif ($status === 'pending') {
                $query->where('state', '=', 'pending');
            }
        });
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
