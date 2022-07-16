<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::query()->with(['subject', 'causer'])->latest()->paginate(10);
        $total_activities =Activity::query()->count();

        return inertia('Activity/Index', ['logs' => $activities, 'total_logs' => $total_activities]);
    }
}
