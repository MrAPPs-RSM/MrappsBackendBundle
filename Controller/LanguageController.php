<?php

namespace Mrapps\BackendBundle\Controller;

use Doctrine\Common\Annotations\AnnotationReader;
use Mrapps\BackendBundle\Classes\Utils;
use Mrapps\BackendBundle\Controller\BaseBackendController;
use Mrapps\BackendBundle\Builder\SidebarBuilder;
use Mrapps\BackendBundle\Entity\Language;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Mrapps\BackendBundle\Annotation\Sidebar;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/language")
 */
class LanguageController extends BaseBackendController
{
    /**
     * @Route("/edit/{id}", name="mrapps_language_edit")
     * @Route("/new", name="mrapps_language_new")
     * @Sidebar("language_new", parent="language_list", label="New Lingua", min_role="ROLE_ADMIN", visible=true, weight=0, icon="fa-spin")
     */
    public function newAction(Request $request, $id = null)
    {
        $create = $request->query->get('create');
        $em = $this->getDoctrine()->getManager();
        $language = ($id != null) ? $em->getRepository('MrappsBackendBundle:Language')->find($id): null;

        $fields = [
            ['title' => 'Nome', 'type' => 'text', 'name' => 'name', 'required' => true, 'value' => ($language != null) ? $language->getName() : null ],
            ['title' => 'Iso Code', 'type' => 'text', 'name' => 'iso_code', 'required' => true, 'value' => ($language != null) ? $language->getIsoCode() : null ],
            ['title' => 'Language Code', 'type' => 'text', 'name' => 'language_code', 'required' => false, 'value' => ($language != null) ? $language->getLanguageCode() : null ],
            ['title' => 'Date Format', 'type' => 'text', 'name' => 'date_format', 'required' => false, 'value' => ($language != null) ? $language->getDateFormat() : null ],
            ['title' => 'Visible', 'type' => 'checkbox', 'name' => 'visible', 'required' => false, 'value' => ($language != null) ? $language->getVisible() : null ],

        ];

        $breadcrumb = [
            ['url' => $this->generateUrl('mrapps_language_list'), "name" => 'Lista Lingue'],
            ['url' =>  ($id == null) ? $this->generateUrl('mrapps_language_new') : $this->generateUrl('mrapps_language_edit', ['id' => $id]) , "name" => ($id == null) ? 'New' : 'Edit'],
        ];

        return $this->forward('MrappsBackendBundle:Default:__new', array(
            'request' => $request,
            'title' => 'Lingua',
            'fields'  => $fields,
            'linkSave' => $this->generateUrl('mrapps_language_save'),
            'linkEdit' => $this->generateUrl('mrapps_language_edit'),
            'create' => ($create == null) ? false : true,
            'edit' => ($id == null) ? false : true,
            'linkBreadcrumb' => ['type' => 'url', 'url' => $breadcrumb],
        ));
    }
    
    
    /**
     * @Route("/list", name="mrapps_language_list")
     * @Sidebar("language_list", label="Lista Lingue", min_role="ROLE_ADMIN", visible=true, weight=0, icon="fa-spin")
     */
    public function indexAction(Request $request)
    {
        $tableColumns = array(
            array('title' => 'Id', 'type' => 'number', 'name' => 'id', 'filterable' => true, 'sortable' => true),
            array('title' => 'Nome', 'type' => 'text', 'name' => 'nome', 'filterable' => true, 'sortable' => true),
            array('title' => 'Iso Code', 'type' => 'text', 'name' => 'iso_code', 'filterable' => true, 'sortable' => true),
        );

        $defaultSorting = array("id" => "asc");
        $defaultFilter = array("id" => "", 'nome' => "", 'iso_code' => "");

        $breadcrumb = [
            ['url' => $this->generateUrl('mrapps_language_list'), "name" => 'Lista Lingue'],
        ];

        return $this->forward('MrappsBackendBundle:Default:__list', array(
            'request' => $request,
            'title'=>'Lingue',
            'tableColumns' => $tableColumns,
            'defaultSorting'  => $defaultSorting,
            'defaultFilter' => $defaultFilter,
            'linkData' => $this->generateUrl('mrapps_language_data'),
            'linkNew' => $this->generateUrl('mrapps_language_new'),
            'linkEdit' => $this->generateUrl('mrapps_language_edit'),
            'linkDelete' => $this->generateUrl('mrapps_language_delete'),
            'linkBreadcrumb' => ['type' => 'url', 'url' => $breadcrumb],
        ));
    }

    /**
     * @Route("/save", name="mrapps_language_save")
     */
    public function saveAction(Request $request) {
        $data = json_decode($request->getContent(), true);
        $name = $data['name'];
        $isoCode = $data['iso_code'];
        $languageCode = $data['language_code'];
        $dateFormat = $data['date_format'];
        $visible = $data['visible'];

        $em = $this->getDoctrine()->getManager();
        if($id = $request->request->get('id')){
            $language = $em->getRepository('MrappsBackendBundle:Language')->find($id);
        }else{
            $language = new Language();
        }

        $language->setName($name);
        $language->setIsoCode($isoCode);
        $language->setLanguageCode($languageCode);
        $language->setDateFormat($dateFormat);
        $language->setVisible($visible);

        $em->persist($language);
        $em->flush();

        return Utils::generateResponse(true, "Salvato", $language->getId());
    }

    /**
     * @Route("/data", name="mrapps_language_data")
     */
    public function dataAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = Utils::getListResults($em, 'MrappsBackendBundle:Language', $request->get('count'), $request->get('page'), $request->get('filter'), $request->get('sorting'));

        $output = array();
        foreach ($data as $a) {
            $output[] = array(
                'id' => $a->getId(),
                'nome' => $a->getName(),
                'iso_code' => $a->getIsoCode(),
            );
        }
        $json = json_encode($output);

        return new Response($json);

    }

    /**
     * @Route("/delete", name="mrapps_language_delete")
     */
    public function deleteAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

    }
}
