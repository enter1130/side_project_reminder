<?php

use App\Http\Controllers\api\MemoController;
use App\Http\Controllers\api\NotificationController;
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

Route::get('/memo', [MemoController::class,'index']);
Route::post('/memo.store', [MemoController::class,'store']);
Route::post('/memo.update', [MemoController::class,'update']);

Route::get('/notification.warning', [NotificationController::class,'warning']);
Route::post('/notification.dismiss', [NotificationController::class,'dismiss']);
Route::get('/notification', [NotificationController::class,'index']);
Route::post('/notification.delete', [NotificationController::class,'delete']);
Route::delete('/notification.delete.all', [NotificationController::class,'deleteAll']);