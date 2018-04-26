<?php

namespace App\Http\Controllers;

use App\Model\User;
use Auth;
use Validator;
use App\Model\University;
use Illuminate\Http\Request;

class GlobalAdminController extends Controller
{
    public function setUniversity(Request $request) {
        $validator = Validator::make($request->all(), [
            "name" => "required|string|max:255",
            "position" => "required|string|max:255",
            "description" => "required|string|max:255",
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => 0,
                "errors" => $validator->errors(),
            ];
        } else {

            if (Auth::user()->role == User::ROLE_UNIVERSITY_ADMIN) {
                University::create([
                    "name" => $request->input("name"),
                    "position" => $request->input("position"),
                    "description" => $request->input("description"),
                ]);

                $data = [
                    "status" => 1,
                ];
            } else {
                $data = [
                    "status" => 0,
                    "errors" => "translation.permissionDeniedYouAreNotAdmin",
                ];
            }
        }
        return response()->json($data);
    }

    public function putUniversity(Request $request) {
        $validator = Validator::make($request->all(), [
            "name" => "required|string|max:255",
            "position" => "required|string|max:255",
            "description" => "required|string|max:255",
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => 0,
                "errors" => $validator->errors(),
            ];
        } else {

            if (Auth::user()->role == User::ROLE_UNIVERSITY_ADMIN) {
                University::update([
                    "name" => $request->input("name"),
                    "position" => $request->input("position"),
                    "description" => $request->input("description"),
                ]);

                $data = [
                    "status" => 1,
                ];
            } else {
                $data = [
                    "status" => 0,
                    "errors" => "translation.permissionDeniedYouAreNotAdmin",
                ];
            }
        }
        return response()->json($data);
    }

    public function getUniversity(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "university_id" => "required|integer",
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => 0,
                "errors" => $validator->errors(),
            ];
        } else {

            $university = University::find($request->input("university_id"));

            if (!is_null($university)) {
                $data = [
                    "status" => 1,
                ];
            } else {
                $data = [
                    "status" => 0,
                    "errors" => "translation.universityNotFound",
                ];
            }
        }
        return response()->json($data);
    }

}
