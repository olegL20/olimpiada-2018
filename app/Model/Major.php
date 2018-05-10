<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    protected $fillable = [
        'faculty_id',
        'name',
        'description',
        'koef'
    ];


    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function subjectsCoefficient()
    {
        return $this->hasOne(SubjectCoefficient::class);
    }
}
