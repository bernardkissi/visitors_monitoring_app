<?php

namespace App\Http\Controllers;

use App\Services\GenerateReports;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class ReportController extends Controller
{
    public function index(Request $request)
    {
        $url = request()->query('url');
        return inertia('Reports/View', ['url' => $url]);
    }

    public function generate(Request $request)
    {
        $reports = GenerateReports::getData($request->month, $request->year);
        $filename = now()->format('Y-m-d_H-i-s') . '_report.pdf';
        $pdf = \PDF::loadView('pdf', $reports)->save($filename);
        $url = asset($filename);

        return Redirect::route('reports.view', ['url' => $url]);
    }
}
