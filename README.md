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
    default_route_name: rotta_di_default
    logo_path: path_del_logo
    temp_folder: temp
    file_accepted_types:
       image: image/jpeg, image/jpg, image/png, image/gif
       video: video/quicktime, video/mp4, video/mpeg, video/x-msvideo, video/3gpp
       pdf: application/pdf, x-pdf, application/vnd.pdf, text/pdf
       zip: application/zip, application/octet-stream
       json: application/json, text/plain, text/json
    sidebar_menu: [{ has_submenu: true, min_role: ROLE_USER, title: Voce 1, icon: icon-test, submenu: [{ title: Submenu 1, route_name: mrapps_backend_index }, { title: Submenu 2, route_name: mrapps_backend_index }] }, { has_submenu: false, min_role: ROLE_ADMIN, title: Voce 2, icon: icon-test, route_name: mrapps_backend_index }]
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
    "ngmap": "~1.14.9",
    "tinymce": "~4.2.8",
    "angular-ui-sortable": "~0.13.4",
    "angular-ui-tinymce": "~0.0.10",
    "angular-ui-bootstrap-bower": "~0.13",
    "SpinKit": "spinkit#~1.2.3",
    "ng-js-tree": "~0.0.7",
    "ui-select": "angular-ui-select#~0.14.2",
    "angular-ui-validate": "^1.2.2"
  }
}
```

##.bowerrc##

```
{
    "directory": "web/assets/vendor/"
}
```
