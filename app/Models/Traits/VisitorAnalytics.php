<?php

namespace App\Models\Traits;

trait VisitorAnalytics
{
    public function scopeMembership($query)
    {
        return $query->selectRaw('count(id) as total,  membership as response,  MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('membership', 'month', 'year');
    }

    public function scopeVisited($query)
    {
        return $query->selectRaw('count(id) as total, get_here_option as response, MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('get_here_option', 'month', 'year');
    }

    public function scopeHelp($query)
    {
        return $query->selectRaw('count(id) as total, help_information as response, MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('help_information', 'month', 'year');
    }

    public function scopeAge($query)
    {
        return $query->selectRaw('count(id) as total, age_range as response, MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('age_range', 'month', 'year');
    }

    public function scopeService($query)
    {
        return $query->selectRaw('count(id) as total, service_attendance as response, MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('service_attendance', 'month', 'year');
    }

    public function scopeTotal($query)
    {
        return $query->selectRaw('count(id) as total, MONTH(created_at) as month, YEAR(created_at) as year')
            ->groupBy('month', 'year');
    }
}
