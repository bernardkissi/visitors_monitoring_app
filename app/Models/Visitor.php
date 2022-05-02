<?php

namespace App\Models;

use App\Models\States\VisitorState;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\ModelStates\HasStates;

class Visitor extends Model
{
    use HasFactory, HasStates, LogsActivity;

    protected $guarded = [];


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
        ->useLogName('Action activity')
        ->logOnlyDirty()
        ->setDescriptionForEvent(fn (string $eventName) => "Visitor :properties.attributes.fullname has been {$eventName}");
    }
}
