<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Action;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $year = request()->query('year');

        $filters = request()->only(['search', 'status']);
        $year ? session(['year' => $year]) : null;
        $query = session('year');

        $visitor = Visitor::query()->filterWithYear($query);
        $total_assigned_users = User::query()->filterWithYear($query)->whereHas('visitors')->count();
        $total_follow_up_actions = Action::query()->filterWithYear($query)->count();
        $visitors_count =  $visitor->filterWithYear($query)->count();
        $visitors =  $visitor->adminfilter()
                        ->filterWithYear($query)
                        ->filterWithQuery($filters)
                        ->with('user')
                        ->take(20)
                        ->latest()
                        ->paginate(8)
                        ->withQueryString();

        $membership = Visitor::membership()->filterWithYear($query)->get();
        $visited = Visitor::visited()->filterWithYear($query)->get();
        $help = Visitor::help()->filterWithYear($query)->get();
        $age = Visitor::age()->filterWithYear($query)->get();
        $service = Visitor::service()->filterWithYear($query)->get();
        $total_visitors = Visitor::total()->filterWithYear($query)->get();
        $total_visitors_last_week = Visitor::week()->filterWithYear($query)->get();
        $total_visitors_for_the_year = Visitor::filterWithYear($query)->count();


        return inertia('Dashboard/Index', ['analytics' =>
            [
                'session' => session('year'),
                'filters' => $filters,
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
