# MrappsBackendBundle
Pannello Backend standard - Symfony2

##setup .gitignore
escludere la cartella web/uploads perchè è il percorso dove vengono salvate le immagini se usi lo spazio del server e non s3

##setup composer.json##

```
"mrapps/backendbundle": "dev-master”
"mrapps/amazonbundle": "dev-master", //opzionale - se si vuole usare s3

"repositories" : [
       {
           "type" : "vcs",
           "url" : "https://github.com/MrAPPs-RSM/MrappsAmazonBundle.git"
       },
       {
           "type" : "vcs",
           "url" : "https://github.com/MrAPPs-RSM/MrappsBackendBundle.git"
       }
   ]
```

##setup minimal routing.yml

```
_liip_imagine:
    resource: "@LiipImagineBundle/Resources/config/routing.xml"
    
mrapps_backend:
    resource: "@MrappsBackendBundle/Controller/"
    type:     annotation
    prefix:   /

fos_user_security:
    resource: "@FOSUserBundle/Resources/config/routing/security.xml"

fos_user_resetting:
    resource: "@FOSUserBundle/Resources/config/routing/resetting.xml"
    prefix: /resetting

fos_user_change_password:
    resource: "@FOSUserBundle/Resources/config/routing/change_password.xml"
    prefix: /change_password
    
```

## setup config.yml per usare swicth lingua in twig

```
twig:
    debug:            "%kernel.debug%"
    strict_variables: "%kernel.debug%"
    globals:
        mrappsBackendLanguages: "@mrapps.backend.languages"
```

##setup config.yml per usare liip_bundle + storage files locale

```
liip_imagine:
    resolvers:
            default:
                web_path:
                    cache_prefix: uploads/cache
    filter_sets:
        backend_thumbnail:
            quality: 85
            format: jpeg
            filters:
                relative_resize: { widen: 500 }
                background: { color: '#FFFFFF' }
```

##setup config.yml per usare liip_bundle + MrappsAmazonBundle

```
knp_gaufrette:
    stream_wrapper:
        protocol: gaufrette
        filesystems:
            amazon_s3: amazon_s3_fs
    adapters:
        amazon_s3_adapter:
            aws_s3:
                service_id: amazonS3
                bucket_name: %amazon_s3_bucket%
                options:
                    create: true
    filesystems:
        amazon_s3_fs:
            adapter:    amazon_s3_adapter
            
liip_imagine:
    driver:    imagick
    loaders:
        stream.amazon_s3:
            stream:
                wrapper: gaufrette://amazon_s3/
    data_loader: stream.amazon_s3
    cache: cache.amazon_s3
    filter_sets:
        backend_thumbnail:
            quality: 85
            format: jpeg
            filters:
                relative_resize: { widen: 500 }
                background: { color: '#FFFFFF' }
```

##setup config.yml##

```
#solo se si include MrappsAmazonBundle
mrapps_amazon:
   parameters:
       access: ~
       secret: ~
       region: ~
       default_bucket: ~
       
mrapps_backend:
    default_routes:
        - { role: DEFAULT, name: app_contatti_list }
        - { role: ROLE_RISTORATORE, name: app_contatti_edit }
        - { role: ROLE_TRADUTTORE, name: app_ristorantitraduzioni_list }
    custom_css:
        - bundles/app/css/gourmet_panel.css
    logo_path: apple-touch-icon.png
    temp_folder: temp
    gmaps_api_key: %gmaps_api_key%
    file_accepted_types:
       image: image/jpeg, image/jpg, image/png, image/gif
       video: video/quicktime, video/mp4, video/mpeg, video/x-msvideo, video/3gpp
       pdf: application/pdf, x-pdf, application/vnd.pdf, text/pdf
       zip: application/zip, application/octet-stream
       json: application/json, text/plain, text/json
    customization:
       primary_color: '#B03843'
       text_on_primary_color: '#FFFFFF'
       text_hover_on_primary_color: '#999999'
       secondary_color: '#000000'
       text_on_secondary_color: '#FFFFFF'
       text_hover_on_secondary_color: '#999999'
```

##app/config/services.yml (sezione services)##

```
amazonS3:
     class: Aws\S3\S3Client
     factory_class: Aws\S3\S3Client
     factory_method: 'factory'
     arguments:
         -
             key: %amazon_access_key%
             secret: %amazon_secret_key%
             region: %amazon_region%


liip_imagine.data.loader.stream.amazon_s3:
     class: Liip\ImagineBundle\Imagine\Binary\Loader\StreamLoader
     arguments:
         - "@liip_imagine"
         - 'gaufrette://amazon_s3/'
     tags:
         - { name: 'liip_imagine.data.loader', loader: 'stream.amazon_s3' }


liip_imagine.cache.resolver.amazon_s3:
       class: Liip\ImagineBundle\Imagine\Cache\Resolver\AwsS3Resolver
       arguments:
           - "@amazonS3"
           - "%amazon_s3_bucket%"
       tags:
           - { name: 'liip_imagine.cache.resolver', resolver: 'cache.amazon_s3' }


liip_imagine.controller.imagine_filter:
     class: Liip\ImagineBundle\Controller\ImagineController
```

##bower.json##

```
{
  "name": "mrapps-common",
  "authors": [
    "Mr.APPs <info@mr-apps.com>"
  ],
  "description": "",
  "main": "",
  "moduleType": [
    "es6"
  ],
  "license": "MIT",
  "homepage": "",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "web/assets/vendor/",
    "test",
    "tests"
  ],
  "dependencies": {
    "angular-resource": "~1.4.7",
    "components-font-awesome": "~4.4.0",
    "ng-admin": "~0.9.1",
    "ng-table": "~0.8.3",
    "simple-line-icons": "~2.2.3",
    "bootstrap": "~3.3.5",
    "angular-chosen-localytics": "~1.0.7",
    "angular-file-upload": "~2.2.0",
    "sweetalert": "~1.1.3",
    "toastr": "~2.1.2",
    "angular-sanitize": "~1.4.7",
    "ngInfiniteScroll": "~1.2.1",
    "tinymce": "~4.2.8",
    "angular-ui-sortable": "~0.13.4",
    "angular-ui-tinymce": "~0.0.10",
    "angular-ui-bootstrap-bower": "~0.13",
    "SpinKit": "spinkit#~1.2.3",
    "ng-js-tree": "~0.0.7",
    "ui-select": "angular-ui-select#~0.14.2",
    "angular-ui-validate": "^1.2.2",
    "angular-minicolors": "~0.0.7",
    "fullcalendar": "^2.6.1",
    "angular-google-maps": "2.3.2",
    "angular-input-masks": "~2.2.0"
  },
  "resolutions": {
    "angular": ">=1.4.0"
  }
}
```

##.bowerrc##

```
{
    "directory": "web/assets/vendor/"
}
```

## Controller Backend ##
Per configurare le thumbnails o utilizzare altri servizi, è necessario estendere la classe BaseBackendController.

## Generazione Sidebar laterale ##

  - Assicurarsi che i Controller interessati estendano la classe BaseBackendController.
  - Importare le annotations:
```php
use Mrapps\BackendBundle\Annotation\Sidebar;
```
  - Configurare le annotations in corrispondenza delle action interessate:
```php
@Sidebar("ID_ELEMENTO", label="Elenco Piloti", min_role="ROLE_ADMIN", visible=true, weight=3, parent="ID_ELEMENTO_PADRE", icon="icon-layers")
```
  - Una volta terminata la configurazione, generare la struttura su Database:
```!/bin/bash
app/console mrapps:backend:buildsidebar
```
