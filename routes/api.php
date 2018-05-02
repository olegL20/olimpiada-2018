<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api'], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('signin', 'Auth\AuthenticateController@signIn');
        Route::post('signup', 'Auth\AuthenticateController@signUp');

        Route::post('confirmation', 'Auth\AuthenticateController@confirmation');

        Route::group(['prefix' => 'password'], function () {
            Route::post('recovery', 'Auth\PasswordController@recovery');
            Route::post('reset', 'Auth\PasswordController@reset');
        });

        Route::post('social-auth', 'Auth\AuthenticateController@social');
    });

    Route::group([
        'middleware' => 'role:' . \App\Model\User::GLOBAL_ADMIN . ',jwt.auth',
        'prefix' => 'admin',
        'namespace' => 'Admin'
    ], function () {
        Route::resource('university', 'UniversityController');
    });

    Route::group([
        'middleware' => 'role:' . \App\Model\User::USER . ',jwt.auth',
        'prefix' => 'user',
        'namespace' => 'User'
    ], function () {
        // user routes
    });
});