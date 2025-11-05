<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ScanController;

// Home route
Route::get('/', [HomeController::class, 'index'])->name('home');

// QR code scan route
Route::get('/scan', [ScanController::class, 'show'])->name('scan');
Route::post('/scan', [ScanController::class, 'processScan'])->name('scan.process');