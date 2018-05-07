<?php

namespace App\Http\Controllers\User;


use App\Model\University;
use App\Http\Controllers\Controller;

class UniversityController extends Controller
{
    /**
     * @var University
     */
    private $university;

    /**
     * UniversityController constructor.
     * @param University $university
     */
    public function __construct(University $university)
    {
        $this->university = $university;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->university->all();

        return response()->json(compact('data'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = $this->university->firstOrFail($id);

        return response()->json(compact('data'));
    }
}
