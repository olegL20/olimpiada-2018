<?php

namespace App\Http\Controllers\User;


use App\Http\Requests\User\ScoreRequest;
use App\Http\Controllers\Controller;
use App\Model\InfoTransferScore;
use App\Model\SubjectCoefficient;
use App\Model\UserScore;
use Illuminate\Contracts\Auth\Guard;

class ScoreController extends Controller
{
    /**
     * @var \App\Model\User
     */
    private $user;
    /**
     * @var UserScore
     */
    private $userScore;
    /**
     * @var Guard
     */
    private $auth;

    /**
     * UserScoreController constructor.
     * @param UserScore $userScore
     * @param Guard $auth
     */
    public function __construct(UserScore $userScore, Guard $auth)
    {
        $this->userScore = $userScore;
        $this->auth = $auth;
    }

    public function write(ScoreRequest $request, InfoTransferScore $score, SubjectCoefficient $coefficient)
    {
        $userId = $this->auth->user()->id;
        if ($this->userScore->where('user_id', $userId)->count()) {
            return response()->json([
                'message' => trans('api.score_exists')
            ], 400);
        }

        $data = $request->all();
        $data['user_id'] = $userId;
        $data['average_score_zno'] = $data['average_score_school'];

        $coefficient = $coefficient->all()->toArray();
        $relatedScore = $score->where('score_school', round($data['average_score_school']))->first();
        $subjects = $data['subjects_score'];

        $data['summary'] =
            ( $coefficient[0]['coefficient'] * $subjects[0]['score'] )
        + ( $coefficient[1]['coefficient'] * $subjects[1]['score'] )
        + ( $coefficient[2]['coefficient'] * $subjects[2]['score'] )
        + ( $coefficient[3]['coefficient'] * $relatedScore->score_related )
        + ( $coefficient[4]['coefficient'] * $data['additional_courses'] );

        $this->userScore->fill($data)->save();

        return response()->json([
            'data' => $this->userScore,
            'message' => trans('api.score_updated')
        ]);
    }

    public function show(UserScore $score)
    {
        $data = $score->where('user_id', $this->auth->user()->id)->first();

        return response()->json(compact('data'));
    }
}
