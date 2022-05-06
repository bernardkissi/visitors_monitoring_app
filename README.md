// }{
    //     $vistor = $this;
    //     return [
    //         'total_visitors' => $this->count(),
    //         'total_actions_today' => $this->whereDate('created_at', today())->count(),
    //         'total_actions_yesterday' => $vistor->whereDate('created_at', today()->subDay())->count(),
    //         'total_actions_last_week' => $this->whereDate('created_at', today()->subWeek())->count(),
    //         'total_actions_last_month' => $this->whereDate('created_at', today()->subMonth())->count(),
    //         'total_actions_last_year' => $this->whereDate('created_at', today()->subYear())->count(),
    //         'total_actions_this_year' => $this->whereYear('created_at', today()->year)->count(),
    //         'total_actions_this_month' => $this->whereMonth('created_at', today()->month)->count(),
    //         'total_actions_this_week' => $this->whereWeekday('created_at', today()->weekday)->count(),
    //
    //     ];
