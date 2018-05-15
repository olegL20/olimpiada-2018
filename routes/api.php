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
        Route::resource('test', 'Test\TestController');
        Route::resource('question', 'Test\QuestionController');
        Route::resource('answer', 'Test\AnswerController');

        Route::resource('faculty', 'FacultyController');
        Route::resource('major', 'MajorController');
        Route::resource('department', 'DepartmentController');
        Route::resource('subjects-coefficients', 'SubjectCoefficientController');

        Route::get('invites', 'InviteController@index');
        Route::get('users', 'UserController@index');

        Route::resource('test', 'Test\TestController');
        Route::resource('university', 'UniversityController');
        Route::post('send-invite', 'InviteAdminUniversityController@invite');
        Route::post('associate', 'InviteAdminUniversityController@associate');
    });

    Route::group([
        'middleware' => 'role:' . \App\Model\User::UNIVERSITY_ADMIN . ',jwt.auth',
        'prefix' => 'tutor-admin',
        'namespace' => 'Tutor'
    ], function () {
        Route::get('university', 'UniversityController@index');
    });

    Route::group([
        'middleware' => 'role:' . \App\Model\User::USER . ',jwt.auth',
        'prefix' => 'user',
        'namespace' => 'User'
    ], function () {
        // user routes
        Route::get('university', 'UniversityController@index');
        Route::get('university/{id}', 'UniversityController@show');
        Route::get('faculty/{universityId}', 'UniversityController@getFacultiesByUniversity');
        Route::get('department/{facultyId}', 'UniversityController@getDepartmentsByFaculty');
        Route::get('majors/{departmentId}', 'UniversityController@getMajorsByDepartment');

        Route::post('score', 'ScoreController@write');
        Route::get('score', 'ScoreController@show');

        Route::get('test/score', 'Test\AnswerController@results');
        Route::post('test/answer', 'Test\AnswerController@answer');
        Route::get('test', 'Test\TestController@index');
        Route::get('test/{id}', 'Test\TestController@getTest');
    });
});