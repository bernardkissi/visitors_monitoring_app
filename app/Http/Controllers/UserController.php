<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()->with('visitors')->latest()->get();
        $total_users = $users->count();
        $total_assigned = User::query()->whereHas('visitors')->count();
        return inertia('User/Index', [
            'users' => $users,
            'total_users' => $total_users,
            'total_assigned' => $total_assigned
        ]);
    }

    public function create()
    {
        return inertia('User/Create', ['data' => '']);
    }

    public function store(CreateUserRequest $request)
    {
        $user = User::create($request->validated());

        if (!$request->safe()->role) {
            $user->assignRole('user');
        }
        $user->assignRole($request->safe()->role);

        return redirect()->back()->with('success', 'User added successfully');
    }

    public function edit(User $user)
    {
        $usr = $user->load(['visitors', 'roles' => fn ($query) => $query->select('name')->first()[0]]);
        $roles = Role::query()->get();
        $visitors = Visitor::query()->select('id', 'fullname')->get();

        return inertia('User/Edit', ['user' => $usr, 'roles' => $roles, 'visitors' => $visitors]);
    }

    public function update(CreateUserRequest $request, User $user)
    {
        $user->update([
            'name' => $request->safe()->name,
            'email' => $request->safe()->email,
            'phone' => $request->safe()->phone,
            'password' => $request->safe()->password ?? $user->password,
        ]);

        if ($request->safe()->role) {
            $user->syncRole($request->safe()->role);
        }

        return redirect()->back()->with('success', 'User updated successfully');
    }

    public function syncRole(User $user, Request $request)
    {
        $validated = $request->validate([
            'role' => 'required|exists:roles,name',
        ]);

        $user->syncRole($request->role);
    }

    public function delete(User $user)
    {
        $user->delete();
        return redirect()->route('users');
    }
}
