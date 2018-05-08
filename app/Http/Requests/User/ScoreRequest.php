<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ScoreRequest extends FormRequest
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
            'average_score_zno' => 'required',
            'additional_courses' => 'required',
            'subjects_score' => 'required',
        ];
    }
}
