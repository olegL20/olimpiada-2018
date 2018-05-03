<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\MajorRequest;
use App\Model\Major;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MajorController extends Controller
{
    /**
     * @var Major
     */
    private $major;

    /**
     * MajorController constructor.
     * @param Major $major
     */
    public function __construct(Major $major)
    {
        $this->major = $major;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->major->paginate();

        return response()->json([
            'data' => $data
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
        $major = $this->major->find($id);

        return response()->json([
            'data' => $major
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MajorRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(MajorRequest $request)
    {
        $major = $this->major->fill($request->all());
        $major->save();

        return response()->json([
            'data' => $major,
            'message' => trans('api.major_created')
        ]);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  MajorRequest|Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(MajorRequest $request, $id)
    {
        $major = $this->major->find($id)->fill($request->all());
        $major->save();

        return response()->json([
            'data' => $major,
            'message' => trans('api.major_created')
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
        $major = $this->major->find($id);
        $major->delete();

        return response()->json([
            'message' => trans('api.major_deleted')
        ], 204);
    }
}
