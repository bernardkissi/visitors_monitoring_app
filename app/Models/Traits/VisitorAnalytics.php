<?php

namespace App\Models\Traits;

trait VisitorAnalytics
{
    public function scopeMembership($query)
    {
        return $query->selectRaw('count(id) as total, membership')
            ->groupBy('membership');
    }

    public function scopeVisited($query)
    {
        return $query->selectRaw('count(id) as total, get_here_option')
            ->groupBy('get_here_option');
    }

    public function scopeHelp($query)
    {
        return $query->selectRaw('count(id) as total, help_information')
            ->groupBy('help_information');
    }

    public function scopeAge($query)
    {
        return $query->selectRaw('count(id) as total, age_range')
            ->groupBy('age_range');
    }

    public function scopeService($query)
    {
        return $query->selectRaw('count(id) as total, service_attendance')
            ->groupBy('service_attendance');
    }

    public function scopeTotal($query)
    {
        return $query->selectRaw('count(id) as total, MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('month', 'year');
    }
}
