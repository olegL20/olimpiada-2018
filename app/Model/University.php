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
        'parent_id',
        'zip_code',
    ];

    protected $casts = [
        'position' => 'json',
    ];

    protected $with = [
        'image',
        'document',
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function invite()
    {
        return $this->hasOne(AdminUniversityInvite::class);
    }

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
