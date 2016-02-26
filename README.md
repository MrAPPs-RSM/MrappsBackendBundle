# MrappsBackendBundle
Pannello Backend standard - Symfony2

##setup .gitignore
escludere la cartella web/uploads perchè è il percorso dove vengono salvate le immagini si usi lo spazio del server e non s3

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
    sidebar_menu: [{ has_submenu: true, min_role: ROLE_USER, title: Voce 1, icon: icon-test, submenu: [{ title: Submenu 1, route_name: mrapps_backend_index }, { title: Submenu 2, route_name: mrapps_backend_index }] }, { has_submenu: false, min_role: ROLE_ADMIN, title: Voce 2, icon: icon-test, route_name: mrapps_backend_index }]
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
