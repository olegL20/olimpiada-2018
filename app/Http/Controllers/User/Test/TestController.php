<?php

namespace App\Http\Controllers\User\Test;

use App\Model\Test;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    /**
     * @var Test
     */
    private $test;

    /**
     * TestController constructor.
     * @param Test $test
     */
    public function __construct(Test $test)
    {
        $this->test = $test;
    }

    public function index()
    {
        $data = $this->test->all();

        return response()->json(compact('data'));
    }

    public function getTest($id)
    {
        $data = $this->test->with(['questions.answers'])->findOrFail($id);

        return response()->json(compact('data'));
    }
}
