<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BranchKnowledge extends Model
{
    protected $fillable = [
        'name',
        'major_id',
        'parent_id',
    ];

    public $timestamps = false;

    public function parent()
    {
        return $this->belongsTo(BranchKnowledge::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(BranchKnowledge::class, 'parent_id');
    }

    public function major()
    {
        return $this->belongsTo(Major::class);
    }
}
