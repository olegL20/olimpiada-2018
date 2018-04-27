<?php

namespace App\Http\Controllers\Auth;

use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Http\Requests\AuthenticationRequest;
use App\Http\Requests\ConfirmationRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\SocialAuthenticationRequest;
use App\Mail\Confirmation;
use App\Model\Asset;
use App\Model\User;
use App\Services\AssetService;
use App\Services\ImageService;

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

    public function signUp(RegistrationRequest $register, Confirmation $confirmation, AssetService $assetService, ImageService $imageService)
    {
        \DB::transaction(function () use ($register, $confirmation, $imageService, $assetService) {
            $user = new User();
            $user->fill($register->except('image'));
            $user->role = User::USER;
            $user->confirmed = false;
            $user->confirmed_token = hash('md5', $user->email . time());
            $user->save();

            $image = $imageService->from($register->get('image'))->secureResize()->stream();
            $path = $assetService
                ->changeContent((string)$image)
                ->changeFileName(str_random(8) . '_' . $user->id . '.jpg')
                ->save();

            $image= new Asset(['source' => $path, 'type' => Asset::IMAGE]);
            $user->image()->save($image);

            $data = $user->toArray();
            $data['token'] = $user->confirmed_token;
            $confirmation->send($data);
        });

        return response()->json([
            'data' => compact('user'),
            'message' => trans('api.user_created')
        ]);
    }

    public function social(SocialAuthenticationRequest $request, AssetService $fileService)
    {
        if ($request->has('email')) {
            if ($this->user->where('email', $request->get('email'))->where('uuid', '')->count() > 0) {
                return response()->json([
                    'message' => trans('messages.user_already_exists'),
                ], 400);
            }
        }

        $user = $this->user->where('provider', $request->get('provider'))
            ->where('uuid', $request->get('uuid'))
            ->first();

        if (!$user) {
            $user = new User();
            $user->fill($request->all());
            $user->role = User::USER;
            $user->confirmed = true;
            $user->save();

            $imagePath = $fileService
                ->fromUrl($request->get('image'))
                ->changeFileName($user->id . '-' . str_random() . '.jpg')
                ->save();

            $image = new Asset(['source' => $imagePath, 'type' => Asset::IMAGE]);
            $user->image()->save($image);
        }

        $token = $this->auth->fromUser($user);

        return response()->json(['data' => ['token' => $token, 'user' => $user]]);
    }

}
