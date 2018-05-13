<?php

namespace App\Http\Controllers\Admin;

use App\Model\University;
use App\Http\Controllers\Controller;

class InviteController extends Controller
{
    /**
     * @var University
     */
    private $university;

    /**
     * InviteController constructor.
     * @param University $university
     */
    public function __construct(University $university)
    {
        $this->university = $university;
    }

    public function index()
    {
        $data = $this->university->with(['invite', 'user'])->paginate();

        return response()->json(compact('data'));
    }

}
