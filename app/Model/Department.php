<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = [
        'name',
        'description'
    ];

    public function majors()
    {
        return $this->hasMany(Major::class);
    }

}
