<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    // one answer
    const TYPE_ONE = 1;
    // multiple answer
    const TYPE_MULTIPLE = 2;

    // by id answer
    const TYPE_FILL_AUTO = 1;
    // by value answer value
    const TYPE_FILL_MANUAL = 2;

    protected $fillable = [
        'test_id',
        'name',

        // одна відповідь/декілька
        'type',

        // тип вводу, сам або вибір по ідентифікатору
        'type_fill',

        // відповідь/відповіді
        'answer',
    ];

    protected $casts = [
        'answer' => 'json',
    ];

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function getAnswerAttribute($value)
    {
        $value = (array)json_decode($value);
        if (!$value['right'] || !$value['other']) {
            return $value;
        }

        $right = is_array($value['right']) ? $value['right'] : [ $value['right'] ];
        $other = $value['other'];

        $rights = Answer::whereIn('id', $right)->get();
        $others = Answer::whereIn('id', $other)->get();

        $value['right'] = $rights;
        $value['other'] = $others;

        return $value;
    }
}
