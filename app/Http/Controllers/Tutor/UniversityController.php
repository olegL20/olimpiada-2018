<?php

namespace App\Http\Controllers\Tutor;


use App\Model\University;
use App\Http\Controllers\Controller;

class UniversityController extends Controller
{
    /**
     * @var University
     */
    private $university;

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
        $universityId = auth()->user()->university_id;

        $data = $this->university->findOrFail($universityId);

        return response()->json(compact('data'));
    }
}
