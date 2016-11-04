<?php

namespace Mrapps\BackendBundle\Tests\Services;


use Mrapps\BackendBundle\Services\ParametersHandler;
use Mrapps\BackendBundle\Services\PublicUrlProvider;

class PublicUrlProviderTest extends \PHPUnit_Framework_TestCase
{
    /**@var PHPUnit_Framework_MockObject_MockBuilder $parametersHandler */
    private $parametersHandler;

    public function setUp()
    {
        $this->requestStack = $this
            ->getMockBuilder('Symfony\Component\HttpFoundation\RequestStack')
            ->disableOriginalConstructor()
            ->getMock();

        $this->parametersHandler = $this
            ->getMockBuilder('Mrapps\BackendBundle\Services\ParametersHandler')
            ->disableOriginalConstructor()
            ->setMethods(["bundleMrappsAmazonExists", "getParameter"])
            ->getMock();


        $this->request = $this
            ->getMockBuilder('Symfony\Component\HttpFoundation\Request')
            ->disableOriginalConstructor()
            ->getMock();
    }


    public function testBaseUrlWhenAmazonBundleNotEnableReturnDomain()
    {
        $this->request->expects($this->once())
            ->method('getSchemeAndHttpHost')
            ->will($this->returnValue('http://erbozeta.accentratore'));
        $this->requestStack->expects($this->once())
            ->method('getCurrentRequest')
            ->will($this->returnValue($this->request));

        $this->parametersHandler->expects($this->once())
            ->method("bundleMrappsAmazonExists")
            ->willReturn(false);

        $this->urlProvider = new PublicUrlProvider(
            $this->requestStack,
            $this->parametersHandler
        );

        $this->assertEquals('http://erbozeta.accentratore/', $this->urlProvider->getBaseUrl());
    }

    public function testBaseUrlWhenAmazonBundleEnableReturnAwsDomain()
    {
        $this->request->expects($this->never());
        $this->requestStack->expects($this->never());

        $this->parametersHandler->expects($this->once())
            ->method("bundleMrappsAmazonExists")
            ->willReturn(true);


        $this->parametersHandler
            ->expects($this->exactly(2))
            ->method("getParameter")
            ->withConsecutive(
                $this->equalTo("mrapps_amazon.cdn.enable"),
                $this->equalTo("mrapps_amazon.parameters.default_bucket")
            )
            ->willReturnCallback(function ($parameter) {
                if ($parameter == "mrapps_amazon.cdn.enable") {
                    return false;
                } else {
                    return "erbozeta";
                }
            });

        $requestStack = $this
            ->getMockBuilder('Symfony\Component\HttpFoundation\RequestStack')
            ->disableOriginalConstructor()
            ->getMock();

        $this->urlProvider = new PublicUrlProvider(
            $requestStack,
            $this->parametersHandler
        );

        $this->assertEquals('https://erbozeta.s3.amazonaws.com/', $this->urlProvider->getBaseUrl());
    }


    public function testBaseUrlWhenAmazonBundleEnableReturnCdnDomainWhenEnabled()
    {
        $this->request->expects($this->never());
        $this->requestStack->expects($this->never());

        $this->parametersHandler->expects($this->once())
            ->method("bundleMrappsAmazonExists")
            ->willReturn(true);

        $this->parametersHandler
            ->expects($this->exactly(2))
            ->method("getParameter")
            ->withConsecutive(
                $this->equalTo("mrapps_amazon.cdn.enable"),
                $this->equalTo("mrapps_amazon.cdn.url")
            )
            ->willReturnOnConsecutiveCalls(
                true,
                "http://static.erbozeta.com/"
            );


        $requestStack = $this
            ->getMockBuilder('Symfony\Component\HttpFoundation\RequestStack')
            ->disableOriginalConstructor()
            ->getMock();

        $this->urlProvider = new PublicUrlProvider(
            $requestStack,
            $this->parametersHandler
        );

        $this->assertEquals('http://static.erbozeta.com/', $this->urlProvider->getBaseUrl());
    }

    /**
     * @expectedException \RuntimeException
     */
    public function testWheneverEntityIsMissedUriRequestThrowAnException()
    {
        $this->request->expects($this->once())
            ->method('getSchemeAndHttpHost')
            ->will($this->returnValue('http://erbozeta.accentratore'));
        $this->requestStack->expects($this->once())
            ->method('getCurrentRequest')
            ->will($this->returnValue($this->request));

        $this->urlProvider = new PublicUrlProvider(
            $this->requestStack,
            $this->parametersHandler
        );

        $this->urlProvider->getUri();
    }

    public function testProvidePublicUriOfFiles()
    {
        $this->request->expects($this->once())
            ->method('getSchemeAndHttpHost')
            ->will($this->returnValue('http://erbozeta.accentratore'));
        $this->requestStack->expects($this->once())
            ->method('getCurrentRequest')
            ->will($this->returnValue($this->request));

        $this->urlProvider = new PublicUrlProvider(
            $this->requestStack,
            $this->parametersHandler
        );

        $this->file = $this
            ->getMockBuilder('Mrapps\BackendBundle\Entity\File')
            ->disableOriginalConstructor()
            ->getMock();
        $this->file->expects($this->once())
            ->method('getRelativePath')
            ->will($this->returnValue('uploads/mrapps_backend_files/2f321da97661432d55a8f42dd1a727888c3f902b.jpg'));

        $this->assertSame(
            'http://erbozeta.accentratore/uploads/mrapps_backend_files/2f321da97661432d55a8f42dd1a727888c3f902b.jpg',
            $this->urlProvider
                ->setFileEntity($this->file)
                ->getUri()
        );
    }

    public function testProvidePublicUriOfImagesWhenAmazonBundleEnable()
    {
        $this->parametersHandler->expects($this->exactly(2))
            ->method("bundleMrappsAmazonExists")
            ->willReturn(true);


        $this->parametersHandler
            ->expects($this->exactly(2))
            ->method("getParameter")
            ->withConsecutive(
                $this->equalTo("mrapps_amazon.cdn.enable"),
                $this->equalTo("mrapps_amazon.parameters.default_bucket")
            )
            ->willReturnCallback(function ($parameter) {
                if ($parameter == "mrapps_amazon.cdn.enable") {
                    return false;
                } else {
                    return "erbozeta";
                }
            });


        $this->urlProvider = new PublicUrlProvider(
            $this->requestStack,
            $this->parametersHandler
        );

        $this->file = $this
            ->getMockBuilder('Mrapps\BackendBundle\Entity\Immagine')
            ->disableOriginalConstructor()
            ->getMock();
        $this->file->expects($this->once())
            ->method('getRelativePath')
            ->will($this->returnValue('uploads/mrapps_backend_images/65bc9c632702c1a60639718c02a2b1629536ba43.png'));

        $this->assertSame(
            'https://erbozeta.s3.amazonaws.com/mrapps_backend_images/65bc9c632702c1a60639718c02a2b1629536ba43.png',
            $this->urlProvider
                ->setFileEntity($this->file)
                ->getUri()
        );
    }
}
