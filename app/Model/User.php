<?php

namespace App\Model;


use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    const USER = 'user';
    const UNIVERSITY_ADMIN = 'uni_admin';
    const GLOBAL_ADMIN = 'global_admin';

    // extramula
    const DAY_FORM = 0;
    const CORRESPONDENCE_FORM = 1;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'surname',
        'role',
        'uuid',
        'birthday',
        'provider',
        'extramula',

        'confirmed',
        'confirmed_token',

        'university_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'confirmed_token',
    ];

    protected $with = [
        'image'
    ];

    public function image()
    {
        return $this->morphOne(Asset::class, 'assetable')->where('type', Asset::IMAGE);
    }

    public function attachments()
    {
        return $this->morphOne(Asset::class, 'assetable', Asset::FILE);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}
