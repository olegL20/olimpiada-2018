<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 26.04.18
 * Time: 13:41
 */

namespace App\Services;


use Intervention\Image\ImageManager;

class ImageService
{
    /**
     * @var \Intervention\Image\Image
     */
    private $image;

    /**
     * @var \Intervention\Image\ImageManager
     */
    private $imageManager;

    public function __construct(ImageManager $imageManager)
    {
        $this->imageManager = $imageManager;
    }

    public function from($data)
    {
        $this->image = $this->imageManager->make($data);

        return $this;
    }

    public function secureResize($height = 1, $width = 1)
    {
        $imageHeight = $this->image->height();
        $imageWidth = $this->image->width();

        return $this->resize(
            $imageHeight - $height,
            $imageWidth - $width);
    }

    public function resize($height, $width) {
        return $this->image
            ->resize($width, $height);
    }
}