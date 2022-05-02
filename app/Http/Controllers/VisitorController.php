<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVisitorRequest;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    public function index()
    {
        $visitors = Visitor::query()
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        $total_visitors = $visitors->count();

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
        $user = Visitor::create($request->validated());
        return redirect()->route('visitors')->with('success', 'Visitor created successfully.');
    }

    public function edit(Request $request)
    {
        return inertia('Visitor/Edit', []);
    }

    public function show(Request $request)
    {
        return inertia('Visitor/Show', []);
    }

    public function assignVisitor(Visitor $visitor, Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);
        $visitor->update(['user_id' => $validated['user_id']]);
        return redirect()->route('user.edit', $validated['user_id'])->with('success', 'Visitor assigned successfully.');
    }
}
