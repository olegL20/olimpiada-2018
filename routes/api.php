<?php

use App\Model\User;
use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => ['auth:api'],
], function () {
    Route::get('/student', 'StudentController@getStudent');
    Route::put('/student', 'StudentController@putStudent');

    Route::post('/university', 'GlobalAdminController@setUniversity');
    Route::put('/university', 'GlobalAdminController@putUniversity');
    Route::get('/university', 'GlobalAdminController@getUniversity');
});
