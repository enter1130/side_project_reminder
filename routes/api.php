<?php

use App\Http\Controllers\api\MemoController;
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
Route::get('/memo.warning', [MemoController::class,'warning']);
Route::post('/memo.store', [MemoController::class,'store']);
Route::post('/memo.update', [MemoController::class,'update']);
