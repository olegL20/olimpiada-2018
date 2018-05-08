<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BranchKnowledge extends Model
{
    protected $table = 'branch_knowledges';

    protected $fillable = [
        'name',
        'major_id',
        'level',
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
        return $this->hasOne(Major::class);
    }
}
