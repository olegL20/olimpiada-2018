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

        Route::post('register-by-invite/{inviteCode}', 'Admin\InviteAdminUniversityController@register');
    });

    Route::group([
        'middleware' => 'role:' . \App\Model\User::GLOBAL_ADMIN . ',jwt.auth',
        'prefix' => 'admin',
        'namespace' => 'Admin'
    ], function () {
        Route::resource('university', 'UniversityController');
        Route::resource('faculty', 'FacultyController');
        Route::post('send-invite', 'InviteAdminUniversityController@invite');
        Route::post('associate', 'InviteAdminUniversityController@associate');
        Route::resource('major', 'MajorController');
        Route::resource('department', 'DepartmentController');
    });

    Route::group([
        'middleware' => 'role:' . \App\Model\User::USER . ',jwt.auth',
        'prefix' => 'user',
        'namespace' => 'User'
    ], function () {
        // user routes
    });
});