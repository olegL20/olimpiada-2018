<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = [
        'question_id',
        'name',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
