<?php

namespace App\Http\Controllers\Admin\Test;

use App\Http\Requests\Admin\Test\TestRequest;
use App\Model\Test;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    /**
     * @var Test
     */
    private $test;

    public function __construct(Test $test)
    {
        $this->test = $test;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->test->paginate();

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TestRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(TestRequest $request)
    {
        $test = $this->test->fill($request->all());
        $test->save();

        $test->load(['questions']);

        return response()->json([
            'data' => $test,
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
        $test = $this->test->find($id);

        return response()->json([
            'data' => $test
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TestRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(TestRequest $request, $id)
    {
        $test = $this->test->find($id)->fill($request->all());
        $test->save();

        $test->load(['questions']);

        return response()->json([
            'data' => $test,
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
        $test = $this->test->find($id);
        $test->delete();

        return response()->json([
            'message' => trans('api.deleted')
        ], 204);
    }
}
