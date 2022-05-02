<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Settings/Index');
    }
}
