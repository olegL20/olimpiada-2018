<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\AssociateAdminUniversityRequest;
use App\Http\Requests\Admin\InviteAdminRequest;
use App\Http\Requests\Admin\AdminUniversityRegisterRequest;
use App\Mail\Admin\InviteAdmin;
use App\Mail\Confirmation;
use App\Model\AdminUniversityInvite;
use App\Model\University;
use App\Model\User;
use App\Services\AssetService;
use App\Http\Controllers\Controller;

class InviteAdminUniversityController extends Controller
{
    /**
     * @var AdminUniversityInvite
     */
    private $universityInvite;
    /**
     * @var University
     */
    private $university;
    /**
     * @var AssetService
     */
    private $asset;

    public function __construct(AdminUniversityInvite $universityInvite, University $university, AssetService $asset)
    {
        $this->universityInvite = $universityInvite;
        $this->university = $university;
        $this->asset = $asset;
    }

    public function invite(InviteAdminRequest $request, InviteAdmin $inviteMail)
    {
        $email = $request->get('email');
        $invite = $this->universityInvite->where('email', $email)->first();
        if ($invite) {
            return response()->json([
                'message' => trans('api.invite_by_email_exists')
            ], 400);
        }

        $data = $request->all();
        $data['name'] = trans('api.tutor_text');

        $inviteCode = str_random('15');
        $universityId = $data['university_id'];
        $university = $this->university->find($universityId);

        $invite = $this->universityInvite->create([
            'invite_code' => $inviteCode,
            'university_id' => $universityId,
            'email' => $email,
        ]);

        $data['invite'] = $invite;
        $data['university'] = $university;

        $inviteMail->send($data);

        return response()->json([
            'data' => $data,
            'message' => trans('api.invite_created')
        ]);
    }

    public function register($inviteCode, AdminUniversityRegisterRequest $request, Confirmation $confirmation)
    {
        $invite = $this->universityInvite->where('invite_code', $inviteCode);
        if (!$invite) {
            return response()->json([
                'message' => trans('api.invite_not_found'),
            ], 404);
        }

        \DB::transaction(function () use ($request, $confirmation, $invite) {
            $user = new User();
            $user->fill($request->except('image'));
            $user->role = User::UNIVERSITY_ADMIN;
            $user->confirmed = false;
            $user->confirmed_token = hash('md5', $user->email . time());
            $user->save();

            $image = $this->asset->image(AssetService::fileRandomName('jpg'), $request->get('image'));
            $user->image()->save($image);

            $data = $user->toArray();
            $data['token'] = $user->confirmed_token;
            $confirmation->send($data);

            $invite->delete();
        });

        return response()->json([
            'data' => compact('user'),
            'message' => trans('api.admin_university_created')
        ]);
    }

    public function associate(AssociateAdminUniversityRequest $request, User $user)
    {
        $user = $user->find($request->get('user_id'));
        $user->university_id = $request->get('university_id');
        $user->save();

        return response()->json([
            'message' => trans('api.associated')
        ]);
    }
}
