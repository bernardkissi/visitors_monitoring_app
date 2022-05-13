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

// Route::middleware(['auth', 'role:admin'])->group(function () {
//     Route::post('/logout', LogoutController::class)->name('logout');

//     Route::get('/start', HomeController::class)->name('start');
//     Route::get('/dashboard', DashboardController::class)->name('dashboard');

//     Route::get('/settings', [SettingController::class, 'index'])->name('settings');
//     Route::put('/settings/update', [SettingController::class, 'update'])->name('update');

//     Route::get('/visitors', [VisitorController::class, 'index'])->name('visitors');
//     Route::get('/visitor/create', [VisitorController::class, 'create'])->name('visitor.create');
//     Route::post('/visitor/store', [VisitorController::class, 'store'])->name('visitor.store');
//     Route::put('/visitor/{visitor:id}/assign', [VisitorController::class, 'assignVisitor'])
//     ->name('visitor.assign.user');
//     Route::get('/visitor/edit/{visitor:id}', [VisitorController::class, 'edit'])->name('visitor.edit');
//     Route::get('/visitor/show', [VisitorController::class, 'show'])->name('visitor.show');

//     Route::get('/users', [UserController::class, 'index'])->name('users');
//     Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
//     Route::post('/user/store', [UserController::class, 'store'])->name('user.store');
//     Route::get('/user/edit/{user:id}', [UserController::class, 'edit'])->name('user.edit');
//     Route::put('/user/edit/{user:id}/update', [UserController::class, 'update'])->name('user.update');
//     Route::post('/user/{user:id}/syncRole', [UserController::class, 'syncRole'])->name('user.sync.role');
//     Route::get('/user/delete', [UserController::class, 'delete'])->name('user.delete');

//     Route::get('/logs', [ActivityController::class, 'index'])->name('logs');
//     Route::get('/action/{visitor:id}', [ActionController::class, 'index'])->name('actions.visitor');
//     Route::post('/action/store', [ActionController::class, 'store'])->name('actions.store');
// });
