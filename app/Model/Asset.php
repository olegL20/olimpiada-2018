<?php

namespace App\Model;

use App\Services\AssetService;
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

    protected $hidden = [
        'created_at',
        'updated_at',
        'assetable_id',
        'assetable_type',
    ];

    public function assetable()
    {
        return $this->morphTo();
    }

    public function getSourceAttribute($value)
    {
        return AssetService::dropboxMakeFileUrl($value);
    }
}
