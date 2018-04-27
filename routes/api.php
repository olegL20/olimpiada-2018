<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api'], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::get('/student', 'StudentController@getStudent');
        Route::put('/student', 'StudentController@putStudent');
    });
});
