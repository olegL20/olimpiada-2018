<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Model\User;
use App\Services\SocialAccountService;
use Illuminate\Http\Request;
use JWTAuth;
use Socialite;

class SocialAuthFacebookController extends Controller
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
     * SocialAuthFacebookController constructor.
     * @param \Tymon\JWTAuth\JWTAuth $auth
     * @param User $user
     */
    public function __construct(\Tymon\JWTAuth\JWTAuth $auth, User $user)
    {
        $this->auth = $auth;
        $this->user = $user;
    }

    /**
     * Create a redirect method to facebook api.
     *
     * @return void
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
        $user = $service->createOrGetGoogleUser(Socialite::driver('facebook')->stateless()->user());
        $token = $this->auth->fromUser($user);
        $data = compact('token', 'user');
        $message = trans('messages.user_signin');

        return response()->json(compact('message', 'data'));
    }
}
