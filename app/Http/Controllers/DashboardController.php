<?php

namespace App\Http\Controllers;

use App\Models\Action;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $visitor = Visitor::query();
        $total_assigned_users = User::query()->whereHas('visitors')->count();
        $total_follow_up_actions = Action::query()->count();
        $visitors_count =  $visitor->count();
        $total_visitors = Visitor::total()->get();
        $visitors =  $visitor->with('user')->take(20)->latest()->paginate(5);
        $membership = Visitor::membership()->get();
        $visited = Visitor::visited()->get();
        $help = Visitor::help()->get();
        $age = Visitor::age()->get();
        $service = Visitor::service()->get();

        return inertia('Dashboard/Index', ['analytics' =>
            [
                'total_assigned_users' => $total_assigned_users,
                'total_follow_up_actions' => $total_follow_up_actions,
                'visitors_count' => $visitors_count,
                'visitors' => $visitors,
                'membership' => $membership,
                'visited' => $visited,
                'help' => $help,
                'age' => $age,
                'service' => $service,
                'total_visitors' => $total_visitors
            ]
        ]);
    }
}
