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
}
