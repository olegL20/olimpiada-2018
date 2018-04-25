<?php

namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function getStudent(Request $request) {

        $query = User::where("role", User::USER);

        $query = ($request->filled("user_id"))
            ? $query->where("id", $request->input("user_id"))
            : $query->where("id", Auth::id());

        $student = $query->first();

        if (is_null($student)) {
            $data = [
                "status" => 0,
                "errors" => "translation.studentNotFound",
            ];
        } else {
            $data = [
                "status" => 1,
                "data" => $student,
            ];
        }
        return response()->json($data);
    }

    public function putStudent(Request $request) {

        if (Auth::user()->role == User::GLOBAL_ADMIN) {
            if ($request->filled("user_id")) {

                $student = User::find($request->input("user_id"));
            } else {
                $data = [
                    "status" => 0,
                    "errors" => "translation.userIdNotSpecified",
                ];
                return response()->json($data);
            }
        } else if (Auth::user()->role == User::USER) {
            $student = Auth::user();
        } else {
            $data = [
                "status" => 0,
                "errors" => "translation.youDontHaveEnoughRights",
            ];
            return response()->json($data);
        }

        if (!is_null($student)) {
            if ($request->filled("birthday")) {
                $student->birthday = $request->input("birthday");
            }
            $student->save();

            $data = [
                "status" => 1,
            ];
        } else {
            $data = [
                "status" => 0,
                "errors" => "translation.studentNotFound",
            ];
        }
        return response()->json($data);
    }
}
