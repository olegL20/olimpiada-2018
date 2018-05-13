<?php

namespace App\Http\Controllers\User\Test;

use App\Http\Requests\User\TestResultRequest;
use App\Http\Controllers\Controller;
use App\Model\TestResult;
use App\Services\User\TestAnswers;

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
     */
    public function __construct(TestAnswers $testAnswers, TestResult $result)
    {
        $this->testAnswers = $testAnswers;
        $this->result = $result;
    }

    public function answer(TestResultRequest $request)
    {
        $isAnswered = $this->result
            ->where('user_id', auth()->user()->id)
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
        $data = $this->result->where('user_id', auth()->user()->id)->get();

        return response()->json(compact('data'));
    }
}
