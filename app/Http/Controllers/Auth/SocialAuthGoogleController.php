<?php

// SocialAuthFacebookController.php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Model\User;
use App\Services\SocialAccountService;
use Illuminate\Http\Request;
use Socialite;

class SocialAuthGoogleController extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $auth;

    /**
     * @var User
     */
    private $user;

    /**
     * SocialAuthGoogleController constructor.
     * @param \Tymon\JWTAuth\JWTAuth $auth
     * @param User $user
     */
    public function __construct(\Tymon\JWTAuth\JWTAuth $auth, User $user)
    {
        $this->auth = $auth;
        $this->user = $user;
    }


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
        $user = $service->createOrGetGoogleUser(Socialite::driver('google')->stateless()->user());
        $token = $this->auth->fromUser($user);
        $data = compact('token', 'user');
        $message = trans('messages.user_signin');

        return response()->json(compact('message', 'data'));
    }
}