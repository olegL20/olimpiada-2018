<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\SubjectCoefficientRequest;
use App\Model\SubjectCoefficient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubjectCoefficientController extends Controller
{
    /**
     * @var SubjectCoefficient
     */
    private $coefficient;

    /**
     * SubjectCoefficientController constructor.
     * @param SubjectCoefficient $coefficient
     */
    public function __construct(SubjectCoefficient $coefficient)
    {
        $this->coefficient = $coefficient;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->coefficient->paginate();

        return response()->json(compact('data'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param SubjectCoefficientRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SubjectCoefficientRequest $request)
    {
        $data = $this->coefficient->fill($request->all());
        $this->coefficient->save();

        return response()->json([
            'data' => $data,
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
        $data = $this->coefficient->find($id);

        return response()->json(compact('data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param SubjectCoefficientRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(SubjectCoefficientRequest $request, $id)
    {
        $coefficient = $this->coefficient->find($id);
        $coefficient->fill($request->all());
        $coefficient->save();

        return response()->json([
            'data' => $coefficient,
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
        $this->coefficient->find($id)->delete();

        return response()->json([
            'message' => trans('api.deleted')
        ], 204);
    }
}
