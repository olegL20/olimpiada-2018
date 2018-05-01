<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class University extends Model
{

    protected $fillable = [
        'name',
        'position',
        'description',
        'address',
        'email',
        'phone',
        'site',
        'parent_id'
    ];

    protected $casts = [
        'position' => 'json'
    ];

    public function faculties()
    {
        return $this->hasMany(Faculty::class);
    }

    public function document()
    {
        return $this
            ->morphOne(Asset::class, 'assetable')
            ->where('type', Asset::FILE);
    }

    public function image()
    {
        return $this
            ->morphOne(Asset::class, 'assetable')
            ->where('type', Asset::IMAGE);
    }

    public function images()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }
}
