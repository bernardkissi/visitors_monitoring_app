<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;

trait VisitorAnalytics
{
    public function scopeMembership(Builder $query)
    {
        return $query->selectRaw('count(id) as total,  membership as response,  MONTH(visited_at) as month, YEAR(visited_at) as year')
            ->groupBy('membership', 'month', 'year');
    }

    public function scopeVisited(Builder $query)
    {
        return $query->selectRaw('count(id) as total, get_here_option as response, MONTH(visited_at) as month, YEAR(visited_at) as year')
            ->groupBy('get_here_option', 'month', 'year');
    }

    public function scopeHelp(Builder $query)
    {
        return $query->selectRaw('count(id) as total, help_information as response, MONTH(visited_at) as month, YEAR(visited_at) as year')
            ->groupBy('help_information', 'month', 'year');
    }

    public function scopeAge(Builder $query)
    {
        return $query->selectRaw('count(id) as total, age_range as response, MONTH(visited_at) as month, YEAR(visited_at) as year')
            ->groupBy('age_range', 'month', 'year');
    }

    public function scopeService(Builder $query)
    {
        return $query->selectRaw('count(id) as total, service_attendance as response, MONTH(visited_at) as month, YEAR(visited_at) as year')
            ->groupBy('service_attendance', 'month', 'year');
    }

    public function scopeTotal(Builder $query)
    {
        return $query->selectRaw('count(id) as total, MONTH(visited_at) as month, YEAR(visited_at) as year')
            ->groupBy('month', 'year');
    }

    public function scopeWeek(Builder $query)
    {
        return $query->selectRaw('count(id) as total, WEEK(`visited_at`, 1) as week')
        ->groupBy('week');
    }
}
