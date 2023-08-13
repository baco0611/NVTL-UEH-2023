<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\PrideTakeController;
use App\Http\Controllers\Api\ProudMateController;
use App\Http\Controllers\Api\StatusPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listStatusPage', [StatusPageController::class, 'statusPage'])->name('statusPage_show');
Route::get('listAccount', [LoginController::class, 'userAccount'])->name('userAccount_show');
Route::get('listPrideTake', [PrideTakeController::class, 'getPrideTake'])->name('prideTake_show');
Route::get('listProudMate', [ProudMateController::class, 'getProudMate'])->name('proudMate_show');