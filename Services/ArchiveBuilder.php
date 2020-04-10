<?php

namespace Mrapps\BackendBundle\Services;

use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Promise;
use Psr\Http\Message\ResponseInterface;
use GuzzleHttp\Exception\RequestException;
use Mrapps\BackendBundle\Interfaces\FileInterface;
use Mrapps\BackendBundle\Interfaces\PublicUrlProviderInterface;
use Mrapps\AmazonBundle\Handler\S3Handler;

class ArchiveBuilder
{
    private $manager;

    private $zipArchive;

    private $archiveName;
    private $tempFolderPath;

    private $isArchiveCreated = false;

    private $urlProvider;

    private $kernel;

    private $amazon;

    private $promises;

    /**@var GuzzleClient $httpClient*/
    private $httpClient;

    public function __construct(
        EntityManager $manager,
        PublicUrlProvider $urlProvider,
        \AppKernel $kernel
    ) {
        $this->manager = $manager;
        $this->urlProvider = $urlProvider;
        $this->zipArchive = new \ZipArchive();
        $this->kernel = $kernel;
        $this->httpClient = new GuzzleClient();
    }

    public function setAmazonS3Service(S3Handler $amazon)
    {
        $this->amazon = $amazon;
    }

    public function setArchiveName($archiveName)
    {
        $this->archiveName = $archiveName;
        $this->tempFolderPath = str_replace(".zip", "", $archiveName);
    }

    public function getArchiveName()
    {
        return $this->archiveName;
    }

    private function ensureArchiveNameIsDefined()
    {
        if (!$this->archiveName) {
            throw new \RuntimeException(
                'Archive name is not yet defined!'
            );
        }
    }

    private function deleteDirectory($dir) {
        system('rm -rf -- ' . escapeshellarg($dir), $retval);
        return $retval == 0; // UNIX commands return zero on success
    }

    private function createArchive()
    {
        if(is_dir($this->tempFolderPath)){
            $this->deleteDirectory($this->tempFolderPath);
        }

        mkdir($this->tempFolderPath);
        $this->promises = [];

        if ($this->zipArchive->open($this->archiveName, \ZipArchive::CREATE | \ZipArchive::OVERWRITE) !== TRUE) {
            die ("An error occurred creating your ZIP file.");
        }

        $this->isArchiveCreated = true;
    }

    public function isArchiveCreated()
    {
        return $this->isArchiveCreated;
    }

    public function create()
    {
        $this->ensureArchiveNameIsDefined();
        $this->createArchive();
    }

    public function getArchive()
    {
        return $this->zipArchive;
    }

    public function addFromFileEntity(FileInterface $file)
    {
        $this->ensureArchiveNameIsDefined();

        $this->urlProvider->setFileEntity($file);

        $this->zipArchive->addFromString(
            $this->urlProvider->getRelativeUri(),
            $this->getFileContent($file->getAmazonS3Key())
        );
    }

    public function addFromFilePath($filePath)
    {
        $relativePath = str_replace($this->urlProvider->getBaseUrl(), "", $filePath);

        /**@var GuzzleClient $client * */
        $client = $this->httpClient;

        $absoluteFilePath = $this->tempFolderPath . "/" . str_replace("uploads/", "", $relativePath);
        $dirname = dirname($absoluteFilePath);
        if (!is_dir($dirname))
        {
            mkdir($dirname, 0755, true);
        }

        $resource = fopen($absoluteFilePath, 'w');
        //var_dump($this->getAmazonFileUrl($filePath));
        $this->promises[] = $client->requestAsync('GET', $this->getAmazonFileUrl($relativePath), ['sink' => $resource]);
    }

    public function addFromAmazonFilesPath($filesPath)
    {
        foreach ($filesPath as $filePath) {
            $this->addFromFilePath($filePath);
        }

        $this->downloadAwsFiles();
    }

    public function downloadAwsFiles(){
        if(is_array($this->promises) && count($this->promises)>0){
            Promise\settle($this->promises)->wait();
            $this->promises = [];
        }
    }

    private function getAmazonFileUrl($relativePath){
        if ($this->amazon) {
            return $this->amazon->getObjectUrlWithExpire(
                $relativePath,
                '+10 minutes'
            );
        }
        return null;
    }

    private function getFileContent($relativePath)
    {
        if ($this->amazon) {
            $amazonProtectedUrl = $this->amazon->getObjectUrlWithExpire(
                $relativePath,
                '+10 minutes'
            );

            $fileContent = @file_get_contents(
                $amazonProtectedUrl
            );
        } else {
            $fileContent = @file_get_contents(
                $this->kernel->getRootDir()
                . '/../web/uploads/'
                . $this->urlProvider->getRelativeUri()
            );
        }

        if (!$fileContent) {
            throw new \RuntimeException(
                'I cant get file content'
            );
        }

        return $fileContent;
    }

    public function addFromString($fileName, $content)
    {
        $this->zipArchive->addFromString($fileName, $content);
    }

    public function zipFolderAndClose(){
        $options = ['remove_all_path' => true, 'add_path' => 'mrapps_backend_files/'];
        $this->zipArchive->addGlob($this->tempFolderPath . "/mrapps_backend_files/*.{jpg,pdf}", GLOB_BRACE, $options);
        $options['add_path'] = 'mrapps_backend_images/';
        $this->zipArchive->addGlob($this->tempFolderPath . "/mrapps_backend_images/*.{jpg,pdf}", GLOB_BRACE, $options);
        $this->close();
    }

    public function close()
    {
        $this->zipArchive->close();
    }
}
