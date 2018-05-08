<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\User\ScoreRequest;
use App\Http\Controllers\Controller;
use App\Model\InfoTransferScore;
use App\Model\UserScore;

class UserScoreController extends Controller
{
    /**
     * @var \App\Model\User
     */
    private $user;

    /**
     * UserScoreController constructor.
     */
    public function __construct()
    {
        $this->user = auth()->user();
    }

    public function writeScores(ScoreRequest $request, InfoTransferScore $score)
    {
        $data = $request->all();
        $data['user_id'] = $this->user->id;
        $data['summary'] = 0;

        $score->fill($data)->save();

        return response()->json([
            'data' => $score,
            'message' => trans('api.score_updated')
        ]);
    }

    public function show(UserScore $score)
    {
        $data = $score->where('user_id', $this->user->id)->first();

        return response()->json(compact('data'));
    }
}
