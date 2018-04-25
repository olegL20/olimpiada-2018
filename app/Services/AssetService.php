<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 09.12.17
 * Time: 11:29
 */

namespace App\Services;


use GuzzleHttp\Client;
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
    protected $relativePath = 'uploads';

    /**
     * @var null|\Storage
     */
    protected $storage = null;

    /**
     * FileUploader constructor.
     */
    public function __construct()
    {
        $this->destinationDirectory = config('core.upload_root');

        $this->storage = \Storage::drive('dropbox');

        if (!$this->storage->exists($this->destinationDirectory)) {
            $this->storage->makeDirectory($this->destinationDirectory);
        }
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
        $client = new Client();
        $response = $client->get($url);

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

}