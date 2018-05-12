<?php

namespace App\Http\Controllers\Admin\Test;

use App\Http\Requests\Admin\Test\QuestionRequest;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    /**
     * @var Question
     */
    private $question;

    public function __construct(Question $question)
    {
        $this->question = $question;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->question->paginate();

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param QuestionRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuestionRequest $request)
    {
        $question = $this->question->fill($request->all());
        $question->save();

        $question->load(['answers']);

        return response()->json([
            'data' => $question,
            'message' => trans('api.created')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $question = $this->question->find($id);

        return response()->json([
            'data' => $question
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param QuestionRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(QuestionRequest $request, $id)
    {
        $question = $this->question->find($id)->fill($request->all());
        $question->save();

        $question->load(['answers']);

        return response()->json([
            'data' => $question,
            'message' => trans('api.updated')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $question = $this->question->find($id);
        $question->delete();

        return response()->json([
            'message' => trans('api.deleted')
        ], 204);
    }
}
