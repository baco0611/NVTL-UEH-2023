<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\PrideTakeController;
use App\Http\Controllers\Api\ProudMateController;
use App\Http\Controllers\Api\StatusPageController;
use App\Http\Controllers\Api\ResetPasswordController;
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
#Admin
Route::get('listStatusPage', [StatusPageController::class, 'statusPage'])->name('statusPage_show');
Route::get('listAccount', [LoginController::class, 'userAccount'])->name('userAccount_show');
Route::get('listPrideTake', [PrideTakeController::class, 'getPrideTake'])->name('prideTake_show');
Route::get('listProudMate', [ProudMateController::class, 'getProudMate'])->name('proudMate_show');
Route::post('prideTake/sortByTime', [PrideTakeController::class,'sortByTime'])->name('sortByTime');
#Client
#PrideTake
Route::post('insertPrideTake', [PrideTakeController::class,'insertPrideTake'])->name('insertPrideTake');

#Login
Route::post('registerAccount', [LoginController::class,'registerAccount'])->name('register');
Route::post('loginAccount', [LoginController::class,'checkAccount'])->name('login');
Route::post('updateAccount', [LoginController::class,'updateAccount'])->name('updateAccount');
Route::post('updatePassword', [LoginController::class,'updatePassword'])->name('updatePassword');
Route::get('user/{id}', [LoginController::class, 'showAccount'])->name('showAccount');
Route::post('reset-password', [ResetPasswordController::class,'sendMail'])->name('send_mail');
Route::post('reset-password/{token}', [ResetPasswordController::class,'reset'])->name('reset_password');

#News
Route::post('newsUpload', [NewsController::class,'storeNews'])->name('newsUpload');
Route::get('newsAdmin/{category}', [NewsController::class, 'showHome'])->name('showHome');
Route::post('newsAdmin/sortByTime', [NewsController::class,'sortByTime'])->name('sortByTime');