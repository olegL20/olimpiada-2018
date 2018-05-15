<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    protected $fillable = [
        'department_id',
        'name',
        'description',
        'koef',
        'user_id',
    ];


    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function subjectsCoefficient()
    {
        return $this->hasOne(SubjectCoefficient::class);
    }
}
