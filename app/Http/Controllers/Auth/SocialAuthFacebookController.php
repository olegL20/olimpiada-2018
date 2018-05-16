<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\SocialAccountService;
use Illuminate\Http\Request;
use Socialite;

class SocialAuthFacebookController extends Controller
{
    /**
     * Create a redirect method to facebook api.
     *
     */
    public function redirect()
    {
        return Socialite::driver('facebook')->stateless()->redirect();
    }

    /**
     * Return a callback method from facebook api.
     *
     * @return callback URL from facebook
     */
    public function callback(SocialAccountService $service)
    {
        $user = $service->createOrGetFacebookUser(Socialite::driver('facebook')->user());
        auth()->login($user);
        return redirect()->to('/room');
    }
}