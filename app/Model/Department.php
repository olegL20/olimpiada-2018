<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = [
        'name',
        'description',
        'faculty_id',
        'user_id',
    ];

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function majors()
    {
        return $this->hasMany(Major::class);
    }

}
