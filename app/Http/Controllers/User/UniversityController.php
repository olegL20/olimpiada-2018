<?php

namespace App\Http\Controllers\User;


use App\Model\Department;
use App\Model\Faculty;
use App\Model\Major;
use App\Model\University;
use App\Http\Controllers\Controller;

class UniversityController extends Controller
{
    /**
     * @var University
     */
    private $university;
    /**
     * @var Faculty
     */
    private $faculty;
    /**
     * @var Department
     */
    private $department;
    /**
     * @var Major
     */
    private $major;

    /**
     * UniversityController constructor.
     * @param University $university
     * @param Faculty $faculty
     * @param Department $department
     * @param Major $major
     */
    public function __construct(
        University $university,
        Faculty $faculty,
        Department $department,
        Major $major
    )
    {
        $this->university = $university;
        $this->faculty = $faculty;
        $this->department = $department;
        $this->major = $major;
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
        $data = $this->university->findOrFail($id);

        return response()->json(compact('data'));
    }

    public function getFacultiesByUniversity($universityId)
    {
        $data = $this->faculty->where('university_id', $universityId)->get();

        return response()->json(compact('data'));
    }

    public function getDepartmentsByFaculty($facultyId)
    {
        $data = $this->department->where('faculty_id', $facultyId)->get();

        return response()->json(compact('data'));
    }

    public function getMajorsByDepartment($departmentId)
    {
        $data = $this->major->where('department_id', $departmentId)->get();

        return response()->json(compact('data'));
    }
}
