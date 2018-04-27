<?php

namespace App\Http\Requests\Student;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class PutStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|integer',
            'email' => [
                "email",
                "max:255",
                Rule::unique('users')->ignore(auth()->user()->id),
            ],
            'password' => 'string|min:8|confirmed',
            'birthday' => 'date',
            'uuid' => 'max:255',
            'provider' => 'max:255',
        ];
    }
}
