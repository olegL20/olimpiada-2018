<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 09.12.17
 * Time: 11:29
 */

namespace App\Services;


use App\Model\Asset;
use GuzzleHttp\Client as GuzzleClient;
use Symfony\Component\HttpFoundation\File\Exception\UploadException;


/**
 * Class FileUploader
 * @package App\Services\FileUploader
 *
 * @example
 *
 * $imagePath = $fileService
 *   ->changeRelativePath('images/dinners')
 *   ->changeContent($image->stream())
 *   ->changePrefix('menu_')
 *   ->changeFileName($this->id . '-' . str_random(8) . '.jpg')
 *   ->save();
 *
 */
class AssetService
{
    const IMAGES = 'images';
    const FILES = 'files';

    /**
     * File content
     *
     * @var string
     */
    protected $content = null;

    /**
     * Filename prefix
     *
     * @var string
     */
    protected $filenamePrefix = null;

    /**
     * @var string
     */
    protected $filename = '';

    /**
     * Path to upload directory
     *
     * @var string
     */
    protected $destinationDirectory = '';

    /**
     * @var string
     */
    protected $relativePath = AssetService::IMAGES;

    /**
     * @var null|\Storage
     */
    protected $storage = null;
    /**
     * @var ImageService
     */
    private $imageService;
    /**
     * @var GuzzleClient
     */
    private $httpClient;

    /**
     * FileUploader constructor.
     * @param ImageService $imageService
     * @param GuzzleClient $httpClient
     * @internal param GuzzleClient $client
     */
    public function __construct(ImageService $imageService, GuzzleClient $httpClient)
    {
        $this->destinationDirectory = config('core.upload_root');

        $this->storage = \Storage::drive('dropbox');

        if (!$this->storage->exists($this->destinationDirectory)) {
            $this->storage->makeDirectory($this->destinationDirectory);
        }

        $this->imageService = $imageService;
        $this->httpClient = $httpClient;
    }

    /**
     * @param $content
     * @return $this
     */
    public function changeContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @param $base64
     * @return $this
     */
    public function fromBase64($base64)
    {
        $this->content = $content = base64_decode($base64);

        return $this;
    }

    /**
     * @param $url
     * @return $this
     */
    public function fromUrl($url)
    {
        $response = $this->httpClient->get($url);

        $this->content = (string)$response->getBody();

        return $this;
    }

    /**
     * @param $prefix
     * @return $this
     */
    public function changePrefix($prefix)
    {
        $this->filenamePrefix = $prefix;

        return $this;
    }

    /**
     * @param $filename
     * @return $this
     */
    public function changeFileName($filename)
    {
        $this->filename = $filename;

        return $this;
    }

    /**
     * @param $path
     * @return $this
     */
    public function changeRelativePath($path)
    {
        $this->relativePath = $path;

        return $this;
    }

    /**
     * @return string
     */
    public function getFullPath()
    {
        return $this->destinationDirectory . $this->relativePath . '/';
    }

    /**
     * @return string
     */
    public function getFullFileName()
    {
        $prefix = $this->filenamePrefix ? $this->filenamePrefix : '';
        return $prefix . $this->filename;
    }

    public function save()
    {

        $fullPath = $this->getFullPath();

        if (!$this->storage->exists($fullPath)) {
            $this->storage->makeDirectory($fullPath);
        }

        $filename = $this->getFullFileName();

        $filePath = $fullPath . $filename;

        $result = $this->storage->put($filePath, $this->content);

        if (!$result) {
            throw new UploadException("Couldn't upload " . $fullPath);
        }

        return $filePath;

    }

    /**
     * @param $files
     */
    public function removeFiles($files)
    {
        foreach ($files as $file) {
            if ($this->storage->exists($file)) {
                $this->storage->delete($file);
            }
        }
    }

    public function create($data, $name, $type)
    {
        $path = $this
            ->changeContent((string)$data)
            ->changeFileName($name)
            ->save();

        $asset = new Asset(['source' => $path, 'type' => $type]);

        return $asset;
    }

    public function image($name, $data)
    {
        $image = $this->imageService->from($data)->secureResize()->stream();

        return $this->create((string)$image, $name, Asset::IMAGE);
    }

    public function file($data, $name)
    {
        return $this->create($data, $name, Asset::IMAGE);
    }

    public static function dropboxMakeFileUrl($relativePath)
    {
        $storage = \Storage::drive('dropbox');
        $adapter = $storage->getAdapter();
        /**
         * @var \Spatie\Dropbox\Client $client
         */
        $client = $adapter->getClient();

        return $client->getTemporaryLink($relativePath);
    }

    public static function fileRandomName($extension, $prefix = null)
    {
        $prefix = $prefix ?? '_' . $prefix;

        return str_random(8) . $prefix . '.' . $extension;
    }

}