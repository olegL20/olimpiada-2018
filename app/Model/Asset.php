<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    const IMAGE = 'image';
    const FILE = 'file';

    protected $fillable = [
        'assetable_id',
        'assetable_type',
        'source',
        'type'
    ];

    public function assetable()
    {
        return $this->morphTo();
    }
}
