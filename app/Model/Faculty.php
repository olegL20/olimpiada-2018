<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    protected $fillable = [
        'name',
        'university_id',
        'description'
    ];


    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function majors()
    {
        return $this->hasMany(Major::class);
    }
}
