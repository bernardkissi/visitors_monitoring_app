<?php

use App\Http\Controllers\ActionController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InteractController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisitorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login');


Route::middleware(['auth'])->group(function () {
    Route::post('/logout', LogoutController::class)->name('logout');

    Route::get('/start', HomeController::class)->name('start');
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::get('/settings', [SettingController::class, 'index'])->name('settings');

    Route::get('/visitors', [VisitorController::class, 'index'])->name('visitors');
    Route::get('/visitor/create', [VisitorController::class, 'create'])->name('visitor.create');
    Route::post('/visitor/store', [VisitorController::class, 'store'])->name('visitor.store');

    Route::get('/visitor/edit', [VisitorController::class, 'edit'])->name('visitor.edit');
    Route::get('/visitor/show', [VisitorController::class, 'show'])->name('visitor.show');

    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/user/store', [UserController::class, 'store'])->name('user.store');
    Route::get('/user/edit/{user:id}', [UserController::class, 'edit'])->name('user.edit');
    Route::get('/user/edit/{user:id}/update', [UserController::class, 'edit'])->name('user.update');

    Route::get('/user/delete', [UserController::class, 'delete'])->name('user.delete');


    Route::get('/logs', [ActivityController::class, 'index'])->name('logs');
    Route::get('/action/{visitor:id}', [ActionController::class, 'index'])->name('actions.visitor');
    Route::post('/action/store', [ActionController::class, 'store'])->name('actions.store');
});
