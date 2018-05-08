<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserScore extends Model
{
    protected $fillable = [
        'average_score_zno',
        'additional_courses',
        'subjects_score',
    ];

    protected $casts = [
        'subjects_score' => 'json'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
