<?php

namespace App\Http\Controllers;

use App\Http\Requests\Student\GetStudentRequest;
use App\Http\Requests\Student\PutStudentRequest;
use Validator;
use App\Model\User;

class StudentController extends Controller
{
    public function getStudent(GetStudentRequest $request)
    {
        if ($request->filled('user_id')) {
                $students = User::where([
                    ['role', User::ROLE_USER],
                    ['id', $request->input('user_id')],
                ])->first();
        } else {
            $students = User::where('role', User::ROLE_USER)->get();
        }

        if (!is_null($students)) {
            $data = [
                'status' => 200,
                'message' => 'api.studentReceived',
                'data' => $students,
            ];
        } else {
            $data = [
                'status' => 404,
                'message' => 'api.usersWithRoleStudentNotFound',
            ];
        }

        return response()->json([$data], $data['status']);
    }

    public function putStudent(PutStudentRequest $request)
    {
        if ($request->filled('user_id')) {
            $student = User::find($request->input('user_id'))
                ->where('role', User::ROLE_USER)
                ->first();
        } else {
            $student = User::where([
                ['id', auth()->id()],
                ['role', User::ROLE_USER],
            ])->first();
        }

        if (!is_null($student)) {
            $student->fill($request->all());
            $student->save();

            $data = [
                'status' => 200,
                'message' => 'studentDataСhanged',
            ];
        } else {
            $data = [
                'status' => 404,
                'message' => 'api.userNotFound',
            ];
        }

        return response()->json($data, $data['status']);
    }
}
