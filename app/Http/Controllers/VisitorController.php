<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;
use App\Jobs\SendVisitorMessageJob;
use Illuminate\Support\Facades\Auth;
use App\Jobs\SendVisitorAssignMessageJob;
use App\Http\Requests\CreateVisitorRequest;

class VisitorController extends Controller
{
    public function index()
    {
        $filters = request()->only(['search', 'status']);

        $visitors =  Visitor::query()->adminFilter()
            ->filterWithYear(session('year'))
            ->filterWithQuery($filters)
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $total_visitors = Visitor::query()
            ->adminFilter()
            ->filterWithYear(session('year'))
            ->count();

        return inertia('Visitor/Index', [
            'visitors' => $visitors,
            'filters' => $filters,
            'total_visitors' => $total_visitors,
            'total_unassigned' => 0
        ]);
    }

    public function create(Request $request)
    {
        $users = User::query()->get();
        return inertia('Visitor/Create', [
            'users' => $users,
        ]);
    }

    public function store(CreateVisitorRequest $request)
    {
        $visitor = Visitor::create($request->validated());
        SendVisitorMessageJob::dispatch($visitor)->delay(now()->addSeconds(10));
        return redirect()->route('visitors')->with('success', 'Visitor created successfully.');
    }

    public function edit(Visitor $visitor)
    {
        return inertia('Visitor/Edit', ['visitor' => $visitor->load('user')]);
    }

    public function delete(Visitor $visitor)
    {
        $visitor->delete();
        return redirect()->route('visitors')->with('success', 'Visitor deleted successfully.');
    }

    public function assignVisitor(Visitor $visitor, Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);
        $visitor->update(['user_id' => $validated['user_id']]);
        SendVisitorAssignMessageJob::dispatch($visitor)->delay(now()->addSeconds(10));
        return redirect()->route('user.edit', $validated['user_id'])->with('success', 'Visitor assigned successfully.');
    }
}
