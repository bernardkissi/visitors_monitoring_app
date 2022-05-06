<?php

namespace App\Http\Controllers;

use App\Models\Visitor;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $total_visitors = Visitor::total()->get();
        $visitors = Visitor::query()->with('user')->take(20)->latest()->paginate(5);
        $membership = Visitor::membership()->get();
        $visited = Visitor::visited()->get();
        $help = Visitor::help()->get();
        $age = Visitor::age()->get();
        $service = Visitor::service()->get();

        return inertia('Dashboard/Index', ['analytics' =>
            [
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
