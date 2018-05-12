<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $fillable = [
        'name',
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
