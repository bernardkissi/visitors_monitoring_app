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
        $year = request()->query('year');
        $year ? session(['year' => $year]) : null;
        $query = session('year');

        $visitor = Visitor::query()->filter($query);
        $total_assigned_users = User::query()->filter($query)->whereHas('visitors')->count();
        $total_follow_up_actions = Action::query()->filter($query)->count();
        $visitors_count =  $visitor->filter($query)->count();
        $visitors =  $visitor->adminFilter()->filter($query)->with('user')->take(20)->latest()->paginate(5);

        $membership = Visitor::membership()->filter($query)->get();
        $visited = Visitor::visited()->filter($query)->get();
        $help = Visitor::help()->filter($query)->get();
        $age = Visitor::age()->filter($query)->get();
        $service = Visitor::service()->filter($query)->get();
        $total_visitors = Visitor::total()->filter($query)->get();
        $total_visitors_last_week = Visitor::week()->filter($query)->get();
        $total_visitors_for_the_year = Visitor::filter($query)->count();


        return inertia('Dashboard/Index', ['analytics' =>
            [
                'session' => session('year'),
                'query' => $query,
                'total_assigned_users' => $total_assigned_users,
                'total_follow_up_actions' => $total_follow_up_actions,
                'visitors_count' => $visitors_count,
                'visitors' => $visitors,
                'membership' => $membership,
                'visited' => $visited,
                'help' => $help,
                'age' => $age,
                'service' => $service,
                'total_visitors' => $total_visitors,
                'total_visitors_last_week' => $total_visitors_last_week,
                'total_visitors_for_the_year' => $total_visitors_for_the_year,
            ]
        ]);
    }
}
