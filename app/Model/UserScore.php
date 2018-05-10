<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserScore extends Model
{
    protected $fillable = [
        'user_id',

        // середній бал документа про повну загальну середню освіту
        'average_score_zno',

        // бал за успішне закінчення підготовчих курсів вищого навчального закладу для вступу до нього за шкалою від 100 до 200 балів при вступі на спеціальності
        'additional_courses',

        // бали по предметам ЗНО
        'subjects_score',

        // розраховується при створенні
        'summary',
    ];

    protected $casts = [
        'subjects_score' => 'json'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
