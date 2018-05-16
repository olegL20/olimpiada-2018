<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\Model\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],
    'facebook' => [
        'client_id' => '1726162654141453',
        'client_secret' => '1aa1ac8eb7e40a9589a1ae9c0f262cec',
        'redirect' => 'https://itpm-194220.appspot.com/api/auth/callbackFacebook',
        ],
    'google' => [
        'client_id' => '700321256690-g72opu4c23n3nggf7ei8n0f6tmvi08se.apps.googleusercontent.com',
        'client_secret' => 'bG7xcigUK7b1eTGFwEEoOvGz',
            'redirect' => 'https://itpm-194220.appspot.com/api/auth/callbackGoogle',
        ]

];
