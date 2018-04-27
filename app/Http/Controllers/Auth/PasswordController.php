<?php

namespace App\Http\Controllers\Auth;


use App\Http\Requests\PasswordRecoveryRequest;
use App\Http\Requests\PasswordResetRequest;
use App\Http\Controllers\Controller;
use App\Mail\PasswordBroke;
use App\Model\PasswordReset;
use App\Model\User;

class PasswordController extends Controller
{
    public function reset(PasswordResetRequest $request, PasswordReset $passwordReset, User $user)
    {
        $reset = $passwordReset->where('token', $request->get('token'))->first();

        if (!$reset) {
            return response()->json([
                'message' => trans('messages.access_denied')
            ], 403);
        }

        \DB::transaction(function () use ($user, $reset, $request) {
            $user = $user->where('email', $reset->email)->first();
            $user->password = $request->get('password');
            $user->save();

            $reset->where('email', $reset->email)->delete();
        });

        return response()->json([
            'message' => trans('messages.reset'),
        ]);
    }

    public function recovery(PasswordRecoveryRequest $request, PasswordBroke $notification, PasswordReset $passwordReset)
    {
        $email = $request->get('email');
        $isExistBroke = $passwordReset->where('email', $email)->exists();

        if ($isExistBroke) {
            return response()->json([
                'message' => trans('messages.exists'),
            ], 400);
        }

        $user = User::where('email', $email)->first();

        $reset = new PasswordReset();
        $reset->token = hash('md5', $user->email . time());
        $reset->email = $user->email;
        $reset->save();

        $notification->send(array_merge($user->toArray(), $reset->toArray()));

        return response()->json([
            'message' => trans('messages.recovery'),
            'data' => compact('user')
        ]);
    }
}
