<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class University extends Model
{

    protected $fillable = [
        'name',
        'position',
        'description'
    ];

    protected $casts = [
        'position' => 'json'
    ];


    public function faculties()
    {
        return $this->hasMany(Faculty::class);
    }

    public function image()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }

    public function images()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }
}
