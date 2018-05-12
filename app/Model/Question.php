<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'test_id',
        'name',
        'type',
        'type_fill',
        'answers',
    ];

    protected $casts = [
        'answers' => 'json',
    ];

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
