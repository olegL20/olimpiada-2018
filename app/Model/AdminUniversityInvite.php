<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AdminUniversityInvite extends Model
{
    protected $table = 'admin_university_invites';

    protected $fillable = [
        'invite_code',
        'university_id',
        'email',
    ];
}
