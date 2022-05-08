<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVisitorRequest;
use App\Jobs\SendVisitorAssignMessageJob;
use App\Jobs\SendVisitorMessageJob;
use App\Models\User;
use App\Models\Visitor;
use App\Notifications\SendVisitorNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class VisitorController extends Controller
{
    public function index()
    {
        $visitors = Visitor::query()->filter(session('year'))
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(7);

        $total_visitors =  Visitor::query()->filter(session('year'))->count();

        return inertia('Visitor/Index', [
            'visitors' => $visitors,
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
