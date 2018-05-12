<?php

namespace App\Http\Controllers\Admin\Test;

use App\Http\Requests\Admin\Test\AnswerRequest;
use App\Model\Answer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnswerController extends Controller
{
    /**
     * @var Answer
     */
    private $answer;

    public function __construct(Answer $answer)
    {
        $this->answer = $answer;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->answer->paginate();

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param AnswerRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(AnswerRequest $request)
    {
        $answer = $this->answer->fill($request->all());
        $answer->save();

        return response()->json([
            'data' => $answer,
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
        $answer = $this->answer->find($id);

        return response()->json([
            'data' => $answer
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AnswerRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(AnswerRequest $request, $id)
    {
        $answer = $this->answer->find($id)->fill($request->all());
        $answer->save();

        return response()->json([
            'data' => $answer,
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
        $answer = $this->answer->find($id);
        $answer->delete();

        return response()->json([
            'message' => trans('api.deleted')
        ], 204);
    }
}
