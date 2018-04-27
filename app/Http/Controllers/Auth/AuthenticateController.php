<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\AuthenticationRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConfirmationRequest;
use App\Http\Requests\RegistrationRequest;
use App\Mail\Confirmation;
use App\Model\User;
use Tymon\JWTAuth\JWTAuth;

class AuthenticateController extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $auth;

    /**
     * @var User
     */
    private $user;

    public function __construct(JWTAuth $auth, User $user)
    {
        $this->auth = $auth;
        $this->user = $user;
    }

    public function signIn(AuthenticationRequest $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        $user = $this->user->where('email', $email)->first();

        if (!$user) {
            return response()->json([
                'message' => trans('messages.user_not_found'),
            ], 401);
        }

        if ($user && $user->role === User::USER && !$user->confirmed) {
            return response()->json([
                'message' => trans('messages.not_email_confirmed'),
            ], 401);
        }

        $credentials = compact('email', 'password');

        if ($token = $this->auth->attempt($credentials)) {
            $user = $this->auth->toUser($token);

            $data = compact('token', 'user');
            $message = trans('messages.user_signin');

            return response()->json(compact('message', 'data'));
        }

        return response()->json([
            'message' => trans('messages.unauthorized'),
        ], 401);
    }

    public function confirmation(ConfirmationRequest $confirmationRequest)
    {
        $user = $this->user
            ->where('confirmed_token', $confirmationRequest->get('token'))
            ->first();

        if (!$user) {
            return response()->json([
                'message' => trans('api.user_not_found_or_token')
            ], 404);
        }

        if ($user->confirmed) {
            return response()->json([
                'message' => trans('api.user_confirmed')
            ], 401);
        }

        if ($user->confirmed_token !== $confirmationRequest->get('token')) {
            return response()->json([
                'message' => trans('api.invalid_token')
            ], 401);
        }

        $user->confirmed_token = null;
        $user->confirmed = true;
        $user->save();

        return response()->json([
            'message' => trans('api.user_confirmed')
        ]);
    }

    public function signUp(RegistrationRequest $register, Confirmation $confirmation)
    {
        $user = new User();
        $user->fill($register->all());
        $user->role = User::USER;
        $user->confirmed = false;
        $user->confirmed_token = hash('md5', $user->email . time());
        $user->save();

        $data = $user->toArray();
        $data['token'] = $user->confirmed_token;
        $confirmation->send($data);

        return response()->json([
            'data' => compact('user'),
            'message' => trans('api.user_created')
        ]);
    }

}
