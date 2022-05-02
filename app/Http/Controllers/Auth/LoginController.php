<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Auth/Login', []);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->safe()->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('start')->with('success', 'You are now logged in!');
        }

        return redirect()->back()->with('failed', 'Invalid email or password.');
    }
}
