<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SubjectCoefficient extends Model
{
    protected $fillable = [
        'name',
        'coefficient',
        'major_id',
    ];

    public $timestamps = false;

    public function major()
    {
        return $this->belongsTo(Major::class);
    }
}
