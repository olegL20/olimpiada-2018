<?php

namespace App\Http\Controllers\Admin;


use App\Http\Requests\Admin\FacultyRequest;
use App\Model\Faculty;
use App\Services\AssetService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FacultyController extends Controller
{
    /**
     * @var Faculty
     */
    private $faculty;
    /**
     * @var AssetService
     */
    private $asset;

    /**
     * FacultyController constructor.
     * @param Faculty $faculty
     * @param AssetService $asset
     */
    public function __construct(Faculty $faculty, AssetService $asset)
    {
        $this->faculty = $faculty;
        $this->asset = $asset;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->faculty->paginate();

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $faculty = $this->faculty->find($id);

        return response()->json([
            'data' => $faculty
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param FacultyRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(FacultyRequest $request)
    {
        $faculty = $this->faculty->fill($request->except('image'));
        $faculty->save();

        if ($request->has('image')) {
            $image = $this->asset->image(AssetService::fileRandomName('jpg'), $request->get('image'));
            $faculty->image()->save($image);
        }

        $faculty->load('image');

        return response()->json([
            'data' => $faculty,
            'message' => trans('api.faculty_created')
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param FacultyRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(FacultyRequest $request, $id)
    {
        $faculty = $this->faculty->find($id)->fill($request->except('image'));

        $universityImage = $faculty->image;
        $this->asset->removeFiles([$universityImage->source]);
        $faculty->image->delete();

        $faculty->save();

        $image = $this->asset->image(AssetService::fileRandomName('jpg'), $request->get('image'));
        $faculty->image()->save($image);

        $faculty->load(['image']);

        return response()->json([
            'data' => $faculty,
            'message' => trans('api.faculty_created')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $faculty = $this->faculty->find($id);
        $faculty->image->delete();
        $faculty->delete();

        return response()->json([
            'message' => trans('api.faculty_deleted')
        ], 204);
    }
}
