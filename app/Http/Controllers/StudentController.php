<?php

namespace App\Http\Controllers;

use Validator;
use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function getStudent(Request $request) {

        if ($request->filled("user_id")) {
            $validator = Validator::make($request->all(), [
                "user_id" => "required|integer",
            ]);

            if ($validator->fails()) {
                $data = [
                    "status" => 0,
                    "errors" => $validator->errors(),
                ];
                return response()->json($data);
            } else {
                $students = User::where([
                    ["role", User::ROLE_USER],
                    ["id", $request->input("user_id")],
                ])->first();
            }
        } else {
            $students = User::where("role", User::ROLE_USER)->get();
        }

        if (!is_null($students)) {
            $data = [
                "status" => 1,
                "data" => $students,
            ];
        } else {
            $data = [
                "status" => 0,
                "errors" => "translation.userStudentNotFound",
            ];
        }
        return response()->json($data);
    }

    public function putStudent(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "user_id" => "integer",
            "birthday" => "date",
            "password" => "string|min:6|confirmed",
            "email" => "email",
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => 0,
                "errors" => $validator->errors(),
            ];
            return response()->json($data);
        } else {
            if ($request->filled("user_id")) {
                $student = User::find($request->input("user_id"));
            } else {
                $student = User::where([
                    ["id", Auth::id()],
                    ["role", User::ROLE_USER],
                ])->first();
            }
        }
        if (!is_null($student)) {
            if (Auth::user()->role == User::ROLE_GLOBAL_ADMIN) {
                if ($request->filled("role")) {
                    $student->role = $request->input("role");
                }
                if ($request->filled("name")) {
                    $student->name = $request->input("name");
                }
                if ($request->filled("surname")) {
                    $student->surname = $request->input("surname");
                }
            }
            if ($request->filled("password")) {
                $student->password = bcrypt($request->input("password"));
            }
            if ($request->filled("birthday")) {
                $student->birthday = $request->input("birthday");
            }
            if ($request->filled("email")) {
                $student->email = $request->input("email");
                // TODO: send email;
            }
            if ($request->filled("uuid") && $request->filled("provider")) {
                $student->uuid = $request->input("uuid");
                $student->provider = $request->input("provider");
            }
            $student->save();

            $data = [
                "status" => 1,
            ];
        } else {
            $data = [
                "status" => 0,
                "errors" => "translation.userNotFound",
            ];
        }
        return response()->json($data);
    }
}
