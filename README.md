# MrappsBackendBundle
Pannello Backend standard - Symfony2

##setup composer.json##

```
"mrapps/amazonbundle": "dev-master",
       "mrapps/backendbundle": "dev-master”

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
mrapps_amazon:
   parameters:
       access: ~
       secret: ~
       region: ~
       default_bucket: ~
       
mrapps_backend:
   temp_folder: temp
   file_accepted_types:
       image: image/jpeg, image/jpg, image/png, image/gif
       video: video/quicktime, video/mp4, video/mpeg, video/x-msvideo, video/3gpp
       pdf: application/pdf, x-pdf, application/vnd.pdf, text/pdf
   sidebar_menu: [{ has_submenu: true, min_role: ROLE_USER, title: Voce 1, icon: icon-test, submenu: [{ title: Submenu 1, route_name: mrapps_backend_default_index }, { title: Submenu 2, route_name: mrapps_backend_default_index }] }, { has_submenu: false, min_role: ROLE_ADMIN, title: Voce 2, icon: icon-test, route_name: mrapps_backend_default_index }]
```
