<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InfoTransferScore extends Model
{
    protected $table = 'info_transfer_scores';

    public $timestamps = false;

    protected $fillable = [
        'score_school',
        'score_related',
    ];
}
