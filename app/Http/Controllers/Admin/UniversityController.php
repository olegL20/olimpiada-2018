<?php

namespace App\Http\Controllers\Admin;


use App\Http\Requests\Admin\UniversityRequest;
use App\Model\University;
use App\Services\AssetService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UniversityController extends Controller
{
    /**
     * @var University
     */
    private $university;

    /**
     * @var AssetService
     */
    private $asset;

    public function __construct(University $university, AssetService $asset)
    {
        $this->university = $university;
        $this->asset = $asset;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = University::paginate();

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UniversityRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(UniversityRequest $request)
    {
        $university = $this->university->fill($request->except('image'));
        $university->save();

        $image = $this->asset->image(AssetService::fileRandomName('jpg'), $request->get('image'));
        $university->image()->save($image);

        if ($request->has('file')) {
            $file = $this->asset->image(AssetService::fileRandomName('docx'), $request->get('file'));
            $university->document()->save($file);
        }

        $university->load(['image', 'document']);

        return response()->json([
            'data' => $university,
            'message' => trans('api.university_created')
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
        $university = $this->university->find($id);

        return response()->json([
            'data' => $university
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UniversityRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UniversityRequest $request, $id)
    {
        $university = $this->university->find($id)->fill($request->except('image'));

        $universityImage = $university->image;
        $this->asset->removeFiles([$universityImage->source]);
        $university->image->delete();

        $university->save();

        $image = $this->asset->image(AssetService::fileRandomName('jpg'), $request->get('image'));
        $university->image()->save($image);

        if ($request->has('file')) {
            $file = $this->asset->image(AssetService::fileRandomName('docx'), $request->get('file'));
            $university->document()->save($file);
        }

        $university->load(['image', 'document']);

        return response()->json([
            'data' => $university,
            'message' => trans('api.university_created')
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
        $university = $this->university->find($id);
        $university->image->delete();
        $document = $university->document;

        if ($document) {
            $document->delete();
        }
        $university->delete();

        return response()->json([
            'message' => trans('api.university_deleted')
        ], 204);
    }
}
