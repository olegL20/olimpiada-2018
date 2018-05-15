<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    protected $fillable = [
        'name',
        'university_id',
        'description',
        'user_id',
    ];

    protected $with = [
        'image'
    ];
    protected $appends = [
        'university'
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

    public function getUniversityAttribute()
    {
        if (!is_null($this->attributes['university_id'])) {
            return University::find($this->attributes['university_id']);
        }
        return null;
    }
}
