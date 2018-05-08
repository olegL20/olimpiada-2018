<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    protected $fillable = [
        'department_id',
        'name',
        'description',
        'koef'
    ];


    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }
}
