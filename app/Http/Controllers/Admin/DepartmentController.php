<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\DepartmentRequest;
use App\Model\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller
{
    /**
     * @var Department
     */
    private $department;

    /**
     * FacultyController constructor.
     * @param Department $department
     */
    public function __construct(Department $department)
    {
        $this->department = $department;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->department->paginate();

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
        $department = $this->department->find($id);

        return response()->json([
            'data' => $department
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  DepartmentRequest|Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DepartmentRequest $request)
    {
        $department = $this->department->fill($request->all());
        $department->save();

        return response()->json([
            'data' => $department,
            'message' => trans('api.department_created')
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  DepartmentRequest|Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DepartmentRequest $request, $id)
    {
        $department = $this->department->find($id)->fill($request->all());
        $department->save();

        return response()->json([
            'data' => $department,
            'message' => trans('api.department_update')
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
        $department = $this->department->findOrFail($id);
        $department->delete();

        return response()->json([
            'message' => trans('api.department_deleted'),
        ], 200);
    }
}
