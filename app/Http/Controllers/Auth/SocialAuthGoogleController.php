<?php

// SocialAuthFacebookController.php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\SocialAccountService;
use Illuminate\Http\Request;
use Socialite;

class SocialAuthGoogleController extends Controller
{
    /**
     * Create a redirect method to google api.
     *
     * @return void
     */
    public function redirect()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    /**
     * Return a callback method from google api.
     *
     * @return callback URL from google
     */
    public function callback(SocialAccountService $service)
    {
        $user = $service->createOrGetGoogleUser(Socialite::driver('google')->user());
        auth()->login($user);
        return redirect()->to('/room');
    }
}