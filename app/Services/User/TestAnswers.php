<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 12.05.18
 * Time: 12:13
 */

namespace App\Services\User;


use App\Model\Answer;
use App\Model\Question;
use App\Model\Test;
use App\Model\User;
use Illuminate\Contracts\Auth\Guard;

class TestAnswers
{
    /**
     * @var Question
     */
    private $question;

    /**
     * @var Test
     */
    private $test;

    /**
     * @var User
     */
    private $user;

    /**
     * @var Answer
     */
    private $answer;

    /**
     * AnswerController constructor.
     * @param Guard $guard
     * @param Test $test
     * @param Question $question
     * @param Answer $answer
     */
    public function __construct(
        Guard $guard,
        Test $test,
        Question $question,
        Answer $answer)
    {
        $this->question = $question;
        $this->test = $test;
        $this->answer = $answer;
        $this->user = $guard->user();
    }

    public function init(array $data)
    {
        $question = $this->question->findOrFail($data['question_id']);
        $test = $this->test->findOrFail($question->test_id);
        $userAnswer = $data['answer'];

        $result = [
            'user_id' => 1,
            'test_id' => $test->id,
            'question_id' => $question->id,
            'answer' => false,
            'result' => false,
        ];

        $answer = null;

        switch ($question->type) {
            case Question::TYPE_ONE:
                $answer = $this->oneAnswer($userAnswer, $question);
                break;

            case Question::TYPE_MULTIPLE:
                $answer = $this->multipleAnswer($userAnswer, $question);

                break;
        }

        return $this->fillAnswer($result, $answer);
    }

    protected function fillAnswer($result, $answer)
    {
        list($isCorrect, $userSelectedAnswer, $rightAnswer) = $answer;

        $result['result'] = $isCorrect;
        $result['answer']['userSelected'] = $userSelectedAnswer;
        $result['answer']['rightAnswer'] = $rightAnswer;

        return $result;
    }

    protected function oneAnswer($userAnswer, $question)
    {
        $rightAnswerId = $question->answer['right'];

        switch ($question->type_fill) {
            case Question::TYPE_FILL_AUTO:
                $rightAnswer = $this->answer->findOrFail($rightAnswerId);
                $userSelectedAnswer = $this->answer->findOrFail($userAnswer);

                return [
                    (int)$userAnswer === (int)$rightAnswerId,
                    $userSelectedAnswer,
                    $rightAnswer,
                ];
                break;

            case Question::TYPE_FILL_MANUAL:
                $rightAnswer = $this->answer->where('name', $question->answer)->firstOrFail();
                $userSelectedAnswer = $this->answer->where('name', $userAnswer)->firstOrFail();

                return [
                    $userAnswer === $question->answer['right'],
                    $userSelectedAnswer,
                    $rightAnswer,
                ];
                break;
        }
    }

    protected function multipleAnswer($userAnswers, $question)
    {
        $question->load(['answers']);
        $rightAnswers = $question->answer['right'];

        $count = count($userAnswers) === count($question->answer['right']);
        $isExists = array_intersect($rightAnswers, $userAnswers) === $question->answer['right'];

        if ($count && $isExists) {
            return [
                true,
                $userAnswers,
                $rightAnswers,
            ];
        }

        return [
            false,
            $userAnswers,
            $rightAnswers,
        ];

        /*switch ($question->type_fill) {
            case Question::TYPE_FILL_AUTO:

                if (array_intersect($userAnswers, $question->answer) === count($question->answer->right)) {
                    return [
                        true,
                        $userAnswers,
                        $rightAnswers,
                    ];
                }

                return [
                    false,
                    $userAnswers,
                    $rightAnswers,
                ];

                break;

            case Question::TYPE_FILL_MANUAL:

                if (array_intersect($userAnswers, $question->answer) === count($question->answer->right)) {
                    return [
                        true,
                        $userAnswers,
                        $rightAnswers,
                    ];
                }

                return [
                    false,
                    $userAnswers,
                    $rightAnswers,
                ];

                break;
        }*/
    }

    /*protected function manual()
    {

    }

    protected function auto()
    {

    }*/
}