<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class GenerateReports
{
    public static function getData(string $month, string $year):array
    {
        $visitors = DB::table('visitors')->whereMonth('created_at', $month)->whereYear('created_at', $year)->get();
        $months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return [
            'month' => $months[$month - 1],
            'year' => $year,
            'visitors' => $visitors,
            'total_visitors' => $total_visitors = $visitors->count(),
            'total_assigned' => $assigned_visitors = $visitors->whereNotNull('user_id')->count(),
            'total_unassigned' => $total_visitors - $assigned_visitors,
            'radio' => $visitors->where('get_here_option', 'Radio')->count(),
            'social_media' => $visitors->where('get_here_option', 'Church Handbill/Social Media')->count(),
            'invited' => $visitors->where('get_here_option', 'Invited')->count(),
            'membership_yes' =>  $visitors->where('membership', 'yes')->count(),
            'membership_no' => $visitors->where('membership', 'no')->count(),
            'membership_not_decided' => $visitors->where('membership', 'not decided')->count(),
            'becoming_born_again' => $visitors->where('help_information', 'Becoming born again')->count(),
            'joining_bible_studies' => $visitors->where('help_information', 'Joining a bible study')->count(),
            'others' => $visitors->where('help_information', 'others')->count(),
            'btn_21_34' => $visitors->where('age_range', '21-34 years')->count(),
            'below_20_yrs' => $visitors->where('age_range', 'Below 20 years')->count(),
            'above_35' => $visitors->where('age_range', '35-44 years')->count(),
        ];
    }
}
