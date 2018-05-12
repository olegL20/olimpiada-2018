<?php

namespace App\Http\Controllers\User\Test;

use App\Http\Requests\User\TestResultRequest;
use App\Http\Controllers\Controller;
use App\Model\TestResult;
use App\Services\User\TestAnswers;
use Illuminate\Contracts\Auth\Guard;

class AnswerController extends Controller
{
    /**
     * @var \App\Model\User
     */
    protected $user;
    /**
     * @var TestAnswers
     */
    private $testAnswers;
    /**
     * @var TestResult
     */
    private $result;

    /**
     * AnswerController constructor.
     * @param TestAnswers $testAnswers
     * @param TestResult $result
     * @param Guard $guard
     */
    public function __construct(TestAnswers $testAnswers, TestResult $result, Guard $guard)
    {
        $this->testAnswers = $testAnswers;
        $this->result = $result;
        $this->user = $guard->user();
    }

    public function answer(TestResultRequest $request)
    {
        $isAnswered = $this->result
            ->where('user_id', $this->user->id)
            ->where('question_id', $request->get('question_id'))
            ->first();

        if ($isAnswered) {
            return response()->json([
                'message' => trans('api.answered')
            ], 400);
        }

        $result = $this->testAnswers->init($request->all());

        $this->result->fill($result)->save();

        return response()->json([
            'data' => $this->result,
            'message' => trans('api.created')
        ]);
    }

    public function results()
    {
        $data = $this->result->where('user_id', $this->user->id)->get();

        return response()->json(compact('data'));
    }
}
