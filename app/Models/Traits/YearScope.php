<?php
namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;

trait YearScope
{
    public function scopeFilterWithYear(Builder $query, string $year = null)
    {
        if ($year) {
            $query->whereYear('created_at', $year);
        } else {
            $query->whereYear('created_at', now()->year);
        }
    }
}
