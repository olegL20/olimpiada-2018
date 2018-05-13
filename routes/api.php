<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api'], function () {
    Route::group(['prefix' => 'admin'], function () {
        Route::post('signin', 'Auth\AuthenticateController@signIn');
        Route::post('signup', 'Auth\AuthenticateController@signUp');

        Route::post('confirmation', 'Auth\AuthenticateController@confirmation');

        Route::group(['prefix' => 'password'], function () {
            Route::post('recovery', 'Auth\PasswordController@recovery');
            Route::post('reset', 'Auth\PasswordController@reset');
        });

        Route::post('social-auth', 'Auth\AuthenticateController@social');

        Route::post('register-by-invite/{inviteCode}', 'Admin\InviteAdminUniversityController@register');

        Route::resource('university', 'Admin\UniversityController');
        Route::resource('faculty', 'Admin\FacultyController');
        Route::post('send-invite', 'Admin\InviteAdminUniversityController@invite');
        Route::post('associate', 'Admin\InviteAdminUniversityController@associate');
        Route::resource('major', 'Admin\MajorController');
        Route::resource('department', 'Admin\DepartmentController');

//        Route::resource('university', 'User\UniversityController');
    });
});