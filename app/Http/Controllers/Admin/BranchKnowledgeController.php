<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\BranchKnowledgeRequest;
use App\Model\BranchKnowledge;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BranchKnowledgeController extends Controller
{
    /**
     * @var BranchKnowledge
     */
    private $branch;

    /**
     * BranchKnowledgeController constructor.
     * @param BranchKnowledge $branch
     */
    public function __construct(BranchKnowledge $branch)
    {
        $this->branch = $branch;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->branch->all();

        return response()->json(compact('data'));
    }

    public function getChildren($id)
    {
        $data = $this->branch->where('parent_id', $id)->with('major')->get();

        return response()->json(compact('data'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BranchKnowledgeRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(BranchKnowledgeRequest $request)
    {
        $this->branch->fill($request->all());
        $this->branch->save();

        return response()->json([
            'data' => $this->branch,
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
        $data = $this->branch->find($id);

        return response()->json([
            'data' => $data,
            'message' => trans('api.deleted')
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param BranchKnowledgeRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(BranchKnowledgeRequest $request, $id)
    {
        $this->branch->find($id)->fill($request->all());
        $this->branch->save();

        return response()->json([
            'data' => $this->branch,
            'message' => trans('api.created')
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
        $this->branch->find($id)->delete();

        return response()->json([
            'message' => trans('api.deleted')
        ], 204);
    }
}
