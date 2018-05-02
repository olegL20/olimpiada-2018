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

    protected $with = [
        'image'
    ];

    public function image()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }

    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function departments()
    {
        return $this->hasMany(Department::class);
    }
}