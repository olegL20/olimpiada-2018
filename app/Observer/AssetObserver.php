<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 01.05.18
 * Time: 21:25
 */

namespace App\Observer;


use App\Model\Asset;
use App\Services\AssetService;

class AssetObserver
{
    /**
     * @var AssetService
     */
    private $assetService;

    /**
     * AssetObserver constructor.
     * @param AssetService $assetService
     */
    public function __construct(AssetService $assetService)
    {
        $this->assetService = $assetService;
    }

    public function deleting(Asset $asset)
    {
        $this->assetService->removeFiles([$asset->source]);
    }
}