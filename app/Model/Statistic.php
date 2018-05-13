<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    const INIT = 1;
    const TEST = 2;
    const END = 3;

    protected $fillable = [
        'user_id',
        'time',
        'status',
    ];
}
