<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        $setting = Setting::where('id', 1)->first();
        return inertia('Settings/Index', ['setting' => $setting]);
    }


    public function update(Request $request)
    {
        $setting = Setting::where('id', 1)->first();
        $validated = $request->validate([
            'automate_welcome_message' => 'boolean',
            'msg_assignees' => 'boolean',
            'automate_reports' => 'boolean',
            'admin_email' => 'nullable|email'
        ]);

        $setting->update([
            'automate_welcome_message' => $validated['automate_welcome_message'] ?? $setting->automate_welcome_message,
            'msg_assignees' => $validated['msg_assignees'] ?? $setting->msg_assignees,
            'automate_reports' => $validated['automate_reports'] ?? $setting->automate_reports,
            'admin_email' => $validated['admin_email'] ?? $setting->admin_email,
        ]);

        return redirect()->back()->with('success', 'Settings have been updated');
    }
}
