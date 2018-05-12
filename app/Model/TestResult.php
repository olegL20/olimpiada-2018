<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TestResult extends Model
{
    protected $fillable = [
        'user_id',
        'test_id',
        'question_id',
        'answer',
        'result',
    ];

    protected $casts = [
        'answer' => 'json',
        'result' => 'bool',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
