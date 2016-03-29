@charset "UTF-8";
@import url(//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,400italic);
    /*!
     *
     * Angle - Bootstrap Admin App + AngularJS
     *
     * Version: 3.1.0
     * Author: @themicon_co
     * Website: http://themicon.co
     * License: https://wrapbootstrap.com/help/licenses
     *
     */
    /* ========================================================================

     [Table of contents]

     1. Bootstrap reset
     1.1 bootstrap
     1.2 bootstrap-reset

     2. Typography
     2.1 typo

     3. Layout
     3.1 layout / .wrapper .content-wrapper
     3.2 top-navbar / .top-navbar
     3.3 sidebar / .sidebar
     3.4 offsidebar / .offsidebar
     3.5 preloader / .preloader

     4. Components
     4.1  button-extra
     4.2  placeholder / .box-placeholder
     4.3  panels
     4.4  progress-extra
     4.5  radial-bar / .radial-bar
     4.6  user-block / .user-block
     4.7  circles / .circle
     4.8  timeline / .timeline
     4.9  dropdown-extra
     4.10 row-extra / .row-table .row-flush
     4.11 half-float / .half-float
     4.12 masonry-grid / .row-masonry
     4.13 widget / .widget
     4.14 typeahead / .typeahead-ctrl
     4.15 animate
     4.16 loading-bar
     4.17 table-grid
     4.18 todo / .todo
     4.19 ngwig
     4.20 ngDialog
     4.21 nestable
     4.22 carousel
     4.23 masonry-grid-deck

     5. Charts
     5.1 chart-flot / .flot-chart
     5.2 chart-easypie / .easypie-chart

     6. Form elements
     6.1 form-elements
     6.2 form-imgcrop
     6.3 form-validation
     6.4 form-wizard
     6.5 form-tags
     6.6 uiselect
     6.7 code-editor

     7. Tables
     7.1 datatable
     7.2 table-extras
     7.3 table-ngtable
     7.4 table-ng-grid
     7.5 angular grid

     8. Plugins
     8.1 plugins
     8.2 slim-scroll / .slimScrollBar
     8.3 datepicker / .bootstrap-datetimepicker-widget
     8.4 alerts / .alerts
     8.5 notifiy / .notifiy
     8.6 calendar / .fc-*
     8.7 spinner / .whirl
     8.8 gmap / .gmap
     8.9 vector-map / vector-map
     8.10 portlets / .portlet

     9. Utilities
     9.1 utils

     10. Print CSS
     10.1 print

     11. Settings
     11.1 settings

     12. Documentation
     12.1 docs

     ========================================================================== */
    /* ========================================================================
     Component: bootstrap-reset.less
     ========================================================================== */
    .glyphicon {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translate(0, 0);
}
.glyphicon.pull-left {
    margin-right: 0.3em;
}
.glyphicon.pull-right {
    margin-left: 0.3em;
}
.glyphicon.glyphicon-chevron-left:before {
    content: "\f053";
}
.glyphicon.glyphicon-chevron-right:before {
    content: "\f054";
}
.glyphicon.glyphicon-chevron-up:before {
    content: "\f077";
}
.glyphicon.glyphicon-chevron-down:before {
    content: "\f078";
}
.glyphicon.glyphicon-folder-open:before {
    content: "\f07c";
}
[ng\:cloak],
[ng-cloak],
    [data-ng-cloak],
    [x-ng-cloak],
.ng-cloak,
.x-ng-cloak {
    display: none !important;
}
*:focus {
    outline: 0 !important;
}
a {
    outline: none !important;
}
a.text-muted:hover,
a.text-muted:focus {
    color: #748690;
}
[ng-click],
    [data-ng-click] {
    cursor: pointer;
}
hr {
    border-top: 1px solid #e4eaec;
}
now {
    display: inline-block;
}

.angular-google-map-container {
    height: 400px;
}

.navbar-toggle .icon-bar {
    background-color: #fff;
}
.list-group {
    line-height: 1.3;
}
.list-group .list-group-item {
    padding: 10px;
}
.panel > .list-group .list-group-item {
    border-top: 0;
}
.page-header {
    border-bottom-color: #e4eaec;
}
.panel .panel-heading {
    border-bottom: 0;
    font-size: 14px;
}
.panel .panel-heading a {
    text-decoration: none !important;
}
.panel.panel-default {
    border-top-width: 3px;
}
.well {
    border: 1px solid #dde6e9;
}
.jumbotron {
    border: 1px solid #dde6e9;
}
@media only screen and (min-width: 768px) {
.jumbotron {
        padding: 30px 15px;
    }
}
.nav-tabs > li > a {
    font-weight: bold;
    color: #515253;
    background-color: #edf1f2;
    margin: 0;
    border: 1px solid #dde6e9;
    border-radius: 0;
    padding: 10px 20px;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
    color: inherit;
    border-bottom-color: #fff;
}
.tab-content {
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 1px 1px 1px;
    border-color: #dde6e9;
}
.nav-pills + .tab-content {
    border: 0;
    padding: 0;
}
.p0 .tab-content {
    padding: 0 !important;
}
.btn {
    border-radius: 3px;
    font-size: 13px;
    border-color: transparent;
    -webkit-appearance: none;
    outline: none !important;
    -webkit-transition: all 0.1s;
    -o-transition: all 0.1s;
    transition: all 0.1s;
}
.btn.btn-link {
    box-shadow: none;
    border: 0;
}
.btn.btn-default {
    border-color: #eaeaea;
}
.input-group .btn {
    font-size: 14px;
    border-color: #dde6e9;
}
.input-group .input-sm + .input-group-btn .btn {
    font-size: 13px;
}
.form-control {
    box-shadow: 0 0 0 #000 !important;
}
.input-sm,
select.input-sm {
    height: 31px;
}
fieldset,
    div.dashed fieldset {
    padding-bottom: 20px;
    border-bottom: 1px dashed #eee;
    margin-bottom: 20px;
}
fieldset.last-child,
    fieldset:last-child {
    border-bottom: 0;
}
fieldset .form-group {
    margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
    input[type="text"],
        input[type="email"],
        input[type="search"],
        input[type="password"] {
        -webkit-appearance: none;
    }
}
.table > thead > tr > th {
    border-bottom-width: 1px;
}
.table > tbody + tbody {
    border-bottom-width: 1px;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
    border-bottom-width: 1px;
}
.progress {
    -webkit-box-shadow: 0 0 0 #000000;
    box-shadow: 0 0 0 #000000;
    border-radius: 3px;
    border: 1px solid #f1f1f1;
    background-color: #fff;
}
.progress .progress-bar {
    -webkit-box-shadow: 0 0 0 #000000;
    box-shadow: 0 0 0 #000000;
}
.popover {
    box-shadow: 0 0 0 #000;
    border-color: #eee;
    border-bottom: 2px solid #e4eaec;
    border-radius: 3px;
}
.popover .popover-title {
    border: 0;
}
.nav.nav-pills .active > a {
    background-color: #5d9cec;
}
.dropdown-menu {
    border-radius: 3px;
}
.dropdown-header {
    color: #a1a2a3;
}
.navbar-top .navbar-nav > .active > a {
    color: #999;
}
.navbar-top .navbar-nav > .active > a:hover,
.navbar-top .navbar-nav > .active > a:focus {
    color: #d1d2d3;
}
.navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #666;
}
.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
.navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #222;
}
.carousel .carousel-indicators {
    bottom: 0;
}
.carousel .carousel-control.left,
.carousel .carousel-control.right {
    background-image: none;
}
.carousel .carousel-control em {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
}
.nav,
.pagination,
.carousel,
.panel-title a {
    cursor: pointer;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
    border-bottom: 0;
}
.modal-backdrop {
    position: fixed;
    bottom: 0;
}
.topnavbar,
.navbar,
.navbar .dropdown-menu {
    filter: none !important;
}
/* ========================================================================
 Component: typo.less
 ========================================================================== */
body {
    font-family: "Source Sans Pro", sans-serif;
    color: #656565;
}
h1,
    h2,
    h3,
    h4 {
    font-weight: bold;
}
/* ========================================================================
 Component: layout.less
 ========================================================================== */
html {
    /* @replace rtl */
    direction: ltr;
    height: 100%;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
html,
    body {
    height: 100%;
}
.wrapper {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow-x: hidden;
}
.wrapper.ng-leave {
    display: none;
}
.wrapper > .aside {
    position: absolute;
    width: 220px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 116;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #ffffff;
}
.wrapper > .aside .aside-inner {
    padding-top: 110px;
    height: 100%;
    width: 220px;
    overflow: hidden;
}
.wrapper > .aside > .nav-floating {
    left: inherit;
    margin-left: 220px;
    z-index: 1110;
    min-width: 190px;
    overflow: auto;
}
.wrapper > .aside .dropdown-backdrop {
    z-index: -1;
}
.wrapper > section {
    position: relative;
    height: 100%;
    margin-left: 0;
    background-color: #f5f7fa;
    margin-bottom: 60px !important;
}
.wrapper > footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    border-top: 1px solid #e4eaec;
    padding: 20px;
    z-index: 109;
}
.wrapper > footer > p {
    margin: 0;
}
.content-wrapper {
    padding: 15px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: -1px;
}
.content-wrapper > .unwrap {
    margin: -15px;
}
@media only screen and (min-width: 768px) {
.content-wrapper > .unwrap {
        margin: -20px;
    }
}
.content-wrapper > h3,
.content-wrapper > .content-heading {
    font-size: 24px;
    line-height: 1.1;
    color: #929292;
    margin: -15px;
    margin-bottom: 20px;
    padding: 15px;
    font-weight: normal;
    background-color: #fafbfc;
    border-bottom: 1px solid #cfdbe2;
}
.content-wrapper > h3 > small,
.content-wrapper > .content-heading > small {
    display: block;
    font-size: 12px;
    color: #909fa7;
}
.content-wrapper > button,
.content-wrapper > .btn {
    margin: 10px 10px 0 0;
}
.content-wrapper .container,
.content-wrapper .container-fluid {
    padding-left: 0;
    padding-right: 0;
}
@media only screen and (min-width: 768px) {
.content-wrapper {
        padding: 20px;
    }
.content-wrapper > h3,
.content-wrapper > .content-heading {
        margin: -20px;
        margin-bottom: 20px;
        padding: 20px;
    }
.content-wrapper > button,
.content-wrapper > .btn {
        margin: 0;
    }
}
@media only screen and (min-width: 768px) {
    body {
        min-height: 100%;
    }
.wrapper > .aside .aside-inner {
        padding-top: 55px;
    }
.wrapper > section,
.wrapper > footer {
        margin-left: 220px;
    }
.wrapper > section.has-sidebar-right {
        margin-right: 240px;
    }
.wrapper > section.has-sidebar-right + .offsidebar {
        z-index: 1;
    }
}
@media only screen and (max-width: 767px) {
.wrapper > .aside {
        margin-left: -220px;
    }
.aside-toggled .wrapper > section,
.aside-toggled .wrapper > footer {
        margin-left: 220px;
    }
.aside-toggled .wrapper > .aside {
        margin-left: 0;
    }
.csstransforms3d .wrapper {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
    }
.csstransforms3d .wrapper > section,
.csstransforms3d .wrapper > footer {
        margin-left: 0;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.3s ease;
        -moz-transition: -moz-transform 0.3s ease;
        -o-transition: -o-transform 0.3s ease;
        transition: transform 0.3s ease;
    }
.csstransforms3d .wrapper > .aside {
        margin-left: 0;
        -webkit-transform: translate3d(-220px, 0, 0);
        transform: translate3d(-220px, 0, 0);
        -webkit-transition: -webkit-transform 0.3s ease;
        -moz-transition: -moz-transform 0.3s ease;
        -o-transition: -o-transform 0.3s ease;
        transition: transform 0.3s ease;
    }
.csstransforms3d .aside-toggled .wrapper > section,
.csstransforms3d .aside-toggled .wrapper > footer {
        -webkit-transform: translate3d(220px, 0, 0);
        transform: translate3d(220px, 0, 0);
    }
.csstransforms3d .aside-toggled .wrapper > .aside {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
@media only screen and (max-width: 767px) {
.aside-collapsed .wrapper > .aside {
        margin-left: -70px;
    }
.aside-collapsed.aside-toggled .wrapper > section,
.aside-collapsed.aside-toggled .wrapper > footer {
        margin-left: 70px;
    }
.aside-collapsed.aside-toggled .wrapper > .aside {
        margin-left: 0;
    }
.csstransforms3d .aside-collapsed .wrapper {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
    }
.csstransforms3d .aside-collapsed .wrapper > section,
.csstransforms3d .aside-collapsed .wrapper > footer {
        margin-left: 0;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.3s ease;
        -moz-transition: -moz-transform 0.3s ease;
        -o-transition: -o-transform 0.3s ease;
        transition: transform 0.3s ease;
    }
.csstransforms3d .aside-collapsed .wrapper > .aside {
        margin-left: 0;
        -webkit-transform: translate3d(-70px, 0, 0);
        transform: translate3d(-70px, 0, 0);
        -webkit-transition: -webkit-transform 0.3s ease;
        -moz-transition: -moz-transform 0.3s ease;
        -o-transition: -o-transform 0.3s ease;
        transition: transform 0.3s ease;
    }
.csstransforms3d .aside-collapsed.aside-toggled .wrapper > section,
.csstransforms3d .aside-collapsed.aside-toggled .wrapper > footer {
        -webkit-transform: translate3d(70px, 0, 0);
        transform: translate3d(70px, 0, 0);
    }
.csstransforms3d .aside-collapsed.aside-toggled .wrapper > .aside {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
.aside-collapsed {
    overflow-y: auto;
}
.aside-collapsed .wrapper > .aside,
.aside-collapsed .wrapper > .aside > .aside-inner {
    width: 70px;
}
.aside-collapsed .wrapper > .aside > .nav-floating {
    margin-left: 70px;
}
@media only screen and (min-width: 768px) {
.aside-collapsed .wrapper > section,
.aside-collapsed .wrapper > footer {
        margin-left: 70px;
    }
}
@media (max-width: 1140px) {
.layout-fixed.aside-toggled,
.layout-fixed.offsidebar-open {
        overflow-y: hidden;
    }
}
.layout-fixed .wrapper {
    /* only applied to sidebar */
}
.layout-fixed .wrapper .topnavbar-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 121;
}
.layout-fixed .wrapper > aside {
    position: fixed;
}
.layout-fixed .wrapper > .aside {
    /* safari fix */
    height: 1px;
    min-height: 100%;
    /* ios blanks space fix */
}
.layout-fixed .wrapper > .aside > .aside-inner {
    position: fixed;
    top: 0;
    bottom: 0;
}
.layout-fixed .wrapper > section {
    margin-top: 114px;
}
@media only screen and (min-width: 768px) {
.layout-fixed .wrapper > section {
        margin-top: 55px;
    }
}
/* IE10+ hack: safari fix breaks ie so we need to target ie only to restore */
_:-ms-lang(x),
.layout-fixed .wrapper > .aside > .aside-inner {
    position: static !important;
}
@media only screen and (min-width: 992px) {
.layout-boxed {
        overflow: auto !important;
    }
.layout-boxed .wrapper {
        margin: 0 auto;
        overflow: hidden;
        box-shadow: 0 0 13px rgba(0, 0, 0, 0.25);
    }
.layout-boxed .wrapper .offsidebar {
        position: absolute !important;
    }
.layout-boxed .wrapper > .aside {
        left: inherit;
    }
.layout-boxed .wrapper,
.layout-boxed .wrapper .topnavbar-wrapper {
        width: 970px;
    }
.layout-boxed.layout-fixed .wrapper > .aside > .aside-inner {
        left: inherit;
    }
}
@media only screen and (min-width: 1200px) {
.layout-boxed .wrapper,
.layout-boxed .wrapper .topnavbar-wrapper {
        width: 1140px;
    }
}
/* ========================================================================
 Component: layout-extra.less
 ========================================================================== */
.hidden-footer .wrapper > footer {
    display: none;
}
.hidden-footer .wrapper > section {
    margin-bottom: 0 !important;
}
.layout-fs .wrapper > section {
    position: absolute;
    top: 114px;
    left: 0;
    right: 0;
    bottom: 60px;
    height: auto;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
@media only screen and (min-width: 480px) {
.layout-fs .wrapper > section {
        overflow: hidden;
    }
}
@media only screen and (min-width: 768px) {
.layout-fs .wrapper > section {
        top: 55px;
    }
}
.layout-fs .wrapper > section > .content-wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
}
.layout-fs.hidden-footer .wrapper > section {
    bottom: 0;
}
.d-table,
.d-table-fixed {
    display: table;
    width: 100%;
    height: 100%;
    min-height: 240px;
    border-spacing: 0;
}
.d-table-fixed {
    table-layout: fixed;
}
.d-row {
    display: table-row;
    height: 100%;
}
.d-cell,
.d-cell-wrapper {
    position: relative;
    display: table-cell;
    height: 100%;
    width: 100%;
    vertical-align: top;
    overflow: auto;
}
.d-cell-wrapper {
    display: block;
}
.d-cell-wrapper .d-cell-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
@media only screen and (max-width: 767px) {
.d-table-fixed {
        display: block;
    }
.d-table-fixed > .d-cell {
        display: block;
        width: auto;
        height: auto;
    }
}
/* Target Firefox only */
@-moz-document url-prefix() {
.d-table,
.d-table-desktop {
        height: 240px;
        min-height: 100%;
    }
.d-cell-inner {
        overflow: auto;
    }
}
.fh {
    height: 100% !important;
}
.fw {
    width: 100% !important;
}
.scroll {
    overflow: auto;
}
.scroll-y {
    overflow-y: auto;
}
.scroll-y {
    overflow-y: auto;
}
.layout-h .wrapper > section {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
}
.layout-h .wrapper > section > .content-wrapper > h3 {
    display: none;
}
.layout-h .wrapper > section {
    margin-top: 0;
}
.layout-h .wrapper > .offsidebar {
    margin-top: 55px;
}
.layout-h .wrapper > footer {
    margin: 0;
}
.layout-h.layout-fixed .wrapper > section,
.layout-h.layout-fixed .wrapper > .offsidebar {
    margin-top: 55px;
}
.aside-float .wrapper {
    box-shadow: 0 0 0 #000;
}
.aside-float .wrapper > footer {
    border: 0;
}
.aside-float .wrapper > .aside {
    padding: 15px 0;
    background: transparent;
}
.aside-float .wrapper > .aside > .aside-inner {
    height: 100%;
    top: 15px;
    bottom: 15px;
    left: inherit;
}
.aside-float .wrapper > .aside .sidebar {
    border: 1px solid #e4eaec;
}
.aside-float .wrapper > .aside .sidebar:after {
    display: none;
}
@media only screen and (min-width: 768px) {
.aside-float .wrapper > section {
        padding-left: 15px;
    }
.aside-float .wrapper > footer {
        left: 15px;
    }
}
.aside-float .wrapper .content-wrapper {
    border: 0;
}
.aside-float .wrapper .content-wrapper > h3,
.aside-float .wrapper .content-wrapper > .content-heading {
    padding-top: 30px;
    border: 0;
    background-color: transparent;
}
.aside-float .wrapper .content-wrapper > .unwrap {
    margin: 0 !important;
}
.aside-float.aside-toggled .wrapper > .aside {
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
}
.aside-float.aside-toggled .wrapper > .aside > .aside-inner {
    margin-left: 15px;
}
.aside-float.aside-toggled .wrapper > section {
    padding-left: 15px;
}
.aside-float.aside-toggled .wrapper > footer {
    left: 15px;
}
@media only screen and (min-width: 768px) {
.aside-float.aside-collapsed .topnavbar .navbar-header {
        width: 100px;
    }
.aside-float.layout-fs .wrapper > section > .content-wrapper {
        padding: 0 0 0 20px;
    }
.aside-float .wrapper > .aside > .aside-inner {
        margin-left: 15px;
    }
}
@media only screen and (min-width: 992px) {
.aside-float.layout-boxed .wrapper > .aside > .aside-inner {
        margin-left: 0;
    }
.aside-float.layout-boxed .wrapper > section {
        padding-left: 0;
    }
}
.aside-float.aside-toggled.layout-fs .wrapper > section > .content-wrapper {
    padding: 0 0 0 20px;
}
/* ========================================================================
 Component: layout-animation.less
 ========================================================================== */
.wrapper > .aside {
    -webkit-transition: width .2s cubic-bezier(0.35, 0, 0.25, 1), translate .2s cubic-bezier(0.35, 0, 0.25, 1);
    -o-transition: width .2s cubic-bezier(0.35, 0, 0.25, 1), translate .2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: width .2s cubic-bezier(0.35, 0, 0.25, 1), translate .2s cubic-bezier(0.35, 0, 0.25, 1);
}
.aside-inner,
.navbar-header,
.sidebar > .nav > li {
    -webkit-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    -o-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
.wrapper > section {
    -webkit-transition: margin-left 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    -o-transition: margin-left 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: margin-left 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
.sidebar > .nav .label {
    -webkit-animation: fadeInRight 1s;
    -o-animation: fadeInRight 1s;
    animation: fadeInRight 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.aside-collapsed .sidebar > .nav .label {
    -webkit-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    animation: fadeIn 1s;
}
.sidebar .nav > li > a {
    -webkit-animation: fadeInLeft 0.5s;
    -o-animation: fadeInLeft 0.5s;
    animation: fadeInLeft 0.5s;
}
.sidebar > .nav > .nav-heading,
.sidebar > .nav > li > a > span,
.navbar-brand .brand-logo {
    -webkit-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    animation: fadeIn 1s;
}
.sidebar li > a,
.sidebar li > .nav-item,
.sidebar > .nav > .nav-heading {
    white-space: nowrap;
}
.aside-collapsed .user-block-picture {
    -webkit-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    -o-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
.aside-collapsed .user-block {
    -webkit-transition: padding 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    -o-transition: padding 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: padding 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
/* ========================================================================
 Component: top-navbar.less
 ========================================================================== */
.topnavbar {
    -webkit-backface-visibility: hidden;
    /* fixes chrome jump */
    margin-bottom: 0;
    border-radius: 0;
    background-color: #fff;
    z-index: 1050;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
@media only screen and (min-width: 768px) {
.topnavbar .navbar-header {
        width: 220px;
        text-align: center;
    }
.topnavbar .navbar-header .navbar-brand {
        width: 100%;
    }
}
.topnavbar {
    position: relative;
}
.topnavbar .navbar-header {
    background-color: transparent;
    background-image: -webkit-linear-gradient(left, #23b7e5 0%, #51c6ea 100%);
    background-image: -o-linear-gradient(left, #23b7e5 0%, #51c6ea 100%);
    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff23b7e5', endColorstr='#ff51c6ea', GradientType=1);
}
@media only screen and (min-width: 768px) {
.topnavbar .navbar-header {
        background-image: none;
    }
}
.topnavbar .navbar-header {
    position: relative;
    z-index: 11;
}
.topnavbar .navbar-header .navbar-brand {
    padding: 0;
}
.topnavbar .navbar-header .brand-logo > img,
.topnavbar .navbar-header .brand-logo-collapsed > img {
    margin: 0 auto;
}
.topnavbar .navbar-header .brand-logo {
    display: block;
    padding: 10px 15px;
}
.topnavbar .navbar-header .brand-logo-collapsed {
    display: none;
    padding: 6px 15px;
}
.topnavbar .navbar-nav > li > a,
.topnavbar .navbar-nav > .open > a {
    color: #23b7e5;
}
.topnavbar .navbar-nav > li > a:hover,
.topnavbar .navbar-nav > .open > a:hover,
.topnavbar .navbar-nav > li > a:focus,
.topnavbar .navbar-nav > .open > a:focus {
    color: #117391;
}
.topnavbar .navbar-nav > .active > a,
.topnavbar .navbar-nav > .open > a,
.topnavbar .navbar-nav > .active > a:hover,
.topnavbar .navbar-nav > .open > a:hover,
.topnavbar .navbar-nav > .active > a:focus,
.topnavbar .navbar-nav > .open > a:focus {
    background-color: transparent;
}
.topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
    font-size: 16px;
    line-height: 55px;
    color: #fff;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
}
@media only screen and (min-width: 768px) {
.topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {
        color: #ffffff;
    }
}
@media only screen and (max-width: 767px) {
.sidebar-toggle {
        position: absolute !important;
        top: 5px;
        right: 0;
        z-index: 3001;
    }
.sidebar-toggle > em {
        color: white;
    }
}
.nav-wrapper {
    padding: 0 15px;
    background-color: transparent;
}
.nav-wrapper .nav.navbar-nav {
    float: left;
}
.nav-wrapper .nav.navbar-nav.navbar-right {
    float: right;
}
.nav-wrapper .nav > li {
    position: static;
    float: left;
}
.nav-wrapper .navbar-nav .open .dropdown-menu {
    position: absolute;
    background-color: #ffffff;
    left: 0px;
    right: 0px;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
}
.topnavbar .navbar-form {
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    height: 55px;
    z-index: 9001;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    border: 0;
    border-bottom: 1px solid #e1e2e3;
}
.topnavbar .navbar-form .form-group {
    height: 100%;
    width: 100%;
}
.topnavbar .navbar-form .form-control {
    height: 100%;
    border: 0;
    border-radius: 0;
    width: 100%;
}
.topnavbar .navbar-form.open {
    top: 0;
}
.topnavbar .navbar-form .has-feedback .form-control-feedback {
    height: 30px;
    cursor: pointer;
    top: 50%;
    margin-top: -15px;
    line-height: 30px;
    margin-right: 10px;
    color: #c1c2c3;
    font-size: 1.5em;
    pointer-events: auto;
}
@media only screen and (min-width: 768px) {
.topnavbar .navbar-form {
        left: 220px;
    }
}
@media only screen and (min-width: 768px) {
.topnavbar {
        border: 0;
        background-color: #23b7e5;
        background-image: -webkit-linear-gradient(left, #23b7e5 0%, #51c6ea 100%);
        background-image: -o-linear-gradient(left, #23b7e5 0%, #51c6ea 100%);
        background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);
        background-repeat: repeat-x;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff23b7e5', endColorstr='#ff51c6ea', GradientType=1);
    }
.topnavbar .navbar-header {
        background-image: none;
        background-repeat: no-repeat;
        filter: none;
    }
.topnavbar .navbar-nav > a {
        box-shadow: 0 0 0 #000 inset;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
    }
.topnavbar .navbar-nav > .open > a,
.topnavbar .navbar-nav > .open > a:hover,
.topnavbar .navbar-nav > .open > a:focus {
        box-shadow: 0 -3px 0 #19a5d1 inset;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
    }
.topnavbar .navbar-nav > li > a,
.topnavbar .navbar-nav > .open > a {
        color: #ffffff;
    }
.topnavbar .navbar-nav > li > a:hover,
.topnavbar .navbar-nav > .open > a:hover,
.topnavbar .navbar-nav > li > a:focus,
.topnavbar .navbar-nav > .open > a:focus {
        color: #117391;
    }
.topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {
        position: static;
    }
.nav-wrapper {
        position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }
.nav-wrapper:before,
.nav-wrapper:after {
        content: " ";
        display: table;
    }
.nav-wrapper:after {
        clear: both;
    }
.nav-wrapper .nav > li {
        position: relative;
    }
.nav-wrapper .navbar-nav .open .dropdown-menu {
        left: auto;
        right: auto;
    }
.nav-wrapper .navbar-nav.navbar-right .open .dropdown-menu {
        left: auto;
        right: 0;
    }
}
@media only screen and (min-width: 768px) {
.aside-collapsed .topnavbar .navbar-header .brand-logo {
        display: none;
    }
.aside-collapsed .topnavbar .navbar-header .brand-logo-collapsed {
        display: block;
    }
.aside-collapsed .topnavbar .navbar-header {
        width: 70px;
    }
.aside-collapsed .topnavbar .navbar-form {
        left: 70px;
    }
}
/* ========================================================================
 Component: sidebar.less
 ========================================================================== */
.sidebar {
    height: 100%;
    padding-bottom: 20px;
    background-color: #ffffff;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}
.sidebar:after {
    content: "";
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    -webkit-transform: translateZ(0px);
}
.sidebar .nav-heading {
    padding: 12px 15px;
    color: #919da8;
    font-size: 13px;
    letter-spacing: .035em;
    pointer-events: none;
    cursor: default;
}
.sidebar > .nav {
    position: relative;
}
.sidebar > .nav > .nav-heading:first-child {
    padding-top: 20px;
}
.sidebar > .nav > li {
    border-left: 3px solid transparent;
    -webkit-transition: border-left-color 0.4s ease;
    -o-transition: border-left-color 0.4s ease;
    transition: border-left-color 0.4s ease;
}
.sidebar > .nav > li > a,
.sidebar > .nav > li > .nav-item {
    padding: 12px 24px;
    color: #515253;
    letter-spacing: .025em;
    font-weight: normal;
}
.sidebar > .nav > li > a:focus,
.sidebar > .nav > li > .nav-item:focus,
.sidebar > .nav > li > a:hover,
.sidebar > .nav > li > .nav-item:hover {
    text-decoration: none;
    outline: none;
    color: #23b7e5;
}
.sidebar > .nav > li > a > em,
.sidebar > .nav > li > .nav-item > em {
    width: 2em;
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    color: inherits;
}
.sidebar > .nav > li.active,
.sidebar > .nav > li.open,
.sidebar > .nav > li.active > a,
.sidebar > .nav > li.open > a,
.sidebar > .nav > li.active .nav,
.sidebar > .nav > li.open .nav {
    background-color: #fcfcfc;
    color: #23b7e5;
}
.sidebar > .nav > li.active > a > em,
.sidebar > .nav > li.open > a > em {
    color: #23b7e5;
}
.sidebar > .nav > li.active {
    border-left-color: #23b7e5;
}
.sidebar > .nav .label {
    display: block;
}
@media only screen and (min-width: 1025px) {
.sidebar:not(.show-scrollbar) {
        margin-right: -17px;
        overflow-y: scroll;
    }
}
.sidebar-subnav {
    background-color: #ffffff;
}
.sidebar-subnav > .sidebar-subnav-header {
    color: #515253;
    display: none;
    padding: 10px 20px;
    font-weight: bold;
}
.sidebar-subnav > li {
    border-left: 0 !important;
}
.sidebar-subnav > li > a,
.sidebar-subnav > li > .nav-item {
    display: block;
    position: relative;
    padding: 10px 20px;
    padding-left: 53px;
    font-weight: normal;
    background-color: transparent !important;
    color: #515253;
}
.sidebar-subnav > li > a:focus,
.sidebar-subnav > li > .nav-item:focus,
.sidebar-subnav > li > a:hover,
.sidebar-subnav > li > .nav-item:hover {
    color: #23b7e5;
}
.sidebar-subnav > li > a > em,
.sidebar-subnav > li > .nav-item > em {
    display: inline-block;
    width: 2em;
    margin: 0 0 0 -2em;
}
.sidebar-subnav > li.active > a,
.sidebar-subnav > li.active > .nav-item {
    color: #23b7e5;
}
.sidebar-subnav > li.active > a:after,
.sidebar-subnav > li.active > .nav-item:after {
    border-color: #23b7e5;
    background-color: #23b7e5;
}
.sidebar-subnav > li .nav > li {
    padding-left: 5px;
}
.sidebar-subnav.nav-floating {
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-left: -1px;
}
.sidebar-subnav.nav-floating,
.sidebar-subnav.nav-floating .collapse {
    height: auto !important;
    display: block !important;
    visibility: visible !important;
}
.sidebar-subnav.nav-floating > .sidebar-subnav-header {
    display: block;
}
.sidebar-subnav.nav-floating li > a {
    padding-left: 20px;
}
.sidebar-subnav.nav-floating li > a em {
    margin-left: 0;
}
@media only screen and (min-width: 768px) {
.sidebar > .nav .label {
        margin: 2px 0 0 0;
    }
}
.aside-collapsed .sidebar {
    overflow-x: hidden;
}
.aside-collapsed .sidebar > .nav .nav,
.aside-collapsed .sidebar > .nav > .nav-heading,
.aside-collapsed .sidebar > .nav > li > a > span {
    display: none !important;
}
.aside-collapsed .sidebar > .nav > li {
    width: 68px;
}
.aside-collapsed .sidebar > .nav > li > a,
.aside-collapsed .sidebar > .nav > li > .nav-item {
    text-indent: -3px;
    padding: 20px 0;
    text-align: center;
}
.aside-collapsed .sidebar > .nav > li > a > em,
.aside-collapsed .sidebar > .nav > li > .nav-item > em {
    font-size: 1.6em;
    width: auto;
}
.aside-collapsed .sidebar > .nav > li > a:focus,
.aside-collapsed .sidebar > .nav > li > .nav-item:focus {
    background-color: transparent;
}
.aside-collapsed .sidebar > .nav > li > a:focus > em,
.aside-collapsed .sidebar > .nav > li > .nav-item:focus > em {
    color: inherit;
}
.aside-collapsed .sidebar .nav .label {
    position: absolute;
    top: 10px;
    right: 5px;
    text-indent: 0;
}
/* ========================================================================
 Component: offsidebar.less
 ========================================================================== */
.offsidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 235px;
    margin-top: 114px;
    border-left: 1px solid #cccccc;
    background-color: #ffffff;
    color: #515253;
    z-index: 116;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.offsidebar > nav {
    min-height: 100%;
    overflow: hidden;
    -webkit-transform: translateZ(0px);
}
.offsidebar .progress {
    border: 0;
}
.offsidebar .nav > li > a:hover,
.offsidebar .nav > li > a:focus {
    background-color: rgba(0, 0, 0, 0.025);
}
.offsidebar .tab-content {
    padding: 0;
    border: 0;
}
.offsidebar .nav-tabs.nav-justified > li > a,
.offsidebar .nav-tabs.nav-justified > li > a:hover,
.offsidebar .nav-tabs.nav-justified > li > a:focus {
    background-color: transparent;
    border: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0;
    color: #909fa7;
}
.offsidebar .nav-tabs.nav-justified > li.active > a {
    color: #5d9cec;
}
@media only screen and (min-width: 768px) {
.offsidebar {
        margin-top: 55px;
    }
}
.offsidebar-open .offsidebar {
    overflow-y: auto;
}
@media only screen and (min-width: 768px) {
.offsidebar-open {
        overflow-y: auto;
    }
}
.no-csstransforms3d .offsidebar {
    right: -235px;
}
.no-csstransforms3d .offsidebar-open .offsidebar {
    right: 0;
}
/* Transformation ready devices*/
.csstransforms3d .offsidebar {
    -webkit-transform: translate3d(235px, 0, 0);
    transform: translate3d(235px, 0, 0);
}
.csstransforms3d .offsidebar-open .offsidebar {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
/* ========================================================================
 Component: preloader.less
 ========================================================================== */
/*@noflip*/
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #23b7e5;
    background-image: -webkit-linear-gradient(90deg, #23b7e5 10%, #19a9d5 90%);
    /* Chrome 10+, Saf5.1+ */
    background-image: -moz-linear-gradient(90deg, #23b7e5 10%, #19a9d5 90%);
    /* FF3.6+ */
    background-image: -ms-linear-gradient(90deg, #23b7e5 10%, #19a9d5 90%);
    /* IE10 */
    background-image: -o-linear-gradient(90deg, #23b7e5 10%, #19a9d5 90%);
    /* Opera 11.10+ */
    background-image: linear-gradient(90deg, #23b7e5 10%, #19a9d5 90%);
    /* W3C */
    z-index: 9999;
    -webkit-transition: opacity 0.65s;
    -o-transition: opacity 0.65s;
    transition: opacity 0.65s;
}
/*@noflip*/
.preloader-progress {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 30px;
    margin: auto;
    overflow: auto;
    background-image: url(../img/preloader/preloader.empty.png);
    background-size: 100px 30px;
}
/*@noflip*/
.preloader-progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    min-width: 10px;
    background-image: url(../img/preloader/preloader.full.png);
    background-size: 100px 30px;
}
.preloader-hidden {
    display: none;
}
.preloader-hidden-add {
    opacity: 1;
    display: block;
}
.preloader-hidden-add .preloader-progress {
    -webkit-transition: -webkit-transform 0.4s ease;
    -moz-transition: -moz-transform 0.4s ease;
    -o-transition: -o-transform 0.4s ease;
    transition: transform 0.4s ease;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
}
.preloader-hidden-add-active {
    opacity: 0;
}
/* ========================================================================
 Component: breadcrumbs.less
 ========================================================================== */
.breadcrumb a {
    color: #000;
}
.breadcrumb {
    font-weight: normal;
    border-radius: 0;
    color: #909fa7;
    padding: 10px 20px;
    background-color: transparent;
    padding: 10px 15px;
}
h3 + .breadcrumb,
.content-heading + .breadcrumb {
    margin: -25px -25px 20px -20px;
    background-color: #fafbfc;
    border-top: 1px solid #cfdbe2;
    border-bottom: 1px solid #cfdbe2;
}
h3 > .breadcrumb,
.content-heading > .breadcrumb {
    background: transparent;
    font-size: 13px;
    border: 0;
    padding: 10px 10px 0 0;
    margin-bottom: 0;
}
h3 > .breadcrumb.pull-right,
.content-heading > .breadcrumb.pull-right {
    margin: -2px 0 0;
}
/* ========================================================================
 Component: loading-bar.less
 ========================================================================== */
/*
 * angular-loading-bar v0.6.0 * https://chieffancypants.github.io/angular-loading-bar
 * Copyright (c) 2014 Wes Cruver * License: MIT
 */
#loading-bar {
    position: absolute;
    z-index: 90002;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
}
/* Make clicks pass-through */
#loading-bar,
#loading-bar-spinner {
    pointer-events: none;
    -webkit-pointer-events: none;
    -webkit-transition: 350ms linear all;
    -moz-transition: 350ms linear all;
    -o-transition: 350ms linear all;
    transition: 350ms linear all;
}
#loading-bar.ng-enter,
#loading-bar.ng-leave.ng-leave-active,
#loading-bar-spinner.ng-enter,
#loading-bar-spinner.ng-leave.ng-leave-active {
    opacity: 0;
}
#loading-bar.ng-enter.ng-enter-active,
#loading-bar.ng-leave,
#loading-bar-spinner.ng-enter.ng-enter-active,
#loading-bar-spinner.ng-leave {
    opacity: 1;
}
#loading-bar .bar {
    height: 100%;
    width: 100%;
    -webkit-transition: width 350ms;
    -moz-transition: width 350ms;
    -o-transition: width 350ms;
    transition: width 350ms;
    background: #23b7e5;
    border-bottom-right-radius: 1px;
    border-top-right-radius: 1px;
}
/* Fancy blur effect */
#loading-bar .peg {
    position: absolute;
    width: 70px;
    right: 0;
    top: 0;
    height: 2px;
    opacity: .45;
    -moz-box-shadow: #23b7e5 1px 0 6px 1px;
    -ms-box-shadow: #23b7e5 1px 0 6px 1px;
    -webkit-box-shadow: #23b7e5 1px 0 6px 1px;
    box-shadow: #23b7e5 1px 0 6px 1px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
}
#loading-bar-spinner {
    display: block;
    position: fixed;
    z-index: 90002;
    top: 10px;
    left: 10px;
}
#loading-bar-spinner .spinner-icon {
    width: 14px;
    height: 14px;
    border: solid 2px transparent;
    border-top-color: #23b7e5;
    border-left-color: #23b7e5;
    border-radius: 10px;
    -webkit-animation: loading-bar-spinner 400ms linear infinite;
    -moz-animation: loading-bar-spinner 400ms linear infinite;
    -ms-animation: loading-bar-spinner 400ms linear infinite;
    -o-animation: loading-bar-spinner 400ms linear infinite;
    animation: loading-bar-spinner 400ms linear infinite;
}
@-webkit-keyframes loading-bar-spinner {
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
    100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@-moz-keyframes loading-bar-spinner {
    0% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
}
    100% {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@-o-keyframes loading-bar-spinner {
    0% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
}
    100% {
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@-ms-keyframes loading-bar-spinner {
    0% {
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}
    100% {
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes loading-bar-spinner {
    0% {
        transform: rotate(0deg);
}
    100% {
        transform: rotate(360deg);
}
}
/* ========================================================================
 Component: animate.less
 ========================================================================== */
[ui-view].ng-leave {
    display: none !important;
}
[ui-view].ng-leave.ng-fluid {
    display: block !important;
}
.ng-fluid.ng-animate {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.ng-fadeIn.ng-enter {
    -webkit-animation: fadeIn 0.5s;
    -o-animation: fadeIn 0.5s;
    animation: fadeIn 0.5s;
}
.ng-fadeIn.ng-leave {
    -webkit-animation: fadeOut 0.5s;
    -o-animation: fadeOut 0.5s;
    animation: fadeOut 0.5s;
}
.ng-fadeInUp.ng-enter {
    -webkit-animation: fadeInUp 0.5s;
    -o-animation: fadeInUp 0.5s;
    animation: fadeInUp 0.5s;
}
.ng-fadeInUp.ng-leave {
    -webkit-animation: fadeOutDown 0.5s;
    -o-animation: fadeOutDown 0.5s;
    animation: fadeOutDown 0.5s;
}
.ng-fadeInDown.ng-enter {
    -webkit-animation: fadeInDown 0.5s;
    -o-animation: fadeInDown 0.5s;
    animation: fadeInDown 0.5s;
}
.ng-fadeInDown.ng-leave {
    -webkit-animation: fadeOutUp 0.5s;
    -o-animation: fadeOutUp 0.5s;
    animation: fadeOutUp 0.5s;
}
.ng-fadeInRight.ng-enter {
    -webkit-animation: fadeInRight 0.5s;
    -o-animation: fadeInRight 0.5s;
    animation: fadeInRight 0.5s;
}
.ng-fadeInRight.ng-leave {
    -webkit-animation: fadeOutLeft 0.5s;
    -o-animation: fadeOutLeft 0.5s;
    animation: fadeOutLeft 0.5s;
}
.ng-fadeInLeft.ng-enter {
    -webkit-animation: fadeInLeft 0.5s;
    -o-animation: fadeInLeft 0.5s;
    animation: fadeInLeft 0.5s;
}
.ng-fadeInLeft.ng-leave {
    -webkit-animation: fadeOutRight 0.5s;
    -o-animation: fadeOutRight 0.5s;
    animation: fadeOutRight 0.5s;
}
.ng-fadeInUpBig.ng-enter {
    -webkit-animation: fadeInDownBig 0.5s;
    -o-animation: fadeInDownBig 0.5s;
    animation: fadeInDownBig 0.5s;
}
.ng-fadeInUpBig.ng-leave {
    -webkit-animation: fadeOutDownBig 0.5s;
    -o-animation: fadeOutDownBig 0.5s;
    animation: fadeOutDownBig 0.5s;
}
.ng-fadeInDownBig.ng-enter {
    -webkit-animation: fadeInUpBig 0.5s;
    -o-animation: fadeInUpBig 0.5s;
    animation: fadeInUpBig 0.5s;
}
.ng-fadeInDownBig.ng-leave {
    -webkit-animation: fadeOutUpBig 0.5s;
    -o-animation: fadeOutUpBig 0.5s;
    animation: fadeOutUpBig 0.5s;
}
.ng-fadeInRightBig.ng-enter {
    -webkit-animation: fadeInRightBig 0.5s;
    -o-animation: fadeInRightBig 0.5s;
    animation: fadeInRightBig 0.5s;
}
.ng-fadeInRightBig.ng-leave {
    -webkit-animation: fadeOutLeftBig 0.5s;
    -o-animation: fadeOutLeftBig 0.5s;
    animation: fadeOutLeftBig 0.5s;
}
.ng-fadeInLeftBig.ng-enter {
    -webkit-animation: fadeInLeftBig 0.5s;
    -o-animation: fadeInLeftBig 0.5s;
    animation: fadeInLeftBig 0.5s;
}
.ng-fadeInLeftBig.ng-leave {
    -webkit-animation: fadeOutRightBig 0.5s;
    -o-animation: fadeOutRightBig 0.5s;
    animation: fadeOutRightBig 0.5s;
}
.ng-zoomBackDown.ng-enter {
    -webkit-animation: fadeInDown 1s cubic-bezier(0.23, 1, 0.32, 1);
    -o-animation: fadeInDown 1s cubic-bezier(0.23, 1, 0.32, 1);
    animation: fadeInDown 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.ng-zoomBackDown.ng-leave {
    -webkit-animation: zoomBack 1s cubic-bezier(0.23, 1, 0.32, 1);
    -o-animation: zoomBack 1s cubic-bezier(0.23, 1, 0.32, 1);
    animation: zoomBack 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
.animated.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
}
@-webkit-keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
    40%,
    43% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
}
    70% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
}
    90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
}
}
@keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
    40%,
    43% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    -ms-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
}
    70% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    -ms-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
}
    90% {
    -webkit-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
}
}
.bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
}
@-webkit-keyframes flash {
    0%,
    50%,
    100% {
        opacity: 1;
}
    25%,
    75% {
        opacity: 0;
}
}
@keyframes flash {
    0%,
    50%,
    100% {
        opacity: 1;
}
    25%,
    75% {
        opacity: 0;
}
}
.flash {
    -webkit-animation-name: flash;
    animation-name: flash;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes pulse {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
    50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
}
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
@keyframes pulse {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
    50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    -ms-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
}
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
.pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
}
@-webkit-keyframes rubberBand {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
    30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
}
    40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
}
    50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
}
    65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
}
    75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
}
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
@keyframes rubberBand {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
    30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
}
    40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
}
    50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
}
    65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
}
    75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
}
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
.rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
}
@-webkit-keyframes shake {
    0%,
    100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
    10%,
    30%,
    50%,
    70%,
    90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
}
    20%,
    40%,
    60%,
    80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
}
}
@keyframes shake {
    0%,
    100% {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
    10%,
    30%,
    50%,
    70%,
    90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    -ms-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
}
    20%,
    40%,
    60%,
    80% {
    -webkit-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
}
}
.shake {
    -webkit-animation-name: shake;
    animation-name: shake;
}
@-webkit-keyframes swing {
    20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
}
    40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
}
    60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
}
    80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
}
    100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
}
}
@keyframes swing {
    20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    -ms-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
}
    40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    -ms-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
}
    60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    -ms-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
}
    80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    -ms-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
}
    100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    -ms-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
}
}
.swing {
    -webkit-transform-origin: top center;
    -ms-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation-name: swing;
    animation-name: swing;
}
@-webkit-keyframes tada {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
    10%,
    20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
}
    30%,
    50%,
    70%,
    90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}
    40%,
    60%,
    80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
@keyframes tada {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
    10%,
    20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
}
    30%,
    50%,
    70%,
    90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}
    40%,
    60%,
    80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
.tada {
    -webkit-animation-name: tada;
    animation-name: tada;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes wobble {
    0% {
    -webkit-transform: none;
    transform: none;
}
    15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}
    30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}
    45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}
    60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}
    75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}
    100% {
    -webkit-transform: none;
    transform: none;
}
}
@keyframes wobble {
    0% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
    15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    -ms-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}
    30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    -ms-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}
    45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    -ms-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}
    60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    -ms-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}
    75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    -ms-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}
    100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.wobble {
    -webkit-animation-name: wobble;
    animation-name: wobble;
}
@-webkit-keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
    20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
}
    40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
}
    80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
}
    100% {
        opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
@keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
    20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    -ms-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
}
    40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    -ms-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    -ms-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
}
    80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    -ms-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
}
    100% {
        opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
.bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
}
@-webkit-keyframes bounceInDown {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
}
    75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
}
    90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
}
    100% {
    -webkit-transform: none;
    transform: none;
}
}
@keyframes bounceInDown {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    -ms-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    -ms-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
}
    75% {
    -webkit-transform: translate3d(0, -10px, 0);
    -ms-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
}
    90% {
    -webkit-transform: translate3d(0, 5px, 0);
    -ms-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
}
    100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
}
@-webkit-keyframes bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
}
    75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
}
    90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
}
    100% {
    -webkit-transform: none;
    transform: none;
}
}
@keyframes bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    -ms-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    -ms-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
}
    75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    -ms-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
}
    90% {
    -webkit-transform: translate3d(5px, 0, 0);
    -ms-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
}
    100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
}
    75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
}
    90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
}
    100% {
    -webkit-transform: none;
    transform: none;
}
}
@keyframes bounceInRight {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    -ms-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    -ms-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
}
    75% {
    -webkit-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
}
    90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    -ms-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
}
    100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
}
@-webkit-keyframes bounceInUp {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}
    75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
}
    90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
}
    100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInUp {
    0%,
    60%,
    75%,
    90%,
    100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    -ms-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
}
    60% {
        opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}
    75% {
    -webkit-transform: translate3d(0, 10px, 0);
    -ms-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
}
    90% {
    -webkit-transform: translate3d(0, -5px, 0);
    -ms-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
}
    100% {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}
.bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
}
@-webkit-keyframes bounceOut {
    20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
}
    50%,
    55% {
        opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
}
    100% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
}
@keyframes bounceOut {
    20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    -ms-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
}
    50%,
    55% {
        opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    -ms-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
}
    100% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
}
.bounceOut {
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
}
@-webkit-keyframes bounceOutDown {
    20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
}
    40%,
    45% {
        opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
}
@keyframes bounceOutDown {
    20% {
    -webkit-transform: translate3d(0, 10px, 0);
    -ms-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
}
    40%,
    45% {
        opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
}
.bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown;
}
@-webkit-keyframes bounceOutLeft {
    20% {
        opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
}
@keyframes bounceOutLeft {
    20% {
        opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    -ms-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    -ms-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
}
.bounceOutLeft {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft;
}
@-webkit-keyframes bounceOutRight {
    20% {
        opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
}
@keyframes bounceOutRight {
    20% {
        opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    -ms-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    -ms-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
}
.bounceOutRight {
    -webkit-animation-name: bounceOutRight;
    animation-name: bounceOutRight;
}
@-webkit-keyframes bounceOutUp {
    20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
}
    40%,
    45% {
        opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
}
@keyframes bounceOutUp {
    20% {
    -webkit-transform: translate3d(0, -10px, 0);
    -ms-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
}
    40%,
    45% {
        opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    -ms-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    -ms-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
}
.bounceOutUp {
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp;
}
@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
}
    100% {
        opacity: 1;
}
}
@keyframes fadeIn {
    0% {
        opacity: 0;
}
    100% {
        opacity: 1;
}
}
.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}
@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, -18px, 0);
    transform: translate3d(0, -18px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInDown {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, -18px, 0);
    -ms-transform: translate3d(0, -18px, 0);
    transform: translate3d(0, -18px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDownBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInDownBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    -ms-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInDownBig {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig;
}
@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-18px, 0, 0);
    transform: translate3d(-18px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInLeft {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-18px, 0, 0);
    -ms-transform: translate3d(-18px, 0, 0);
    transform: translate3d(-18px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
}
@-webkit-keyframes fadeInLeftBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInLeftBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    -ms-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInLeftBig {
    -webkit-animation-name: fadeInLeftBig;
    animation-name: fadeInLeftBig;
}
@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(18px, 0, 0);
    transform: translate3d(18px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInRight {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(18px, 0, 0);
    -ms-transform: translate3d(18px, 0, 0);
    transform: translate3d(18px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
}
@-webkit-keyframes fadeInRightBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInRightBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    -ms-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 18px, 0);
    transform: translate3d(0, 18px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInUp {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 18px, 0);
    -ms-transform: translate3d(0, 18px, 0);
    transform: translate3d(0, 18px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
}
@-webkit-keyframes fadeInUpBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInUpBig {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInUpBig {
    -webkit-animation-name: fadeInUpBig;
    animation-name: fadeInUpBig;
}
@-webkit-keyframes fadeOut {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
}
}
@keyframes fadeOut {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
}
}
.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}
@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, 18px, 0);
    transform: translate3d(0, 18px, 0);
}
}
@keyframes fadeOutDown {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, 18px, 0);
    -ms-transform: translate3d(0, 18px, 0);
    transform: translate3d(0, 18px, 0);
}
}
.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
}
@-webkit-keyframes fadeOutDownBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
}
@keyframes fadeOutDownBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
}
.fadeOutDownBig {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeOutLeft {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(-18px, 0, 0);
    transform: translate3d(-18px, 0, 0);
}
}
@keyframes fadeOutLeft {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(-18px, 0, 0);
    -ms-transform: translate3d(-18px, 0, 0);
    transform: translate3d(-18px, 0, 0);
}
}
.fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
}
@-webkit-keyframes fadeOutLeftBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
}
@keyframes fadeOutLeftBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    -ms-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
}
.fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig;
}
@-webkit-keyframes fadeOutRight {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(18px, 0, 0);
    transform: translate3d(18px, 0, 0);
}
}
@keyframes fadeOutRight {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(18px, 0, 0);
    -ms-transform: translate3d(18px, 0, 0);
    transform: translate3d(18px, 0, 0);
}
}
.fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
}
@-webkit-keyframes fadeOutRightBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
}
@keyframes fadeOutRightBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    -ms-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
}
.fadeOutRightBig {
    -webkit-animation-name: fadeOutRightBig;
    animation-name: fadeOutRightBig;
}
@-webkit-keyframes fadeOutUp {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -18px, 0);
    transform: translate3d(0, -18px, 0);
}
}
@keyframes fadeOutUp {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -18px, 0);
    -ms-transform: translate3d(0, -18px, 0);
    transform: translate3d(0, -18px, 0);
}
}
.fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp;
}
@-webkit-keyframes fadeOutUpBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
}
@keyframes fadeOutUpBig {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    -ms-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
}
.fadeOutUpBig {
    -webkit-animation-name: fadeOutUpBig;
    animation-name: fadeOutUpBig;
}
@-webkit-keyframes flip {
    0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}
    40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}
    50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
    80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
    100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
}
@keyframes flip {
    0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}
    40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}
    50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
    80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    -ms-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
    100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
}
.animated.flip {
    -webkit-backface-visibility: visible;
    -ms-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-animation-name: flip;
    animation-name: flip;
}
@-webkit-keyframes flipInX {
    0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
}
    40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
    60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
}
    80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
}
    100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
}
}
@keyframes flipInX {
    0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
}
    40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
    60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
}
    80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
}
    100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
}
}
.flipInX {
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInX;
    animation-name: flipInX;
}
@-webkit-keyframes flipInY {
    0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
}
    40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
    60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
}
    80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
}
    100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
}
}
@keyframes flipInY {
    0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
}
    40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
    60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
}
    80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
}
    100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
}
}
.flipInY {
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInY;
    animation-name: flipInY;
}
@-webkit-keyframes flipOutX {
    0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
}
    30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
}
    100% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
}
}
@keyframes flipOutX {
    0% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
}
    30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
}
    100% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
}
}
.flipOutX {
    -webkit-animation-name: flipOutX;
    animation-name: flipOutX;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
}
@-webkit-keyframes flipOutY {
    0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
}
    30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
}
    100% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
}
}
@keyframes flipOutY {
    0% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
}
    30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
}
    100% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
}
}
.flipOutY {
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
}
@-webkit-keyframes lightSpeedIn {
    0% {
    -webkit-transform: translate3d(18px, 0, 0) skewX(-30deg);
    transform: translate3d(18px, 0, 0) skewX(-30deg);
    opacity: 0;
}
    60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
}
    80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
}
    100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
}
}
@keyframes lightSpeedIn {
    0% {
    -webkit-transform: translate3d(18px, 0, 0) skewX(-30deg);
    -ms-transform: translate3d(18px, 0, 0) skewX(-30deg);
    transform: translate3d(18px, 0, 0) skewX(-30deg);
    opacity: 0;
}
    60% {
    -webkit-transform: skewX(20deg);
    -ms-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
}
    80% {
    -webkit-transform: skewX(-5deg);
    -ms-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
}
    100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}
}
.lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedOut {
    0% {
        opacity: 1;
}
    100% {
    -webkit-transform: translate3d(18px, 0, 0) skewX(30deg);
    transform: translate3d(18px, 0, 0) skewX(30deg);
    opacity: 0;
}
}
@keyframes lightSpeedOut {
    0% {
        opacity: 1;
}
    100% {
    -webkit-transform: translate3d(18px, 0, 0) skewX(30deg);
    -ms-transform: translate3d(18px, 0, 0) skewX(30deg);
    transform: translate3d(18px, 0, 0) skewX(30deg);
    opacity: 0;
}
}
.lightSpeedOut {
    -webkit-animation-name: lightSpeedOut;
    animation-name: lightSpeedOut;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
@-webkit-keyframes rotateIn {
    0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
}
}
@keyframes rotateIn {
    0% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    -ms-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}
}
.rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
}
@-webkit-keyframes rotateInDownLeft {
    0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
}
}
@keyframes rotateInDownLeft {
    0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -ms-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}
}
.rotateInDownLeft {
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft;
}
@-webkit-keyframes rotateInDownRight {
    0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
}
}
@keyframes rotateInDownRight {
    0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    -ms-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}
}
.rotateInDownRight {
    -webkit-animation-name: rotateInDownRight;
    animation-name: rotateInDownRight;
}
@-webkit-keyframes rotateInUpLeft {
    0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
}
}
@keyframes rotateInUpLeft {
    0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    -ms-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}
}
.rotateInUpLeft {
    -webkit-animation-name: rotateInUpLeft;
    animation-name: rotateInUpLeft;
}
@-webkit-keyframes rotateInUpRight {
    0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
}
}
@keyframes rotateInUpRight {
    0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    -ms-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
}
    100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}
}
.rotateInUpRight {
    -webkit-animation-name: rotateInUpRight;
    animation-name: rotateInUpRight;
}
@-webkit-keyframes rotateOut {
    0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
}
}
@keyframes rotateOut {
    0% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    -ms-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
}
}
.rotateOut {
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut;
}
@-webkit-keyframes rotateOutDownLeft {
    0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0, 0, 1, 45deg);
    transform: rotate(0, 0, 1, 45deg);
    opacity: 0;
}
}
@keyframes rotateOutDownLeft {
    0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0, 0, 1, 45deg);
    -ms-transform: rotate(0, 0, 1, 45deg);
    transform: rotate(0, 0, 1, 45deg);
    opacity: 0;
}
}
.rotateOutDownLeft {
    -webkit-animation-name: rotateOutDownLeft;
    animation-name: rotateOutDownLeft;
}
@-webkit-keyframes rotateOutDownRight {
    0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}
@keyframes rotateOutDownRight {
    0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -ms-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}
.rotateOutDownRight {
    -webkit-animation-name: rotateOutDownRight;
    animation-name: rotateOutDownRight;
}
@-webkit-keyframes rotateOutUpLeft {
    0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}
@keyframes rotateOutUpLeft {
    0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -ms-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}
.rotateOutUpLeft {
    -webkit-animation-name: rotateOutUpLeft;
    animation-name: rotateOutUpLeft;
}
@-webkit-keyframes rotateOutUpRight {
    0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
}
}
@keyframes rotateOutUpRight {
    0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
}
    100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    -ms-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
}
}
.rotateOutUpRight {
    -webkit-animation-name: rotateOutUpRight;
    animation-name: rotateOutUpRight;
}
@-webkit-keyframes hinge {
    0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}
    20%,
    60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}
    40%,
    80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
}
    100% {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
}
}
@keyframes hinge {
    0% {
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}
    20%,
    60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    -ms-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}
    40%,
    80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    -ms-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
}
    100% {
    -webkit-transform: translate3d(0, 700px, 0);
    -ms-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
}
}
.hinge {
    -webkit-animation-name: hinge;
    animation-name: hinge;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollIn {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-18px, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-18px, 0, 0) rotate3d(0, 0, 1, -120deg);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes rollIn {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(-18px, 0, 0) rotate3d(0, 0, 1, -120deg);
    -ms-transform: translate3d(-18px, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-18px, 0, 0) rotate3d(0, 0, 1, -120deg);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.rollIn {
    -webkit-animation-name: rollIn;
    animation-name: rollIn;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollOut {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(18px, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(18px, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}
@keyframes rollOut {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(18px, 0, 0) rotate3d(0, 0, 1, 120deg);
    -ms-transform: translate3d(18px, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(18px, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}
.rollOut {
    -webkit-animation-name: rollOut;
    animation-name: rollOut;
}
@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
    50% {
        opacity: 1;
}
}
@keyframes zoomIn {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
    50% {
        opacity: 1;
}
}
.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
}
@-webkit-keyframes zoomInDown {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInDown {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown;
}
@-webkit-keyframes zoomInLeft {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInLeft {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInLeft {
    -webkit-animation-name: zoomInLeft;
    animation-name: zoomInLeft;
}
@-webkit-keyframes zoomInRight {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInRight {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInRight {
    -webkit-animation-name: zoomInRight;
    animation-name: zoomInRight;
}
@-webkit-keyframes zoomInUp {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInUp {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    60% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInUp {
    -webkit-animation-name: zoomInUp;
    animation-name: zoomInUp;
}
@-webkit-keyframes zoomOut {
    0% {
        opacity: 1;
}
    50% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
    100% {
        opacity: 0;
}
}
@keyframes zoomOut {
    0% {
        opacity: 1;
}
    50% {
        opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}
    100% {
        opacity: 0;
}
}
.zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
}
@-webkit-keyframes zoomOutDown {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    100% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomOutDown {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    100% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomOutDown {
    -webkit-animation-name: zoomOutDown;
    animation-name: zoomOutDown;
}
@-webkit-keyframes zoomOutLeft {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
}
}
@keyframes zoomOutLeft {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
}
}
.zoomOutLeft {
    -webkit-animation-name: zoomOutLeft;
    animation-name: zoomOutLeft;
}
@-webkit-keyframes zoomOutRight {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
}
}
@keyframes zoomOutRight {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
}
    100% {
        opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
}
}
.zoomOutRight {
    -webkit-animation-name: zoomOutRight;
    animation-name: zoomOutRight;
}
@-webkit-keyframes zoomOutUp {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    100% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomOutUp {
    40% {
        opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
    100% {
        opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomOutUp {
    -webkit-animation-name: zoomOutUp;
    animation-name: zoomOutUp;
}
@-webkit-keyframes fadeOutUpShort {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}
}
@keyframes fadeOutUpShort {
    0% {
        opacity: 1;
}
    100% {
        opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}
}
.fadeOutUpShort {
    -webkit-animation-name: fadeOutUpShort;
    animation-name: fadeOutUpShort;
}
@-webkit-keyframes fadeInUpShort {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}
@keyframes fadeInUpShort {
    0% {
        opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -ms-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}
    100% {
        opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
}
}
.fadeInUpShort {
    -webkit-animation-name: fadeInUpShort;
    animation-name: fadeInUpShort;
}
@-webkit-keyframes zoomInShort {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.95, 0.95, 0.95);
    transform: scale3d(0.95, 0.95, 0.95);
}
    50% {
        opacity: 1;
}
}
@keyframes zoomInShort {
    0% {
        opacity: 0;
    -webkit-transform: scale3d(0.95, 0.95, 0.95);
    -ms-transform: scale3d(0.95, 0.95, 0.95);
    transform: scale3d(0.95, 0.95, 0.95);
}
    50% {
        opacity: 1;
}
}
.zoomInShort {
    -webkit-animation-name: zoomInShort;
    animation-name: zoomInShort;
}
@-webkit-keyframes zoomBack {
    0% {
        opacity: 1;
}
    50% {
        opacity: 0;
    -webkit-transform: scale3d(0.5, 0.5, 0.5);
    transform: scale3d(0.5, 0.5, 0.5);
}
    100% {
        opacity: 0;
}
}
@keyframes zoomBack {
    0% {
        opacity: 1;
}
    50% {
        opacity: 0;
    -webkit-transform: scale3d(0.5, 0.5, 0.5);
    -ms-transform: scale3d(0.5, 0.5, 0.5);
    transform: scale3d(0.5, 0.5, 0.5);
}
    100% {
        opacity: 0;
}
}
.zoomBack {
    -webkit-animation-name: zoomBack;
    animation-name: zoomBack;
}
/* ========================================================================
 Component: button-extra.less
 ========================================================================== */
.btn-inverse {
    color: #ffffff;
    background-color: #131e26;
    border-color: #131e26;
}
.btn-inverse:focus,
.btn-inverse.focus {
    color: #ffffff;
    background-color: #0c1318;
    border-color: #05090b;
}
.btn-inverse:hover {
    color: #ffffff;
    background-color: #0c1318;
    border-color: #05090b;
}
.btn-inverse:active,
.btn-inverse.active,
.open > .dropdown-toggle.btn-inverse {
    color: #ffffff;
    background-color: #0c1318;
    border-color: #05090b;
}
.btn-inverse:active:hover,
.btn-inverse.active:hover,
.open > .dropdown-toggle.btn-inverse:hover,
.btn-inverse:active:focus,
.btn-inverse.active:focus,
.open > .dropdown-toggle.btn-inverse:focus,
.btn-inverse:active.focus,
.btn-inverse.active.focus,
.open > .dropdown-toggle.btn-inverse.focus {
    color: #ffffff;
    background-color: #0c1318;
    border-color: #05090b;
}
.btn-inverse:active,
.btn-inverse.active,
.open > .dropdown-toggle.btn-inverse {
    background-image: none;
}
.btn-inverse.disabled,
.btn-inverse[disabled],
fieldset[disabled] .btn-inverse,
.btn-inverse.disabled:hover,
.btn-inverse[disabled]:hover,
fieldset[disabled] .btn-inverse:hover,
.btn-inverse.disabled:focus,
.btn-inverse[disabled]:focus,
fieldset[disabled] .btn-inverse:focus,
.btn-inverse.disabled.focus,
.btn-inverse[disabled].focus,
fieldset[disabled] .btn-inverse.focus,
.btn-inverse.disabled:active,
.btn-inverse[disabled]:active,
fieldset[disabled] .btn-inverse:active,
.btn-inverse.disabled.active,
.btn-inverse[disabled].active,
fieldset[disabled] .btn-inverse.active {
    background-color: #131e26;
    border-color: #131e26;
}
.btn-inverse .badge {
    color: #131e26;
    background-color: #ffffff;
}
.btn-green {
    color: #ffffff;
    background-color: #37bc9b;
    border-color: transparent;
}
.btn-green:focus,
.btn-green.focus {
    color: #ffffff;
    background-color: #32ac8e;
    border-color: rgba(0, 0, 0, 0);
}
.btn-green:hover {
    color: #ffffff;
    background-color: #32ac8e;
    border-color: rgba(0, 0, 0, 0);
}
.btn-green:active,
.btn-green.active,
.open > .dropdown-toggle.btn-green {
    color: #ffffff;
    background-color: #32ac8e;
    border-color: rgba(0, 0, 0, 0);
}
.btn-green:active:hover,
.btn-green.active:hover,
.open > .dropdown-toggle.btn-green:hover,
.btn-green:active:focus,
.btn-green.active:focus,
.open > .dropdown-toggle.btn-green:focus,
.btn-green:active.focus,
.btn-green.active.focus,
.open > .dropdown-toggle.btn-green.focus {
    color: #ffffff;
    background-color: #32ac8e;
    border-color: rgba(0, 0, 0, 0);
}
.btn-green:active,
.btn-green.active,
.open > .dropdown-toggle.btn-green {
    background-image: none;
}
.btn-green.disabled,
.btn-green[disabled],
fieldset[disabled] .btn-green,
.btn-green.disabled:hover,
.btn-green[disabled]:hover,
fieldset[disabled] .btn-green:hover,
.btn-green.disabled:focus,
.btn-green[disabled]:focus,
fieldset[disabled] .btn-green:focus,
.btn-green.disabled.focus,
.btn-green[disabled].focus,
fieldset[disabled] .btn-green.focus,
.btn-green.disabled:active,
.btn-green[disabled]:active,
fieldset[disabled] .btn-green:active,
.btn-green.disabled.active,
.btn-green[disabled].active,
fieldset[disabled] .btn-green.active {
    background-color: #37bc9b;
    border-color: transparent;
}
.btn-green .badge {
    color: #37bc9b;
    background-color: #ffffff;
}
.btn-purple {
    color: #ffffff;
    background-color: #7266ba;
    border-color: transparent;
}
.btn-purple:focus,
.btn-purple.focus {
    color: #ffffff;
    background-color: #6558b4;
    border-color: rgba(0, 0, 0, 0);
}
.btn-purple:hover {
    color: #ffffff;
    background-color: #6558b4;
    border-color: rgba(0, 0, 0, 0);
}
.btn-purple:active,
.btn-purple.active,
.open > .dropdown-toggle.btn-purple {
    color: #ffffff;
    background-color: #6558b4;
    border-color: rgba(0, 0, 0, 0);
}
.btn-purple:active:hover,
.btn-purple.active:hover,
.open > .dropdown-toggle.btn-purple:hover,
.btn-purple:active:focus,
.btn-purple.active:focus,
.open > .dropdown-toggle.btn-purple:focus,
.btn-purple:active.focus,
.btn-purple.active.focus,
.open > .dropdown-toggle.btn-purple.focus {
    color: #ffffff;
    background-color: #6558b4;
    border-color: rgba(0, 0, 0, 0);
}
.btn-purple:active,
.btn-purple.active,
.open > .dropdown-toggle.btn-purple {
    background-image: none;
}
.btn-purple.disabled,
.btn-purple[disabled],
fieldset[disabled] .btn-purple,
.btn-purple.disabled:hover,
.btn-purple[disabled]:hover,
fieldset[disabled] .btn-purple:hover,
.btn-purple.disabled:focus,
.btn-purple[disabled]:focus,
fieldset[disabled] .btn-purple:focus,
.btn-purple.disabled.focus,
.btn-purple[disabled].focus,
fieldset[disabled] .btn-purple.focus,
.btn-purple.disabled:active,
.btn-purple[disabled]:active,
fieldset[disabled] .btn-purple:active,
.btn-purple.disabled.active,
.btn-purple[disabled].active,
fieldset[disabled] .btn-purple.active {
    background-color: #7266ba;
    border-color: transparent;
}
.btn-purple .badge {
    color: #7266ba;
    background-color: #ffffff;
}
.btn-pink {
    color: #ffffff;
    background-color: #f532e5;
    border-color: transparent;
}
.btn-pink:focus,
.btn-pink.focus {
    color: #ffffff;
    background-color: #f41fe3;
    border-color: rgba(0, 0, 0, 0);
}
.btn-pink:hover {
    color: #ffffff;
    background-color: #f41fe3;
    border-color: rgba(0, 0, 0, 0);
}
.btn-pink:active,
.btn-pink.active,
.open > .dropdown-toggle.btn-pink {
    color: #ffffff;
    background-color: #f41fe3;
    border-color: rgba(0, 0, 0, 0);
}
.btn-pink:active:hover,
.btn-pink.active:hover,
.open > .dropdown-toggle.btn-pink:hover,
.btn-pink:active:focus,
.btn-pink.active:focus,
.open > .dropdown-toggle.btn-pink:focus,
.btn-pink:active.focus,
.btn-pink.active.focus,
.open > .dropdown-toggle.btn-pink.focus {
    color: #ffffff;
    background-color: #f41fe3;
    border-color: rgba(0, 0, 0, 0);
}
.btn-pink:active,
.btn-pink.active,
.open > .dropdown-toggle.btn-pink {
    background-image: none;
}
.btn-pink.disabled,
.btn-pink[disabled],
fieldset[disabled] .btn-pink,
.btn-pink.disabled:hover,
.btn-pink[disabled]:hover,
fieldset[disabled] .btn-pink:hover,
.btn-pink.disabled:focus,
.btn-pink[disabled]:focus,
fieldset[disabled] .btn-pink:focus,
.btn-pink.disabled.focus,
.btn-pink[disabled].focus,
fieldset[disabled] .btn-pink.focus,
.btn-pink.disabled:active,
.btn-pink[disabled]:active,
fieldset[disabled] .btn-pink:active,
.btn-pink.disabled.active,
.btn-pink[disabled].active,
fieldset[disabled] .btn-pink.active {
    background-color: #f532e5;
    border-color: transparent;
}
.btn-pink .badge {
    color: #f532e5;
    background-color: #ffffff;
}
.btn-outline {
    background-color: transparent;
    border-color: #fff;
}
.btn-outline:hover,
.btn-outline:focus {
    background-color: #fff;
    color: #5d9cec;
}
.btn-flat {
    border-bottom-width: 1px;
    border-radius: 0;
    box-shadow: 0 0 0 #000;
}
.btn-xl {
    padding: 20px 16px;
    font-size: 18px;
}
.btn-square {
    border-radius: 0;
}
.btn-pill-left,
.btn-oval {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-left: 18px;
}
.btn-pill-right,
.btn-oval {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-right: 18px;
}
.btn-labeled {
    padding-top: 0;
    padding-bottom: 0;
}
.btn-label {
    position: relative;
    background: transparent;
    background: rgba(0, 0, 0, 0.05);
    display: inline-block;
    padding: 6px 16px;
    left: -16px;
    border-radius: 3px 0 0 3px;
}
.btn-label.btn-label-right {
    left: auto;
    right: -16px;
    border-radius: 0 3px 3px 0;
}
.btn-lg .btn-label {
    padding: 10px 20px;
    left: -20px;
    border-radius: 5px 0 0 5px;
}
.btn-lg .btn-label.btn-label-right {
    left: auto;
    right: -20px;
    border-radius: 0 5px 5px 0;
}
.btn-sm .btn-label {
    padding: 5px 10px;
    left: -10px;
    border-radius: 2px 0 0 2px;
}
.btn-sm .btn-label.btn-label-right {
    left: auto;
    right: -10px;
    border-radius: 0 2px 2px 0;
}
.btn-xs .btn-label {
    padding: 1px 5px;
    left: -5px;
    border-radius: 2px 0 0 2px;
}
.btn-xs .btn-label.btn-label-right {
    left: auto;
    right: -5px;
    border-radius: 0 2px 2px 0;
}
.btn-fw {
    min-width: 80px;
}
.btn-fw.btn-sm {
    min-width: 40px;
}
.btn-fw.btn-md {
    min-width: 60px;
}
.btn-fw.btn-lg {
    min-width: 140px;
}
.btn-circle {
    width: 35px;
    height: 35px;
    text-align: center;
    font-size: 12px;
    line-height: 35px;
    border-radius: 500px;
    padding: 0;
    border: 0;
}
.btn-circle > * {
    line-height: inherit !important;
}
.btn-circle.btn-lg {
    width: 50px;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
}
/* ========================================================================
 Component: placeholder.less
 ========================================================================== */
.box-placeholder {
    margin-bottom: 15px;
    padding: 20px;
    border: 1px dashed #dddddd;
    background: #fafafa;
    color: #444444;
}
.box-placeholder > :last-child {
    margin-bottom: 0;
}
.box-placeholder-lg {
    padding-top: 80px;
    padding-bottom: 80px;
}
/* ========================================================================
 Component: panels.less
 ========================================================================== */
.panel .table {
    margin-bottom: 0;
    border: 0;
}
.panel.panel-transparent {
    border: 0;
    background-color: transparent;
    box-shadow: 0 0 0 #000;
}
.panel.panel-transparent .panel-heading,
.panel.panel-transparent .panel-body {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
}
.panel-flat {
    margin: 0 !important;
    border: 0;
}
.panel-group .panel-flat {
    box-shadow: 0 0 0 #000;
}
.panel-group .panel-flat:first-child {
    border-radius: 4px 4px 0 0;
}
.panel-group .panel-flat:last-child {
    border-radius: 0 0 4px 4px;
}
.panel-heading paneltool > a {
    display: inline-block;
    color: #fff;
    width: 2em;
    text-align: center;
}
.panel-default .panel-heading paneltool > a {
    color: #c1c2c3;
}
.panel-heading > .label.pull-right {
    margin-top: 3px;
}
.panel-heading > .label.pull-right + .label.pull-right {
    margin-right: 10px;
}
.panel-heading.panel-heading-collapsed {
    border-radius: 3px;
}
.panel-footer .pagination {
    margin: 0;
}
.panel-footer .radial-bar {
    margin-bottom: 0;
}
.panel-footer p {
    margin-bottom: 0;
}
.panel-heading-active {
    background-color: #27c24c !important;
    font-weight: bold;
    font-size: 16px;
}
.panel-heading-active > a {
    padding: 15px 0;
    color: #fff !important;
    -webkit-transition: padding 0.5s ease;
    -o-transition: padding 0.5s ease;
    transition: padding 0.5s ease;
}
.panel-heading-active + .panel-collapse:after {
    content: "";
    display: block;
    width: 60%;
    margin: 0 auto;
    height: 0;
    border-bottom: 1px solid #e1e2e3;
}
.panel-inverse {
    border-color: #cfdbe2;
}
.panel-inverse > .panel-heading {
    color: #ffffff;
    background-color: #131e26;
    border-color: #131e26;
}
.panel-inverse > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #cfdbe2;
}
.panel-inverse > .panel-heading .badge {
    color: #131e26;
    background-color: #ffffff;
}
.panel-inverse > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #cfdbe2;
}
.panel-green {
    border-color: #cfdbe2;
}
.panel-green > .panel-heading {
    color: #ffffff;
    background-color: #37bc9b;
    border-color: #37bc9b;
}
.panel-green > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #cfdbe2;
}
.panel-green > .panel-heading .badge {
    color: #37bc9b;
    background-color: #ffffff;
}
.panel-green > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #cfdbe2;
}
.panel-pink {
    border-color: #cfdbe2;
}
.panel-pink > .panel-heading {
    color: #ffffff;
    background-color: #f532e5;
    border-color: #f532e5;
}
.panel-pink > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #cfdbe2;
}
.panel-pink > .panel-heading .badge {
    color: #f532e5;
    background-color: #ffffff;
}
.panel-pink > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #cfdbe2;
}
.panel-purple {
    border-color: #cfdbe2;
}
.panel-purple > .panel-heading {
    color: #ffffff;
    background-color: #7266ba;
    border-color: #7266ba;
}
.panel-purple > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #cfdbe2;
}
.panel-purple > .panel-heading .badge {
    color: #7266ba;
    background-color: #ffffff;
}
.panel-purple > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #cfdbe2;
}
.panel-dark {
    border-color: #cfdbe2;
}
.panel-dark > .panel-heading {
    color: #ffffff;
    background-color: #3a3f51;
    border-color: #3a3f51;
}
.panel-dark > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #cfdbe2;
}
.panel-dark > .panel-heading .badge {
    color: #3a3f51;
    background-color: #ffffff;
}
.panel-dark > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #cfdbe2;
}
/* ========================================================================
 Component: progress-extra.less
 ========================================================================== */
.progress-sm {
    height: 15px;
}
.progress-xs {
    height: 8px;
}
.progress-bar-purple {
    background-color: #7266ba;
}
.progress-striped .progress-bar-purple {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-inverse {
    background-color: #131e26;
}
.progress-striped .progress-bar-inverse {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-green {
    background-color: #37bc9b;
}
.progress-striped .progress-bar-green {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-pink {
    background-color: #f532e5;
}
.progress-striped .progress-bar-pink {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-0 {
    width: 0%;
}
.progress-10 {
    width: 10%;
}
.progress-20 {
    width: 20%;
}
.progress-30 {
    width: 30%;
}
.progress-40 {
    width: 40%;
}
.progress-50 {
    width: 50%;
}
.progress-60 {
    width: 60%;
}
.progress-70 {
    width: 70%;
}
.progress-80 {
    width: 80%;
}
.progress-90 {
    width: 90%;
}
.progress-100 {
    width: 100%;
}
/* ========================================================================
 Component: radial-bar.less
 ========================================================================== */
/* -------------------------------------
 * Bar container
 * ------------------------------------- */
.radial-bar {
    position: relative;
    display: inline-block;
    font-size: 16px;
    border-radius: 50%;
    border: 2px solid #fafafa;
    background-color: transparent;
    margin-bottom: 20px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    width: 80px;
    height: 80px;
    font-size: 18px;
}
.radial-bar:after,
.radial-bar > img {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    color: #a1a2a3;
}
.radial-bar:after {
    content: attr(data-label);
    background-color: #ffffff;
    z-index: 101;
}
.radial-bar > img {
    z-index: 102;
}
.radial-bar:after,
.radial-bar > img {
    width: 56px;
    height: 56px;
    margin-left: 12px;
    margin-top: 12px;
    line-height: 56px;
}
.radial-bar.radial-bar-0 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(90deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-5 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(108deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-10 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(126deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-15 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(144deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-20 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(162deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-25 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(180deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-30 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(198deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-35 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(216deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-40 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(234deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-45 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(252deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-50 {
    background-image: linear-gradient(270deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-55 {
    background-image: linear-gradient(288deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-60 {
    background-image: linear-gradient(306deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-65 {
    background-image: linear-gradient(324deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-70 {
    background-image: linear-gradient(342deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-75 {
    background-image: linear-gradient(360deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-80 {
    background-image: linear-gradient(378deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-85 {
    background-image: linear-gradient(396deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-90 {
    background-image: linear-gradient(414deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-95 {
    background-image: linear-gradient(432deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar.radial-bar-100 {
    background-image: linear-gradient(450deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-0 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(90deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-5 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(108deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-10 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(126deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-15 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(144deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-20 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(162deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-25 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(180deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-30 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(198deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-35 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(216deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-40 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(234deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-45 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(252deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-50 {
    background-image: linear-gradient(270deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-55 {
    background-image: linear-gradient(288deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-60 {
    background-image: linear-gradient(306deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-65 {
    background-image: linear-gradient(324deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-70 {
    background-image: linear-gradient(342deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-75 {
    background-image: linear-gradient(360deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-80 {
    background-image: linear-gradient(378deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-85 {
    background-image: linear-gradient(396deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-90 {
    background-image: linear-gradient(414deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-95 {
    background-image: linear-gradient(432deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-primary.radial-bar-100 {
    background-image: linear-gradient(450deg, #5d9cec 50%, transparent 50%, transparent), linear-gradient(270deg, #5d9cec 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-0 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(90deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-5 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(108deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-10 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(126deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-15 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(144deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-20 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(162deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-25 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(180deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-30 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(198deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-35 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(216deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-40 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(234deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-45 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(252deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-50 {
    background-image: linear-gradient(270deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-55 {
    background-image: linear-gradient(288deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-60 {
    background-image: linear-gradient(306deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-65 {
    background-image: linear-gradient(324deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-70 {
    background-image: linear-gradient(342deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-75 {
    background-image: linear-gradient(360deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-80 {
    background-image: linear-gradient(378deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-85 {
    background-image: linear-gradient(396deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-90 {
    background-image: linear-gradient(414deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-95 {
    background-image: linear-gradient(432deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-success.radial-bar-100 {
    background-image: linear-gradient(450deg, #27c24c 50%, transparent 50%, transparent), linear-gradient(270deg, #27c24c 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-0 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(90deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-5 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(108deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-10 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(126deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-15 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(144deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-20 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(162deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-25 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(180deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-30 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(198deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-35 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(216deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-40 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(234deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-45 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(252deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-50 {
    background-image: linear-gradient(270deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-55 {
    background-image: linear-gradient(288deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-60 {
    background-image: linear-gradient(306deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-65 {
    background-image: linear-gradient(324deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-70 {
    background-image: linear-gradient(342deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-75 {
    background-image: linear-gradient(360deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-80 {
    background-image: linear-gradient(378deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-85 {
    background-image: linear-gradient(396deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-90 {
    background-image: linear-gradient(414deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-95 {
    background-image: linear-gradient(432deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-info.radial-bar-100 {
    background-image: linear-gradient(450deg, #23b7e5 50%, transparent 50%, transparent), linear-gradient(270deg, #23b7e5 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-0 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(90deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-5 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(108deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-10 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(126deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-15 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(144deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-20 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(162deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-25 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(180deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-30 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(198deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-35 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(216deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-40 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(234deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-45 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(252deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-50 {
    background-image: linear-gradient(270deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-55 {
    background-image: linear-gradient(288deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-60 {
    background-image: linear-gradient(306deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-65 {
    background-image: linear-gradient(324deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-70 {
    background-image: linear-gradient(342deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-75 {
    background-image: linear-gradient(360deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-80 {
    background-image: linear-gradient(378deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-85 {
    background-image: linear-gradient(396deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-90 {
    background-image: linear-gradient(414deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-95 {
    background-image: linear-gradient(432deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-warning.radial-bar-100 {
    background-image: linear-gradient(450deg, #ff902b 50%, transparent 50%, transparent), linear-gradient(270deg, #ff902b 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-0 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(90deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-5 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(108deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-10 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(126deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-15 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(144deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-20 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(162deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-25 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(180deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-30 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(198deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-35 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(216deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-40 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(234deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-45 {
    background-image: linear-gradient(90deg, #fafafa 50%, transparent 50%, transparent), linear-gradient(252deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-50 {
    background-image: linear-gradient(270deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-55 {
    background-image: linear-gradient(288deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-60 {
    background-image: linear-gradient(306deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-65 {
    background-image: linear-gradient(324deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-70 {
    background-image: linear-gradient(342deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-75 {
    background-image: linear-gradient(360deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-80 {
    background-image: linear-gradient(378deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-85 {
    background-image: linear-gradient(396deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-90 {
    background-image: linear-gradient(414deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-95 {
    background-image: linear-gradient(432deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-danger.radial-bar-100 {
    background-image: linear-gradient(450deg, #f05050 50%, transparent 50%, transparent), linear-gradient(270deg, #f05050 50%, #fafafa 50%, #fafafa);
}
.radial-bar-lg {
    width: 100px;
    height: 100px;
    font-size: 22px;
}
.radial-bar-lg:after,
.radial-bar-lg > img {
    width: 70px;
    height: 70px;
    margin-left: 15px;
    margin-top: 15px;
    line-height: 70px;
}
.radial-bar-sm {
    width: 50px;
    height: 50px;
    font-size: 12px;
}
.radial-bar-sm:after,
.radial-bar-sm > img {
    width: 35px;
    height: 35px;
    margin-left: 7.5px;
    margin-top: 7.5px;
    line-height: 35px;
}
.radial-bar-xs {
    width: 30px;
    height: 30px;
    font-size: 8px;
}
.radial-bar-xs:after,
.radial-bar-xs > img {
    width: 21px;
    height: 21px;
    margin-left: 4.5px;
    margin-top: 4.5px;
    line-height: 21px;
}
x:-o-prefocus,
.radial-bar {
    background-clip: content-box;
}
/* ========================================================================
 Component: user-block.less
 ========================================================================== */
.has-user-block {
    display: block;
    overflow: hidden;
    border: 0 !important;
    width: 100% !important;
}
.user-block {
    position: relative;
    padding: 25px 0 10px;
    cursor: pointer;
}
.user-block:before,
.user-block:after {
    content: " ";
    display: table;
}
.user-block:after {
    clear: both;
}
.user-block > .user-block-picture {
    position: relative;
    width: 60px;
    margin: 0 auto;
}
.user-block > .user-block-picture > img {
    max-width: 100%;
    height: auto;
}
.user-block .user-block-info {
    padding-top: 15px;
    text-align: center;
    white-space: nowrap;
}
.user-block .user-block-info .user-block-name,
.user-block .user-block-info .user-block-role {
    display: block;
}
.user-block .user-block-info .user-block-name {
    color: #7D848F;
}
.user-block .user-block-info .user-block-role {
    font-size: 12px;
    color: #aaa;
}
.user-block-status {
    position: relative;
}
.user-block-status > .circle {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid #fff;
}
.aside-collapsed .user-block {
    padding: 15px 0 14px;
    margin: 0;
    text-align: center;
}
.aside-collapsed .user-block > .user-block-picture {
    float: none;
    margin: 0  auto;
    width: 50px;
}
.aside-collapsed .user-block > .user-block-picture > .user-block-status {
    display: block;
}
.aside-collapsed .user-block .user-block-info {
    display: none;
}
/* ========================================================================
 Component: circles.less
 ========================================================================== */
.circle {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 500px;
    margin: 0 .5em;
    background-color: #ddd;
    vertical-align: baseline;
    border: 2px solid transparent;
}
.circle.text-left {
    margin-left: 0;
}
.circle.text-right {
    margin-right: 0;
}
.circle-primary {
    background-color: #5d9cec;
}
.circle-success {
    background-color: #27c24c;
}
.circle-info {
    background-color: #23b7e5;
}
.circle-warning {
    background-color: #ff902b;
}
.circle-danger {
    background-color: #f05050;
}
.circle-green {
    background-color: #37bc9b;
}
.circle-pink {
    background-color: #f532e5;
}
.circle-inverse {
    background-color: #131e26;
}
.circle-purple {
    background-color: #7266ba;
}
.circle-sm {
    width: 5px;
    height: 5px;
}
.circle-lg {
    width: 11px;
    height: 11px;
}
.circle-xl {
    width: 18px;
    height: 18px;
}
.circle-outline {
    background-color: transparent;
}
.circle-outline.circle-primary {
    border: 1px solid #5d9cec;
}
.circle-outline.circle-success {
    border: 1px solid #27c24c;
}
.circle-outline.circle-info {
    border: 1px solid #23b7e5;
}
.circle-outline.circle-warning {
    border: 1px solid #ff902b;
}
.circle-outline.circle-danger {
    border: 1px solid #f05050;
}
/* ========================================================================
 Component: timeline.less
 ========================================================================== */
.timeline,
.timeline-alt {
    list-style: none;
    padding: 0 0 20px;
    position: relative;
    z-index: 0;
}
.timeline:before,
.timeline-alt:before {
    position: absolute;
    top: 0;
    bottom: 0;
    content: " ";
    width: 1px;
    background-color: #d1d2d3;
    left: 18px;
}
.timeline .timeline-end,
.timeline-alt .timeline-end {
    float: none;
    clear: both;
}
.timeline .popover.left > .arrow:after,
.timeline-alt .popover.left > .arrow:after {
    border-left-color: #fff;
}
.timeline .popover.right > .arrow:after,
.timeline-alt .popover.right > .arrow:after {
    border-right-color: #fff;
}
.timeline .popover.left > .popover-title + .arrow:after,
.timeline-alt .popover.left > .popover-title + .arrow:after {
    border-left-color: #fafafa;
}
.timeline .popover.right > .popover-title + .arrow:after,
.timeline-alt .popover.right > .popover-title + .arrow:after {
    border-right-color: #fafafa;
}
.timeline > li,
.timeline-alt > li {
    margin-bottom: 20px;
}
.timeline > li:before,
.timeline-alt > li:before,
.timeline > li:after,
.timeline-alt > li:after {
    content: " ";
    display: table;
}
.timeline > li:after,
.timeline-alt > li:after {
    clear: both;
}
.timeline > li.timeline-separator,
.timeline-alt > li.timeline-separator {
    position: relative;
    float: none;
    clear: both;
    margin: 0 auto;
    padding: 40px 0;
}
.timeline > li.timeline-separator:first-child,
.timeline-alt > li.timeline-separator:first-child {
    padding-top: 0;
}
.timeline > li.timeline-separator:before,
.timeline-alt > li.timeline-separator:before {
    content: attr(data-datetime);
    display: inline-block;
    width: 120px;
    text-align: center;
    padding: 0 20px;
    line-height: 30px;
    background-color: #b6c5da;
    color: #fff;
}
.timeline > li > .timeline-panel,
.timeline-alt > li > .timeline-panel {
    margin-left: 60px;
}
.timeline > li > .timeline-panel .popover,
.timeline-alt > li > .timeline-panel .popover {
    position: relative;
    display: block;
    margin: 0;
    width: 100%;
    max-width: none;
}
.timeline > li > .timeline-panel .popover .arrow,
.timeline-alt > li > .timeline-panel .popover .arrow {
    top: 18px;
    display: none;
}
.timeline > li > .timeline-panel .popover .popover-content .popover-title,
.timeline-alt > li > .timeline-panel .popover .popover-content .popover-title {
    background-color: transparent;
    border: 0;
    padding-left: 0;
    padding-top: 0;
}
.timeline > li > .timeline-date,
.timeline-alt > li > .timeline-date {
    margin: -20px 0 0;
    display: block;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
}
.timeline > li > .timeline-date > time:after,
.timeline-alt > li > .timeline-date > time:after {
    content: attr(datetime);
}
.timeline > li > .timeline-badge,
.timeline-alt > li > .timeline-badge {
    position: absolute;
    left: 0;
    width: 36px;
    height: 36px;
    border-radius: 500px;
    line-height: 36px;
    font-size: 1em;
    text-align: center;
    color: #fff;
    background-color: #999;
    z-index: 100;
}
.timeline > li > .timeline-badge.primary,
.timeline-alt > li > .timeline-badge.primary {
    background-color: #5d9cec;
}
.timeline > li > .timeline-badge.success,
.timeline-alt > li > .timeline-badge.success {
    background-color: #27c24c;
}
.timeline > li > .timeline-badge.warning,
.timeline-alt > li > .timeline-badge.warning {
    background-color: #ff902b;
}
.timeline > li > .timeline-badge.danger,
.timeline-alt > li > .timeline-badge.danger {
    background-color: #f05050;
}
.timeline > li > .timeline-badge.info,
.timeline-alt > li > .timeline-badge.info {
    background-color: #23b7e5;
}
.timeline > li > .timeline-badge.inverse,
.timeline-alt > li > .timeline-badge.inverse {
    background-color: #131e26;
}
.timeline > li > .timeline-badge.green,
.timeline-alt > li > .timeline-badge.green {
    background-color: #37bc9b;
}
.timeline > li > .timeline-badge.pink,
.timeline-alt > li > .timeline-badge.pink {
    background-color: #f532e5;
}
.timeline > li > .timeline-badge.purple,
.timeline-alt > li > .timeline-badge.purple {
    background-color: #7266ba;
}
.timeline > li > .timeline-badge.dark,
.timeline-alt > li > .timeline-badge.dark {
    background-color: #3a3f51;
}
.timeline > li > .timeline-badge.yellow,
.timeline-alt > li > .timeline-badge.yellow {
    background-color: #fad732;
}
.timeline-alt .popover .arrow {
    display: block !important;
}
.timeline-title {
    margin-top: 0;
    color: inherit;
}
.timeline-body > p,
.timeline-body > ul {
    margin-bottom: 0;
}
.timeline-body > p + p {
    margin-top: 5px;
}
@media only screen and (min-width: 992px) {
.timeline:before {
        left: 50%;
        margin-left: 18px;
    }
.timeline > li {
        float: left;
        clear: left;
        width: 45%;
    }
.timeline > li.timeline-inverted {
        float: right;
        clear: right;
        margin-top: 50px;
    }
.timeline > li.timeline-separator {
        text-align: center;
    }
.timeline > li.timeline-separator:before {
        margin-left: 36px;
    }
.timeline > li > .timeline-badge {
        left: 50%;
        margin-left: 0;
    }
.timeline > li > .timeline-date {
        float: none;
        position: absolute;
        width: 40%;
        left: 50%;
        top: 18px;
        margin-left: 54px;
        margin-top: -10px;
    }
.timeline > li > .timeline-panel {
        margin: 0;
    }
.timeline > li > .timeline-panel:before {
        border-left-width: 15px;
        border-right-width: 0;
        top: 26px;
        right: -15px;
        left: auto;
    }
.timeline > li > .timeline-panel:after {
        border-left-width: 14px;
        border-right-width: 0;
        top: 27px;
        right: -14px;
        left: auto;
    }
.timeline > li > .timeline-panel .popover .arrow {
        display: block;
    }
.timeline > li.timeline-inverted > .timeline-panel {
        padding-left: 36px;
    }
.timeline > li.timeline-inverted .timeline-date {
        left: auto;
        right: 50%;
        width: auto;
        margin-left: 0;
        margin-right: 36px;
    }
}
/* ========================================================================
 Component: dropdown-extras.less
 ========================================================================== */
.dropdown-lg > .dropdown-menu {
    min-width: 200px;
}
.dropdown-list > .dropdown-menu {
    padding: 0;
    min-width: 220px;
}
.dropdown-list .list-group {
    margin: 0;
}
.dropdown-list .list-group-item {
    border-radius: 0;
    border-left: 0;
    border-right: 0;
}
.dropdown-list .list-group-item:first-child {
    border-top: 0;
}
.dropdown-list .list-group-item:last-child {
    border-bottom: 0;
}
.dropdown > a {
    position: relative;
}
.dropdown > a > .label {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2px 5px;
}
@media only screen and (min-width: 768px) {
.dropdown > a > .label {
        top: 10px;
    }
}
.dropdown-menu-header {
    padding: 10px 15px;
    background-color: #fafafa;
    border-bottom: 1px solid #e1e1e1;
}
/* ========================================================================
 Component: row-extra.less
 ========================================================================== */
.container-sm {
    max-width: 750px;
    width: auto;
}
.container-md {
    max-width: 970px;
    width: auto;
}
.container-lg {
    max-width: 1170px;
    width: auto;
}
.row-table {
    display: table;
    table-layout: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
}
.row-table > [class*="col-"] {
    display: table-cell;
    float: none;
    table-layout: fixed;
    vertical-align: middle;
}
.row-flush > [class*="col-"] {
    padding-left: 0;
    padding-right: 0;
}
/* ========================================================================
 Component: half-float.less
 ========================================================================== */
.half-float {
    position: relative;
    margin-bottom: 65px;
}
.half-float .half-float-bottom,
.half-float .half-float-top {
    position: absolute;
    left: 50%;
    bottom: -60px;
    width: 120px;
    height: 120px;
    margin-left: -60px;
    z-index: 2;
}
.half-float .half-float-top {
    bottom: auto;
    top: -60px;
}
.half-float + * {
    margin-top: -55px;
padding-top: 65px;
}
/* ========================================================================
 Component: masonry-grid.less
 ========================================================================== */
.row-masonry {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
}
.row-masonry > .col-masonry {
    display: inline-block;
    width: 100%;
    min-height: 1em;
    margin-bottom: 15px;
}
/* Columns definition by devices */
@media only screen and (min-width: 480px) {
.row-masonry-sm-1 {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 1;
        -webkit-columns: 1;
        columns: 1;
    }
.no-csscolumns .row-masonry-sm-1 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-1:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-1 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 99%;
    }
.row-masonry-sm-2 {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 2;
        -webkit-columns: 2;
        columns: 2;
    }
.no-csscolumns .row-masonry-sm-2 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-2:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-2 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 49%;
    }
.row-masonry-sm-3 {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 3;
        -webkit-columns: 3;
        columns: 3;
    }
.no-csscolumns .row-masonry-sm-3 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-3:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-3 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 32%;
    }
.row-masonry-sm-4 {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 4;
        -webkit-columns: 4;
        columns: 4;
    }
.no-csscolumns .row-masonry-sm-4 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-4:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-4 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 24%;
    }
.row-masonry-sm-5 {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 5;
        -webkit-columns: 5;
        columns: 5;
    }
.no-csscolumns .row-masonry-sm-5 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-5:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-5 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 19%;
    }
.row-masonry-sm-6 {
        -moz-column-count: 6;
        -webkit-column-count: 6;
        column-count: 6;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 6;
        -webkit-columns: 6;
        columns: 6;
    }
.no-csscolumns .row-masonry-sm-6 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-6:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-6 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 15%;
    }
.row-masonry-sm-7 {
        -moz-column-count: 7;
        -webkit-column-count: 7;
        column-count: 7;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 7;
        -webkit-columns: 7;
        columns: 7;
    }
.no-csscolumns .row-masonry-sm-7 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-7:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-7 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 13%;
    }
.row-masonry-sm-8 {
        -moz-column-count: 8;
        -webkit-column-count: 8;
        column-count: 8;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 8;
        -webkit-columns: 8;
        columns: 8;
    }
.no-csscolumns .row-masonry-sm-8 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-8:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-8 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 11%;
    }
.row-masonry-sm-9 {
        -moz-column-count: 9;
        -webkit-column-count: 9;
        column-count: 9;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 9;
        -webkit-columns: 9;
        columns: 9;
    }
.no-csscolumns .row-masonry-sm-9 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-9:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-9 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 10%;
    }
.row-masonry-sm-10 {
        -moz-column-count: 10;
        -webkit-column-count: 10;
        column-count: 10;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 10;
        -webkit-columns: 10;
        columns: 10;
    }
.no-csscolumns .row-masonry-sm-10 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-10:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-10 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 9%;
    }
.row-masonry-sm-11 {
        -moz-column-count: 11;
        -webkit-column-count: 11;
        column-count: 11;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 11;
        -webkit-columns: 11;
        columns: 11;
    }
.no-csscolumns .row-masonry-sm-11 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-11:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-11 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 8%;
    }
.row-masonry-sm-12 {
        -moz-column-count: 12;
        -webkit-column-count: 12;
        column-count: 12;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 12;
        -webkit-columns: 12;
        columns: 12;
    }
.no-csscolumns .row-masonry-sm-12 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-sm-12:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-sm-12 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 7%;
    }
}
@media only screen and (min-width: 768px) {
.row-masonry-md-1 {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 1;
        -webkit-columns: 1;
        columns: 1;
    }
.no-csscolumns .row-masonry-md-1 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-1:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-1 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 99%;
    }
.row-masonry-md-2 {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 2;
        -webkit-columns: 2;
        columns: 2;
    }
.no-csscolumns .row-masonry-md-2 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-2:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-2 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 49%;
    }
.row-masonry-md-3 {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 3;
        -webkit-columns: 3;
        columns: 3;
    }
.no-csscolumns .row-masonry-md-3 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-3:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-3 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 32%;
    }
.row-masonry-md-4 {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 4;
        -webkit-columns: 4;
        columns: 4;
    }
.no-csscolumns .row-masonry-md-4 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-4:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-4 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 24%;
    }
.row-masonry-md-5 {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 5;
        -webkit-columns: 5;
        columns: 5;
    }
.no-csscolumns .row-masonry-md-5 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-5:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-5 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 19%;
    }
.row-masonry-md-6 {
        -moz-column-count: 6;
        -webkit-column-count: 6;
        column-count: 6;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 6;
        -webkit-columns: 6;
        columns: 6;
    }
.no-csscolumns .row-masonry-md-6 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-6:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-6 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 15%;
    }
.row-masonry-md-7 {
        -moz-column-count: 7;
        -webkit-column-count: 7;
        column-count: 7;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 7;
        -webkit-columns: 7;
        columns: 7;
    }
.no-csscolumns .row-masonry-md-7 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-7:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-7 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 13%;
    }
.row-masonry-md-8 {
        -moz-column-count: 8;
        -webkit-column-count: 8;
        column-count: 8;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 8;
        -webkit-columns: 8;
        columns: 8;
    }
.no-csscolumns .row-masonry-md-8 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-8:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-8 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 11%;
    }
.row-masonry-md-9 {
        -moz-column-count: 9;
        -webkit-column-count: 9;
        column-count: 9;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 9;
        -webkit-columns: 9;
        columns: 9;
    }
.no-csscolumns .row-masonry-md-9 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-9:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-9 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 10%;
    }
.row-masonry-md-10 {
        -moz-column-count: 10;
        -webkit-column-count: 10;
        column-count: 10;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 10;
        -webkit-columns: 10;
        columns: 10;
    }
.no-csscolumns .row-masonry-md-10 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-10:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-10 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 9%;
    }
.row-masonry-md-11 {
        -moz-column-count: 11;
        -webkit-column-count: 11;
        column-count: 11;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 11;
        -webkit-columns: 11;
        columns: 11;
    }
.no-csscolumns .row-masonry-md-11 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-11:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-11 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 8%;
    }
.row-masonry-md-12 {
        -moz-column-count: 12;
        -webkit-column-count: 12;
        column-count: 12;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 12;
        -webkit-columns: 12;
        columns: 12;
    }
.no-csscolumns .row-masonry-md-12 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-md-12:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-md-12 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 7%;
    }
}
@media only screen and (min-width: 992px) {
.row-masonry-lg-1 {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 1;
        -webkit-columns: 1;
        columns: 1;
    }
.no-csscolumns .row-masonry-lg-1 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-1:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-1 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 99%;
    }
.row-masonry-lg-2 {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 2;
        -webkit-columns: 2;
        columns: 2;
    }
.no-csscolumns .row-masonry-lg-2 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-2:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-2 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 49%;
    }
.row-masonry-lg-3 {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 3;
        -webkit-columns: 3;
        columns: 3;
    }
.no-csscolumns .row-masonry-lg-3 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-3:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-3 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 32%;
    }
.row-masonry-lg-4 {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 4;
        -webkit-columns: 4;
        columns: 4;
    }
.no-csscolumns .row-masonry-lg-4 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-4:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-4 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 24%;
    }
.row-masonry-lg-5 {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 5;
        -webkit-columns: 5;
        columns: 5;
    }
.no-csscolumns .row-masonry-lg-5 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-5:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-5 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 19%;
    }
.row-masonry-lg-6 {
        -moz-column-count: 6;
        -webkit-column-count: 6;
        column-count: 6;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 6;
        -webkit-columns: 6;
        columns: 6;
    }
.no-csscolumns .row-masonry-lg-6 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-6:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-6 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 15%;
    }
.row-masonry-lg-7 {
        -moz-column-count: 7;
        -webkit-column-count: 7;
        column-count: 7;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 7;
        -webkit-columns: 7;
        columns: 7;
    }
.no-csscolumns .row-masonry-lg-7 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-7:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-7 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 13%;
    }
.row-masonry-lg-8 {
        -moz-column-count: 8;
        -webkit-column-count: 8;
        column-count: 8;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 8;
        -webkit-columns: 8;
        columns: 8;
    }
.no-csscolumns .row-masonry-lg-8 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-8:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-8 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 11%;
    }
.row-masonry-lg-9 {
        -moz-column-count: 9;
        -webkit-column-count: 9;
        column-count: 9;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 9;
        -webkit-columns: 9;
        columns: 9;
    }
.no-csscolumns .row-masonry-lg-9 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-9:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-9 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 10%;
    }
.row-masonry-lg-10 {
        -moz-column-count: 10;
        -webkit-column-count: 10;
        column-count: 10;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 10;
        -webkit-columns: 10;
        columns: 10;
    }
.no-csscolumns .row-masonry-lg-10 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-10:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-10 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 9%;
    }
.row-masonry-lg-11 {
        -moz-column-count: 11;
        -webkit-column-count: 11;
        column-count: 11;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 11;
        -webkit-columns: 11;
        columns: 11;
    }
.no-csscolumns .row-masonry-lg-11 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-11:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-11 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 8%;
    }
.row-masonry-lg-12 {
        -moz-column-count: 12;
        -webkit-column-count: 12;
        column-count: 12;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 12;
        -webkit-columns: 12;
        columns: 12;
    }
.no-csscolumns .row-masonry-lg-12 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-lg-12:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-lg-12 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 7%;
    }
}
@media only screen and (min-width: 1200px) {
.row-masonry-xl-1 {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 1;
        -webkit-columns: 1;
        columns: 1;
    }
.no-csscolumns .row-masonry-xl-1 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-1:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-1 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 99%;
    }
.row-masonry-xl-2 {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 2;
        -webkit-columns: 2;
        columns: 2;
    }
.no-csscolumns .row-masonry-xl-2 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-2:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-2 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 49%;
    }
.row-masonry-xl-3 {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 3;
        -webkit-columns: 3;
        columns: 3;
    }
.no-csscolumns .row-masonry-xl-3 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-3:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-3 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 32%;
    }
.row-masonry-xl-4 {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 4;
        -webkit-columns: 4;
        columns: 4;
    }
.no-csscolumns .row-masonry-xl-4 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-4:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-4 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 24%;
    }
.row-masonry-xl-5 {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 5;
        -webkit-columns: 5;
        columns: 5;
    }
.no-csscolumns .row-masonry-xl-5 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-5:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-5 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 19%;
    }
.row-masonry-xl-6 {
        -moz-column-count: 6;
        -webkit-column-count: 6;
        column-count: 6;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 6;
        -webkit-columns: 6;
        columns: 6;
    }
.no-csscolumns .row-masonry-xl-6 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-6:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-6 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 15%;
    }
.row-masonry-xl-7 {
        -moz-column-count: 7;
        -webkit-column-count: 7;
        column-count: 7;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 7;
        -webkit-columns: 7;
        columns: 7;
    }
.no-csscolumns .row-masonry-xl-7 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-7:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-7 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 13%;
    }
.row-masonry-xl-8 {
        -moz-column-count: 8;
        -webkit-column-count: 8;
        column-count: 8;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 8;
        -webkit-columns: 8;
        columns: 8;
    }
.no-csscolumns .row-masonry-xl-8 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-8:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-8 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 11%;
    }
.row-masonry-xl-9 {
        -moz-column-count: 9;
        -webkit-column-count: 9;
        column-count: 9;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 9;
        -webkit-columns: 9;
        columns: 9;
    }
.no-csscolumns .row-masonry-xl-9 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-9:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-9 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 10%;
    }
.row-masonry-xl-10 {
        -moz-column-count: 10;
        -webkit-column-count: 10;
        column-count: 10;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 10;
        -webkit-columns: 10;
        columns: 10;
    }
.no-csscolumns .row-masonry-xl-10 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-10:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-10 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 9%;
    }
.row-masonry-xl-11 {
        -moz-column-count: 11;
        -webkit-column-count: 11;
        column-count: 11;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 11;
        -webkit-columns: 11;
        columns: 11;
    }
.no-csscolumns .row-masonry-xl-11 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-11:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-11 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 8%;
    }
.row-masonry-xl-12 {
        -moz-column-count: 12;
        -webkit-column-count: 12;
        column-count: 12;
        -moz-column-gap: 15px;
        -webkit-column-gap: 15px;
        column-gap: 15px;
        -moz-columns: 12;
        -webkit-columns: 12;
        columns: 12;
    }
.no-csscolumns .row-masonry-xl-12 {
        text-align: justify;
    }
.no-csscolumns .row-masonry-xl-12:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
.no-csscolumns .row-masonry-xl-12 > .col-masonry {
        vertical-align: top;
        display: inline-block;
        width: 7%;
    }
}
/* ========================================================================
 Component: widget.less
 ========================================================================== */
.widget {
    margin-bottom: 20px;
    border: 0;
}
.widget.panel,
.widget .panel {
    overflow: hidden;
}
.widget .lateral-picture {
    position: relative;
    display: block;
    height: 240px;
    width: auto;
    overflow: hidden;
}
.widget .lateral-picture > img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
    width: auto;
}
/* ========================================================================
 Component: typeahead.less
 ========================================================================== */
.typeahead-ctrl .dropdown-menu {
    max-height: 300px;
    overflow: auto;
}
/*!
 * table-grid (http://mdo.github.io/table-grid)
 * Released under MIT, (c) 2014 Mark Otto
 */
/*
 * The Grid
 */
@media only screen and (min-width: 768px) {
    /* Add `.table-grid` for the table */
.table-grid {
        display: table;
        width: 100%;
        height: 100%;
        table-layout: fixed;
    }
    /* Add `.col` for the table cells, or columns */
.col {
        display: table-cell;
        vertical-align: top;
        height: 100%;
    }
.col.col-full-center {
        vertical-align: middle;
    }
    /* Set the widths */
.col-1 {
        width: 8.333333%;
    }
.col-2 {
        width: 16.666667%;
    }
.col-3 {
        width: 25%;
    }
.col-4 {
        width: 33.333333%;
    }
.col-5 {
        width: 41.666667%;
    }
.col-6 {
        width: 50%;
    }
.col-7 {
        width: 58.333333%;
    }
.col-8 {
        width: 66.666667%;
    }
.col-9 {
        width: 75%;
    }
.col-10 {
        width: 83.333333%;
    }
.col-11 {
        width: 91.666667%;
    }
.col-12 {
        width: 100%;
    }
.col-xxs {
        width: 60px;
    }
.col-xs {
        width: 90px;
    }
.col-sm {
        width: 150px;
    }
.col-sd {
        width: 200px;
    }
.col-md {
        width: 240px;
    }
.col-lg {
        width: 280px;
    }
.col-xl {
        width: 320px;
    }
.col-xxl {
        width: 360px;
    }
.col-wide {
        width: 100%;
    }
.col-auto {
        width: auto;
    }
    /* Padded columns */
.table-grid-padded {
        margin-left: -1rem;
        margin-right: -1rem;
    }
.table-grid-padded .table-grid {
        border-spacing: 1rem 0;
    }
}
@media only screen and (max-width: 991px) {
.table-grid-desktop.table-grid,
.table-grid-desktop .col {
        display: block;
        width: auto;
    }
}
/*
 * Vertically center grid content
 *
 * Requires content within the column to be inline or inline-block.
 */
.table-grid-align-middle .col {
    vertical-align: middle;
}
/* ========================================================================
 Component: todo.less
 ========================================================================== */
.todo .todo-item-list {
    position: relative;
}
.todo .todo-item {
    -webkit-transition: color 0.6s, background-color 0.3s;
    -o-transition: color 0.6s, background-color 0.3s;
    transition: color 0.6s, background-color 0.3s;
}
.todo .todo-item.ng-enter {
    -webkit-animation: fadeInLeft 1s;
    -o-animation: fadeInLeft 1s;
    animation: fadeInLeft 1s;
}
.todo .todo-item.ng-leave {
    position: absolute;
    left: 0;
    right: 0;
    -webkit-animation: fadeOutDown 0.7s;
    -o-animation: fadeOutDown 0.7s;
    animation: fadeOutDown 0.7s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.todo .todo-item .todo-edit {
    display: none;
    cursor: pointer;
}
.todo .todo-item:hover .todo-edit {
    display: inline;
}
.todo .todo-item.todo-complete .todo-edit {
    display: none;
}
.todo textarea {
    resize: none;
    max-width: 100%;
    min-width: 100%;
}
.todo .todo-complete {
    background: #edf1f2;
    opacity: .6;
    color: #232735;
}
.todo .todo-complete .todo-title {
    text-decoration: line-through;
}
.todo .panel-group > .panel {
    border: 1px;
    margin: 0;
}
.todo .panel-group > .panel .panel-body {
    border-bottom: 1px solid #edf1f2;
}
/**
 *   main wrapper for the editor
 *
 *  .ng-wig
 *
 */
.ng-wig {
    display: block;
    padding: 0;
    margin: 0;
}
.ng-wig,
.ng-wig .nw-editor {
    min-height: 250px;
}
/**
 *  styling for toolbar and its items
 *
 *  .nw-toolbar
 *    &__item
 *
 */
.nw-toolbar {
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    color: #6B7277;
    background: -webkit-linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%);
    background: -moz-linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%);
    background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
    border: 1px solid #CCCCCC;
    border-radius: 3px 3px 0 0;
}
.nw-toolbar__item {
    display: inline-block;
    vertical-align: top;
    border-right: 1px solid #DEDEDE;
}
.nw-toolbar label {
    line-height: 30px;
    display: inline-block;
    padding: 0 6px 0 3px;
}
.nw-toolbar input[type=checkbox] {
    vertical-align: -3px;
    margin-right: -1px;
}
/**
 *  styling for the editor part: source code (original textarea) and resulting div
 *
 *  .nw-editor
 *    &__src
 *    &__res
 *
 */
.nw-editor {
    display: block;
    border: 1px solid #e4eaec;
    border-radius: 0 0 3px 3px;
    margin-top: 15px;
}
.nw-editor__src {
    width: 100%;
    height: 100%;
    resize: none;
    border-color: #e4eaec;
}
.nw-editor__res {
    width: 100%;
    height: 100%;
}
.nw-editor__res body {
    color: #fff;
}
.ng-wig .btn-group .btn-default {
    color: #777;
}
/**
 *  styling & formatting of content inside contenteditable div
 *
 *  .nw-content
 *
 */
.nw-content {
    padding: 12px;
    margin: 0;
    font-family: sans;
    font-size: 14px;
    line-height: 24px;
    color: #616263;
}
.nw-content h1 {
    margin: 0 0 6px 0;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
}
.nw-content p {
    margin: 0 0 12px 0;
}
.nw-content ul {
    padding: 0;
    margin: 0 0 12px 24px;
    list-style: disc;
}
.nw-content ol {
    padding: 0;
    margin: 0 0 12px 24px;
    list-style: decimal;
}
.nw-content li {
    padding: 0;
    margin: 0;
}
.nw-content a {
    text-decoration: underline;
    color: #3fae98;
    /* green */
}
.nw-content a:hover {
    text-decoration: none;
}
.nw-content bold,
.nw-content strong {
    font-weight: 700;
}
.nw-content i,
.nw-content italic {
    font-style: italic;
}
.ngdialog.ngdialog-theme-default .ngdialog-content {
    background-color: #fff !important;
    border-radius: 4px !important;
    font-family: inherit !important;
    font-size: inherit !important;
    line-height: inherit !important;
}
/* ========================================================================
 Component: nestable.less
 ========================================================================== */
.dd {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    max-width: 600px;
    list-style: none;
    font-size: 13px;
    line-height: 20px;
}
.dd-list {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
}
.dd-list .dd-list {
    padding-left: 30px;
}
.dd-collapsed .dd-list {
    display: none;
}
.dd-item,
.dd-empty,
.dd-placeholder {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 20px;
    font-size: 13px;
    line-height: 20px;
}
.dd-handle {
    display: block;
    margin: 5px 0;
    padding: 10px 10px;
    text-decoration: none;
    border: 1px solid #ebebeb;
    background: #fff;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
.dd-handle:hover {
    background: #fff;
}
.dd-item > button {
    display: block;
    position: relative;
    cursor: pointer;
    float: left;
    width: 25px;
    height: 30px;
    margin: 5px 0;
    padding: 0;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    border: 0;
    background: transparent;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    font-weight: bold;
}
.dd-item > button:before {
    content: '+';
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    text-indent: 0;
}
.dd-item > button[data-action="collapse"]:before {
    content: '-';
}
.dd-placeholder,
.dd-empty {
    margin: 5px 0;
    padding: 0;
    min-height: 30px;
    background: #f2fbff;
    border: 1px dashed #b6bcbf;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.dd-empty {
    border: 1px dashed #bbb;
    min-height: 100px;
    background-color: #e5e5e5;
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
}
.dd-dragel {
    position: absolute;
    pointer-events: none;
    z-index: 9999;
}
.dd-dragel > .dd-item .dd-handle {
    margin-top: 0;
}
.dd-dragel .dd-handle {
    -webkit-box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);
}
/**
 * Nestable Extras
 */
.nestable-lists {
    display: block;
    clear: both;
    padding: 30px 0;
    width: 100%;
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
}
@media only screen and (min-width: 700px) {
.dd + .dd {
        margin-left: 2%;
    }
}
.dd-hover > .dd-handle {
    background: #2ea8e5 !important;
}
/**
 * Nestable Draggable Handles
 */
.dd3-content {
    display: block;
    margin: 5px 0;
    padding: 10px 10px 10px 50px;
    text-decoration: none;
    border: 1px solid #ebebeb;
    background: #fff;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
.dd-dragel > .dd3-item > .dd3-content {
    margin: 0;
}
.dd3-item > button {
    margin-left: 40px;
}
.dd3-handle {
    position: absolute;
    margin: 0;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 40px;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid #ebebeb;
    background: #fff;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.dd3-handle:before {
    content: '≡';
    display: block;
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    text-align: center;
    text-indent: 0;
    color: #ccc;
    font-size: 20px;
    font-weight: normal;
}
.dd3-handle:hover {
    background: #f7f7f7;
}
/* ========================================================================
 Component: carousel.less
 ========================================================================== */
.bgimage {
    text-align: right;
    color: white;
    background-size: cover;
    height: 100%;
    background-position: center center;
}
ul[rn-carousel] {
    height: 380px;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
}
.carousel5 li {
    width: 100%;
    height: 100%;
    font-size: 30px;
}
.carousel-demo {
    margin-top: 20px;
    display: block;
    text-align: center;
}
.carousel-demo-3d > ul[rn-carousel] {
    display: block !important;
    max-width: 50%;
    margin: 0 auto !important;
}
.carousel-demo-fullscreen {
    width: 100%;
    height: 100%;
}
.carousel-demo-fullscreen ul[rn-carousel] {
    width: 100%;
    height: 100%;
}
.carousel-demo ul[rn-carousel-transition="hexagon"] {
    margin-left: 100px;
}
.rn-carousel-indicator span {
    display: inline-block;
    text-indent: -999px;
    overflow: hidden;
    background-color: #3a3f51;
    border: 1px solid #232735;
    width: 10px;
    height: 10px;
    margin: 0 1px;
    border-radius: 500px;
}
.rn-carousel-indicator span.active {
    background-color: #dde6e9;
    border: 1px solid #becfd5;
}
.custom-indicator span {
    background-color: #1797be;
    border: 1px solid #1797be;
}
.custom-indicator span.active {
    background-color: #23b7e5;
    border: 1px solid #1797be;
}
/* ========================================================================
 Component: masonry-grid-deck.less
 ========================================================================== */
.photo {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    margin: 0 10px 10px 0;
    position: relative;
}
.photo .photo-loader {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-top: 40%;
    z-index: 1;
}
.photo img {
    position: relative;
    opacity: 0;
    z-index: 2;
}
.photo img.photoloaded {
    opacity: 1;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
}
.photo img.photoloaded + .photo-loader {
    display: none;
}
.photo .photo-index {
    background: rgba(58, 63, 81, 0.75);
    color: #fff;
    position: absolute;
    height: 100%;
    text-align: center;
    width: 100%;
    z-index: 99;
}
.photo .photo-index p:first-child {
    margin-top: 10px;
}
.photo .photo-wrapper {
    min-height: 100px;
}
.photo .photo-description {
    padding: 15px;
}
.balloon-wrapper {
    padding-top: 30px;
    opacity: 1;
    text-align: center;
}
.balloon {
    background: #5d9cec;
    border-radius: 50%;
    display: inline-block;
    font-size: 160%;
    text-align: center;
    height: 100px;
    line-height: 100px;
    width: 100px;
}
.deckgrid {
    margin: 0 auto;
    padding: 10px;
    max-width: 100%;
}
.deckgrid .column {
    float: left;
}
.deckgrid .column.size-1-5 {
    width: 20%;
}
.deckgrid .column.size-1-4 {
    width: 25%;
}
.deckgrid .column.size-1-3 {
    width: 33.3333%;
}
.deckgrid .column.size-1-2 {
    width: 50%;
}
.deckgrid .column.size-1-1 {
    width: 100%;
}
.deckgrid[deckgrid]::before {
    content: '1 .column.size-1-1';
    font-size: 0;
    visibility: hidden;
}
@media only screen and (min-width: 480px) {
.deckgrid[deckgrid]::before {
        content: '2 .column.size-1-2';
    }
}
@media only screen and (min-width: 768px) {
.deckgrid[deckgrid]::before {
        content: '3 .column.size-1-3';
    }
}
@media only screen and (min-width: 992px) {
.deckgrid[deckgrid]::before {
        content: '4 .column.size-1-4';
    }
}
@media only screen and (min-width: 1200px) {
.deckgrid[deckgrid]::before {
        content: '5 .column.size-1-5';
    }
}
/* ========================================================================
 Component: chart-flot.less
 ========================================================================== */
flot {
    display: block;
    width: 100%;
}
flot .legend > table tr td {
    padding: 3px;
}
flot .legend > table tr td:first-child {
    padding-left: 3px;
}
flot .legend > table tr td:last-child {
    padding-right: 3px;
}
flot .legend > table tr + tr td {
    padding-top: 0;
}
flot .legend > div:first-child {
    border-color: rgba(0, 0, 0, 0.1) !important;
}
flot .legend .legendColorBox > div,
flot .legend .legendColorBox > div > div {
    border-radius: 400px;
}
.flot-chart-content {
    width: 100%;
    height: 100%;
}
.flot-pie-label {
    padding: 3px 5px;
    font-size: 10px;
    text-align: center;
    color: #fff;
}
#flotTip {
    position: relative;
    padding: 5px;
    font-size: 12px !important;
    border-radius: 2px !important;
    border-color: transparent !important;
    background-color: rgba(0, 0, 0, 0.75) !important;
    color: #f1f1f1;
    z-index: 5;
}
/* ========================================================================
 Component: chart-easypie.less
 ========================================================================== */
.easypie-chart {
    display: inline-block;
    position: relative;
    padding: 0 6px;
}
.easypie-chart span {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    margin-left: -50%;
    height: 30px;
    margin-top: -15px;
    font-size: 20px;
}
.easypie-chart canvas {
    max-width: 100%;
}
/* ========================================================================
 Component: form-elements.less
 ========================================================================== */
/**
 * Custom form elements
 *    - Checkbox
 *    - Radios
 *    - Switch
 *    - Rounded inputs
 */
.c-checkbox,
.c-radio {
    margin-right: 4px;
}
.c-checkbox *,
.c-radio * {
    cursor: pointer;
}
.c-checkbox input,
.c-radio input {
    opacity: 0;
    position: absolute;
    margin-left: 0 !important;
}
.c-checkbox span,
.c-radio span {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-left: -20px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid #ccc;
    margin-right: 5px;
    text-align: center;
}
.c-checkbox span:before,
.c-radio span:before {
    margin-left: 0;
}
.c-checkbox:hover span,
.c-radio:hover span {
    border-color: #5d9cec;
}
.form-inline .c-checkbox span,
.form-inline .c-radio span {
    margin-left: 0;
}
.c-checkbox.c-checkbox-rounded span,
.c-radio.c-checkbox-rounded span,
.c-checkbox.c-radio-rounded span,
.c-radio.c-radio-rounded span {
    border-radius: 500px;
}
/* override for radio */
.c-radio span {
    border-radius: 500px;
}
/* the icon */
.c-checkbox span:before,
.c-radio span:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    text-align: center !important;
    font-size: 12px;
    line-height: 18px;
    vertical-align: middle;
}
/* Checked state */
.c-checkbox,
.c-radio {
    /* override for radio */
    /* Disable state */
    /* override for radio */
}
.c-checkbox input[type=checkbox]:checked + span:before,
.c-radio input[type=checkbox]:checked + span:before,
.c-checkbox input[type=radio]:checked + span:before,
.c-radio input[type=radio]:checked + span:before {
    color: #fff;
    opacity: 1;
    transition: color 0.3s ease-out;
}
.c-checkbox input[type=checkbox]:checked + span,
.c-radio input[type=checkbox]:checked + span,
.c-checkbox input[type=radio]:checked + span,
.c-radio input[type=radio]:checked + span {
    border-color: #5d9cec;
    background-color: #5d9cec;
}
.c-checkbox input[type=radio]:checked + span,
.c-radio input[type=radio]:checked + span {
    background-color: #fff;
}
.c-checkbox input[type=radio]:checked + span:before,
.c-radio input[type=radio]:checked + span:before {
    color: #5d9cec;
}
.c-checkbox input[type=checkbox]:disabled + span,
.c-radio input[type=checkbox]:disabled + span,
.c-checkbox input[type=radio]:disabled + span,
.c-radio input[type=radio]:disabled + span {
    border-color: #dddddd !important;
    background-color: #dddddd !important;
}
.c-checkbox input[type=radio]:disabled + span,
.c-radio input[type=radio]:disabled + span {
    background-color: #fff !important;
}
.c-checkbox input[type=radio]:disabled + span:before,
.c-radio input[type=radio]:disabled + span:before {
    color: #dddddd;
}
.c-radio.c-radio-nofont {
    /* override for radio */
    /* Disable state */
    /* override for radio */
}
.c-radio.c-radio-nofont span:before {
    content: "";
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    border-radius: 500px;
}
.c-radio.c-radio-nofont input[type=radio]:checked + span:before {
    color: #fff;
    opacity: 1;
    transition: color 0.3s ease-out;
}
.c-radio.c-radio-nofont input[type=radio]:checked + span {
    border-color: #5d9cec;
    background-color: #5d9cec;
}
.c-radio.c-radio-nofont input[type=radio]:checked + span {
    background-color: #fff;
}
.c-radio.c-radio-nofont input[type=radio]:checked + span:before {
    background-color: #5d9cec;
}
.c-radio.c-radio-nofont input[type=radio]:disabled + span {
    border-color: #dddddd !important;
    background-color: #dddddd !important;
}
.c-radio.c-radio-nofont input[type=radio]:disabled + span {
    background-color: #fff !important;
}
.c-radio.c-radio-nofont input[type=radio]:disabled + span:before {
    background-color: #dddddd;
}
.form-control-rounded {
    border-radius: 100px;
}
.switch .form-control {
    padding-top: 7px;
    margin-bottom: 0;
}
.switch * {
    cursor: pointer;
}
.switch input {
    opacity: 0;
    position: absolute;
    z-index: -1;
}
.switch span {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 100px;
    transition: all .5s;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1) inset;
    vertical-align: middle;
}
.switch span:after {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid #ddd;
    border-radius: 400px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-transition: all .2s;
}
.switch.switch-lg span {
    width: 50px;
    height: 25px;
}
.switch.switch-lg span:after {
    height: 23px;
    width: 23px;
}
.switch.switch-sm span {
    width: 30px;
    height: 15px;
}
.switch.switch-sm span:after {
    height: 13px;
    width: 13px;
}
.switch input:checked + span {
    background-color: #5d9cec;
    border-color: #5d9cec;
    transition: all .5s;
}
.switch input:checked + span:after {
    left: 50%;
    transition: all .2s;
}
.form-control-feedback {
    left: 16px;
    right: auto;
}
.form-control + .form-control-feedback,
.form-control + .parsley-errors-list + .form-control-feedback {
    right: 0;
    left: auto;
    top: 10px;
}
.input-sm + .form-control-feedback,
.input-sm + .parsley-errors-list + .form-control-feedback {
    top: 0;
}
label + .form-control + .form-control-feedback,
label + .form-control + .parsley-errors-list + .form-control-feedback {
    top: 36px;
}
.input-md {
    width: 260px;
}
.note-editor {
    background-image: -webkit-linear-gradient(#eeeeee 0.1em, transparent 0.1em);
    background-image: linear-gradient(#eeeeee 0.1em, transparent 0.1em);
    background-size: 100% 20px;
    background-color: #fff;
    line-height: 20px;
    margin-top: 5px;
    padding: 0;
    padding-bottom: 1px;
    border: none;
}
.note-editor.note-editor-margin {
    background-image: -webkit-linear-gradient(0deg, transparent 49px, #ffe0c4 49px, #ffe0c4 51px, transparent 51px), -webkit-linear-gradient(#eeeeee 0.1em, transparent 0.1em);
    background-image: linear-gradient(90deg, transparent 49px, #ffe0c4 49px, #ffe0c4 51px, transparent 51px), linear-gradient(#eeeeee 0.1em, transparent 0.1em);
    padding-left: 55px;
}
/* ========================================================================
 Component: form-imgcrop.less
 ========================================================================== */
.imgcrop-area {
    width: 100%;
    height: 410px;
    overflow: hidden;
    background: #dde6e9;
}
.imgcrop-preview {
    position: relative;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    background: #dde6e9;
    text-align: center;
}
.imgcrop-preview:after {
    content: attr(data-text);
    display: block;
    position: absolute;
    height: 50%;
    text-align: center;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    color: #909fa7;
}
.imgcrop-preview > img {
    position: relative;
    z-index: 1;
    max-width: 100%;
}
/* ========================================================================
 Component: form-validation.less
 ========================================================================== */
.form-validate .form-control.ng-dirty.ng-invalid {
    border-color: #f05050;
}
.form-validate .form-control.ng-dirty.ng-valid,
.form-validate .form-control.ng-dirty.ng-valid:focus {
    border-color: #27c24c;
}
.form-validate .has-error .form-control {
    border-color: #f05050 !important;
}
.form-validate .c-checkbox input.ng-dirty.ng-invalid + span,
.form-validate .c-radio input.ng-dirty.ng-invalid + span {
    border-color: #f05050;
}
.form-validate .ui-select-container.ng-dirty.ng-invalid .btn {
    border-color: #f05050;
}
.form-validate .input-group .ui-select-container.ng-dirty.ng-invalid .btn {
    margin-left: -1px;
}
.form-validate .chosen-select.ng-dirty.ng-invalid + .chosen-container > .chosen-choices {
    border-color: #f05050;
}
.form-validate .chosen-select.ng-dirty.ng-valid + .chosen-container > .chosen-choices,
.form-validate .chosen-select.ng-dirty.ng-valid:focus + .chosen-container > .chosen-choices {
    border-color: #27c24c;
}
.form-validate .form-control.ng-dirty.ng-invalid + .bootstrap-tagsinput {
    border-color: #f05050;
}
.form-validate .form-control.ng-dirty.ng-valid + .bootstrap-tagsinput,
.form-validate .form-control.ng-dirty.ng-valid:focus + .bootstrap-tagsinput {
    border-color: #27c24c;
}
.parsley-error {
    border-color: #f05050 !important;
}
.parsley-errors-list {
    display: none;
    margin: 0;
    padding: 0;
}
.parsley-errors-list.filled {
    display: block;
}
.parsley-errors-list > li {
    font-size: 12px;
    list-style: none;
    color: #f05050;
}
/* ========================================================================
 Component: form-tags.less
 ========================================================================== */
body .bootstrap-tagsinput {
    box-shadow: 0 0 0 #000 !important;
    display: block;
    width: 100%;
    height: 35px;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 1.52857143;
    color: #3a3f51;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #dde6e9;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    height: auto;
    min-height: 35px;
    margin-bottom: 0;
}
body .bootstrap-tagsinput:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
body .bootstrap-tagsinput::-moz-placeholder {
    color: #b7bac9;
    opacity: 1;
}
body .bootstrap-tagsinput:-ms-input-placeholder {
    color: #b7bac9;
}
body .bootstrap-tagsinput::-webkit-input-placeholder {
    color: #b7bac9;
}
body .bootstrap-tagsinput[disabled],
body .bootstrap-tagsinput[readonly],
    fieldset[disabled] body .bootstrap-tagsinput {
    cursor: not-allowed;
    background-color: #edf1f2;
    opacity: 1;
}
textareabody .bootstrap-tagsinput {
    height: auto;
}
body .bootstrap-tagsinput .tag {
    color: #fff;
}
/* ========================================================================
 Component: form-wizard.less
 ========================================================================== */
.form-wizard > ol {
    list-style-type: none;
    padding: 0 15px;
}
.form-wizard > ol > li {
    min-height: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #fcfcfc;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.form-wizard > ol > li > a {
    text-decoration: none;
}
.form-wizard > ol > li .label {
    background-color: #5d9cec;
    vertical-align: super;
    margin-right: 6px;
}
.form-wizard > ol > li .label[href]:hover,
.form-wizard > ol > li .label[href]:focus {
    background-color: #2f80e7;
}
.form-wizard > ol > li h4 {
    display: inline-block;
    color: #515253;
}
.form-wizard > ol > li small {
    display: block;
    color: #909fa7;
}
.form-wizard > ol > li.active {
    background-color: #5d9cec;
}
.form-wizard > ol > li.active h4,
.form-wizard > ol > li.active small {
    color: #fff;
}
.form-wizard > ol > li.active .label {
    background-color: #fff;
    border-color: #fff;
    color: #5d9cec;
}
.form-wizard .bwizard-buttons {
    margin: 0;
}
.form-wizard .well {
    border: 0;
    margin: 0;
    padding: 0;
    box-shadow: 0 0 0 #000;
}
.form-wizard .well fieldset {
    margin: 0;
}
@media only screen and (min-width: 992px) {
.form-wizard.wizard-horizontal > ol > li {
        display: inline-block;
    }
}
.form-wizard.wizard-vertical:before,
.form-wizard.wizard-vertical:after {
    content: " ";
    display: table;
}
.form-wizard.wizard-vertical:after {
    clear: both;
}
.form-wizard.wizard-vertical > ol {
    float: left;
    width: 39%;
    padding: 0;
}
.form-wizard.wizard-vertical > ol > li {
    display: block;
    padding: 10px;
}
.form-wizard.wizard-vertical > ol > li h4 {
    font-size: 14px;
}
.form-wizard.wizard-vertical > div {
    float: right;
    width: 59%;
}
.form-wizard.wizard-vertical .pager {
    clear: both;
    padding-top: 10px;
}
.form-wizard.wizard-vertical .well {
    padding: 0;
}
/* ========================================================================
 Component: uiselect.less
 ========================================================================== */
.ui-select-bootstrap > .ui-select-match {
    text-align: left;
}
.ui-select-toggle {
    font-size: 14px;
}
.btn-default-focus {
    box-shadow: 0 0 0 #000 !important;
    outline: 0 !important;
}
/* ========================================================================
 Component: code-editor.less
 ========================================================================== */
.code-container {
    margin: 0;
    padding: 0;
    background-color: #fff;
}
.code-files {
    border-right: 1px solid #dde6e9;
    background-color: #edf1f2;
}
.code-files .nav.nav-pills {
    padding: 10px;
    overflow: hidden;
}
.code-files .nav.nav-pills > li > a {
    color: #3a3f51;
}
.code-files .nav.nav-pills > li > a:hover {
    background-color: #e4eaec;
}
.code-files .nav.nav-pills > li.active > a {
    background-color: #23b7e5;
    color: #ffffff;
}
.code-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    margin: 0;
    border-bottom: 1px solid #dde6e9;
    background: #ffffff;
    z-index: 5;
}
.code-editor {
    position: relative;
    padding-top: 50px;
}
@media only screen and (min-width: 480px) {
.code-editor .CodeMirror {
        max-height: 100%;
        min-height: 180px;
        height: 100%;
    }
}
.code-editor .CodeMirror .CodeMirror-scroll {
    height: 100%;
}
.code-editor .CodeMirror .CodeMirror-gutters {
    min-height: 100%;
}
/* ========================================================================
 Component: datatable.less
 ========================================================================== */
.dataTables_filter input {
    margin-left: 10px;
}
.dataTables_length select {
    margin-right: 10px;
}
table.dataTable tfoot > tr > th {
    color: #a1a2a3;
    background: #f1f2f3;
}
.panel .dataTables_wrapper .row {
    margin: 10px 0;
}
.panel .dataTable {
    width: 100% !important;
}
.ColVis button.ColVis_Button {
    border-radius: 3px;
    font-size: 13px;
    border-color: transparent;
    -webkit-appearance: none;
    outline: none !important;
    -webkit-transition: all 0.1s;
    -o-transition: all 0.1s;
    transition: all 0.1s;
    border-color: #eaeaea;
    background-image: none;
    box-shadow: 0 0 0 #000;
    cursor: pointer;
    height: 31px;
}
.ColVis button.ColVis_Button.btn-link {
    box-shadow: none;
    border: 0;
}
.ColVis button.ColVis_Button.btn-default {
    border-color: #eaeaea;
}
.input-group .ColVis button.ColVis_Button {
    font-size: 14px;
    border-color: #dde6e9;
}
.input-group .input-sm + .input-group-btn .ColVis button.ColVis_Button {
    font-size: 13px;
}
.ColVis button.ColVis_Button > span {
    color: #656565;
}
.ColVis_collectionBackground {
    display: none;
}
ul.ColVis_collection {
    background-color: #fff !important;
}
ul.ColVis_collection > li {
    border: 0 !important;
    background-image: none !important;
    box-shadow: 0 0 0 #000 !important;
    margin: 0;
}
ul.ColVis_collection > li > label {
    margin: 0;
}
ul.ColVis_collection > li > label > span {
    color: #888;
    vertical-align: top;
    font-weight: normal;
}
ul.ColVis_collection > li > label > span:hover {
    color: #555;
}
ul.ColVis_collection > li > label input[type=checkbox]:checked + span,
ul.ColVis_collection > li > label input[type=radio]:checked + span {
    background-color: transparent;
}
.ColVis_catcher {
    cursor: pointer;
}
table.dataTable {
    border-bottom: 1px solid #e4eaec !important;
}
table.dataTable thead th,
    table.dataTable thead td {
    border-bottom: 1px solid #e4eaec !important;
}
.dataTables_wrapper .dataTables_filter input,
.dataTables_wrapper select {
    box-shadow: none;
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #3a3f51;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #dde6e9;
    border-radius: 4px;
}
.dataTables_wrapper .dataTables_paginate .paginate_button {
    background-image: none !important;
    background-color: #edf1f2 !important;
    border: 0 !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    background-color: #fff !important;
}
body .dataTable:before,
    body .dataTable:after {
    content: " ";
    display: table;
}
body .dataTable:after {
    clear: both;
}
body .dataTables_wrapper .dataTables_paginate .paginate_button {
    background-color: #fff !important;
    border: 1px solid #e4eaec !important;
    margin-left: 0;
    padding: 6px 16px;
}
body .dataTables_wrapper .dataTables_paginate .paginate_button.previous {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
body .dataTables_wrapper .dataTables_paginate .paginate_button.next {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
body .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    color: #5d9cec !important;
}
body .dataTables_wrapper .dataTables_paginate .paginate_button.current,
    body .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
    background-color: #5d9cec !important;
    color: #fff !important;
    border-color: #5d9cec !important;
}
body table.dataTable.row-border tbody th,
    body table.dataTable.row-border tbody td,
    body table.dataTable.display tbody th,
    body table.dataTable.display tbody td {
    border-top-color: #eee;
}
body table.dataTable tbody tr:nth-child(odd),
    body table.dataTable.hover tbody tr:hover,
    body table.dataTable.display tbody tr:hover {
    background-color: #fafbfc;
}
body table.dataTable thead th,
    body .dataTables_wrapper .dataTables_length,
    body .dataTables_wrapper .dataTables_filter,
    body .dataTables_wrapper .dataTables_info,
    body .dataTables_wrapper .dataTables_processing,
    body .dataTables_wrapper .dataTables_paginate {
    color: #888;
}
/* ========================================================================
 Component: table-extras.less
 ========================================================================== */
.table > thead > tr > th {
    padding: 14px 8px;
    color: #888;
}
.table > tbody > tr > td {
    vertical-align: middle;
}
.table > tbody > tr > td > .media img {
    width: 36px;
    height: 36px;
    margin: 0 auto;
}
.table .checkbox {
    margin: 0 auto;
    width: 20px;
}
.table .progress {
    margin-bottom: 0;
}
.table .radial-bar {
    margin-bottom: 0;
    margin: 0 auto;
}
.jqstooltip {
    box-sizing: content-box;
}
#table-ext-1 th:nth-child(1) {
    width: 3%;
}
#table-ext-1 th:nth-child(2) {
    width: 5%;
}
#table-ext-1 th:nth-child(7) {
    width: 5%;
}
#table-ext-1 th:nth-child(9) {
    width: 5%;
}
#table-ext-2 th:nth-child(1) {
    width: 5%;
}
#table-ext-2 th:nth-child(3) {
    width: 10%;
}
/* ========================================================================
 Component: table-ngtable.less
 ========================================================================== */
body .ng-table th.sortable.sort-desc,
body .ng-table th.sortable.sort-asc {
    background-color: #fff;
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
}
body .ng-table th.sortable div:after,
body .ng-table th.sortable div:before {
    border-color: #3a3f51 transparent;
}
body .ng-table th.sortable div:before {
    border-top-color: #3a3f51;
}
body .ng-table th.sortable.sort-desc div:after {
    border-top-color: #3a3f51;
}
body [ng-table-pagination] {
    padding: 15px 5px;
}
body [ng-table-pagination] .ng-table-pagination {
    margin: 0;
}
body .ng-table .plus,
body .ng-table .minus {
    font-weight: bold;
    padding-left: 18px;
    position: relative;
}
body .ng-table .plus:before,
body .ng-table .minus:before {
    content: "";
    border-width: 4px;
    border-style: solid;
    left: 8px;
    top: 50%;
    position: absolute;
    margin-top: -2px;
}
body .ng-table .plus {
    color: green;
}
body .ng-table .plus:before {
    border-color: green;
    border-top: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
}
body .ng-table .minus {
    color: red;
}
body .ng-table .minus:before {
    border-color: red;
    border-bottom: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
}
body .ng-table-rowselected tr {
    cursor: pointer;
}
body .ng-table-pager:before,
body .ng-table-pager:after {
    content: " ";
    display: table;
}
body .ng-table-pager:after {
    clear: both;
}
/* ========================================================================
 Component: table-ng-grid.less
 ========================================================================== */
.ngGrid {
    min-height: 480px;
    background-color: transparent;
}
.ngGrid .ngVerticalBarVisible {
    background-color: #e4eaec;
}
.ngGrid .ngTopPanel {
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
}
.ngGrid .ngTopPanel .ngHeaderContainer {
    border-bottom: 1px solid #e4eaec;
}
.ngGrid .ngGroupPanel {
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
}
.ngGrid .ngGroupName {
    background-color: #fff;
    border: 1px solid #e4eaec;
}
.ngGrid .ngRow {
    position: absolute;
    border-top: 1px solid #e4eaec;
}
.ngGrid .ngRow.odd {
    background-color: #edf1f2;
}
.ngGrid .ngRow.even {
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
}
.ngGrid .ngRow.selected {
    background-color: #e4eaec;
}
.ngGrid .ngFooterPanel {
    padding: 0 5px;
    background-color: #fff;
    border-top: 1px solid #e4eaec;
}
.ngGrid .ngPagerFirstBar {
    border-left: 2px solid #3a3f51;
}
.ngGrid .ngPagerFirstTriangle {
    border-color: transparent #3a3f51 transparent transparent;
}
.ngGrid .ngPagerLastTriangle {
    border-color: transparent transparent transparent #3a3f51;
}
.ngGrid .ngPagerLastBar {
    border-left: 2px solid #3a3f51;
}
.ngGrid .ngPagerButton {
    background-color: #fff;
    border: 1px solid #e4eaec;
}
.ngGrid .ngHeaderText,
.ngGrid .ngCellText {
    padding: 8px 15px;
}
.ngGrid .ngFooterSelectedItems {
    padding-top: 0;
    margin-top: -4px;
}
.ngGrid .ngGridMaxPagesNumber {
    position: relative;
    top: -6px;
}
.ngGrid .ngViewport {
    overflow-x: hidden;
}
.ngGrid .ngSortButtonUp,
.ngGrid .ngSortButtonDown {
    top: 14px;
}
.ngGrid .ngLabel {
    margin-right: 10px;
}
.ngGrid input,
.ngGrid select {
    border: 1px solid #e4eaec;
}
.ngGrid input {
    line-height: 18px;
}
/* ========================================================================
 Component: uigrid.less
 ========================================================================== */
.table-uigrid.ui-grid {
    border-top-width: 3px;
}
.table-uigrid.ui-grid,
.table-uigrid.ui-grid .ui-grid-header,
.table-uigrid.ui-grid .ui-grid-footer-panel,
.table-uigrid.ui-grid .ui-grid-cell,
.table-uigrid.ui-grid input[type="text"].ui-grid-filter-input {
    border-color: #dde6e9;
}
.table-uigrid.ui-grid .ui-grid-filter-input {
    padding: 2px 4px;
}
.table-uigrid.ui-grid .ui-grid-row:nth-child(even) .ui-grid-cell {
    background-color: #edf1f2;
    border-bottom: 1px solid #e4eaec;
    border-top: 1px solid #e4eaec;
}
.table-uigrid.ui-grid .ui-grid-header-cell:not(:last-child) .ui-grid-vertical-bar {
    background-color: #dde6e9;
}
.table-uigrid.ui-grid .ui-grid-top-panel,
.table-uigrid.ui-grid .ui-grid-footer-panel {
    background-color: #fff;
    background-image: none;
}
.table-uigrid.ui-grid .ui-grid-cell,
.table-uigrid.ui-grid .ui-grid-row {
    min-height: 36px;
}
.table-uigrid.ui-grid .ui-grid-cell-contents {
    padding: 8px 15px;
}
.table-uigrid.ui-grid .ui-grid-column-menu-button {
    top: 5px;
}
.table-uigrid.ui-grid .ui-grid-viewport {
    overflow-x: hidden !important;
}
.table-uigrid.ui-grid .ui-grid-pager-panel {
    padding-top: 8px;
    padding-bottom: 5px;
}
.table-uigrid.ui-grid .ui-grid-pager-control button {
    background-color: #fff;
    border: 1px solid #edf1f2;
}
.table-uigrid.ui-grid .ui-grid-pager-control input,
.table-uigrid.ui-grid .ui-grid-pager-row-count-picker select {
    color: #3a3f51;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #dde6e9;
    border-radius: 4px;
    padding: 2px;
}
#uigrid-demo {
    width: 100%;
    min-height: 380px;
}
/* ========================================================================
 Component: table-angulargrid.less
 ========================================================================== */
.ag-angle .ag-root {
    border: 1px solid #e4eaec;
}
.ag-angle .ag-cell {
    padding: 4px 15px;
}
.ag-angle .ag-cell-focus {
    border: 1px solid #becfd5;
}
.ag-angle .ag-cell-no-focus {
    border-right: 1px dotted #e4eaec;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
}
.ag-angle .ag-pinned-header {
    border-bottom: 1px solid #e4eaec;
}
.ag-angle .ag-header-container {
    border-bottom: 1px solid #e4eaec;
}
.ag-angle .ag-header {
    border-top: 2px solid #e4eaec;
    height: auto !important;
}
.ag-angle .ag-header-cell {
    border-right: 1px solid #e4eaec;
}
.ag-angle .ag-header-group-cell {
    border-right: 1px solid #e4eaec;
}
.ag-angle .ag-header-group-cell-with-group {
    border-bottom: 1px solid #e4eaec;
}
.ag-angle .ag-header-cell-label {
    padding: 8px 15px;
}
.ag-angle .ag-header-cell-text {
    padding-left: 2px;
}
.ag-angle .ag-header-group-cell-label {
    padding: 4px;
    font-weight: bold;
}
.ag-angle .ag-header-group-text {
    margin-right: 2px;
}
.ag-angle .ag-header-cell-menu-button {
    padding: 2px;
    margin-top: 6px;
    border-radius: 2px;
    cursor: pointer;
}
.ag-angle .ag-header-cell-menu-button .ag-header-icon {
    color: #edf1f2;
}
.ag-angle .ag-header-cell-menu-button:hover .ag-header-icon {
    color: #dde6e9;
}
.ag-angle .ag-header-icon {
    color: #800000;
}
.ag-angle .ag-dark .ag-header-expand-icon:hover {
    cursor: pointer;
}
.ag-angle .ag-row-odd {
    background-color: #edf1f2;
}
.ag-angle .ag-row-even {
    background-color: #fff;
}
.ag-angle .ag-loading-panel {
    background-color: rgba(255, 255, 255, 0.5);
}
.ag-angle .ag-loading-center {
    background-color: #fff;
    border: 1px solid #e4eaec;
    border-radius: 4px;
    padding: 10px;
}
.ag-angle .ag-body {
    padding-top: 40px !important;
    background-color: #fff;
}
.ag-angle .ag-row-selected {
    background-color: #b0e0e6;
}
.ag-angle .ag-group-cell-entire-row {
    background-color: #aaa;
    padding: 4px;
}
.ag-angle .ag-footer-cell-entire-row {
    background-color: #aaa;
    padding: 4px;
}
.ag-angle .ag-group-cell {
    font-style: italic;
}
.ag-angle .ag-footer-cell {
    font-style: italic;
}
.ag-angle .ag-filter-checkbox {
    position: relative;
    top: 2px;
    left: 2px;
}
.ag-angle .ag-filter-header-container {
    border-bottom: 1px solid #dde6e9;
}
.ag-angle .ag-filter {
    border: 1px solid #e4eaec;
    background-color: #fff;
}
.ag-angle .ag-filter input[type="text"],
.ag-angle .ag-filter select {
    width: 95%;
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #3a3f51;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #dde6e9;
    border-radius: 4px;
}
.ag-angle .ag-filter input[type="text"]:focus,
.ag-angle .ag-filter select:focus {
    border-color: #5d9cec;
}
.ag-angle .ag-selection-checkbox {
    margin-left: 4px;
}
.ag-angle .ag-paging-panel {
    padding: 4px;
}
.ag-angle .ag-paging-button {
    margin-left: 4px;
    margin-right: 4px;
}
.ag-angle .ag-paging-row-summary-panel {
    display: inline-block;
    width: 300px;
}
/* ========================================================================
 Component: plugins.less
 - User this stylesheet to include single css styles and fixes
 for plugins
 ========================================================================== */
/**
 * Bootstrap Slider
 */
.bs-slider {
    display: inline-block;
}
.bs-slider .slider-handle,
.bs-slider .slider-track,
.bs-slider .slider-selection {
    background-image: none;
    box-shadow: 0 0 0 #000;
}
.bs-slider .slider-handle {
    background-color: #fff;
    border: 1px solid #5d9cec;
    opacity: 1;
}
.bs-slider .slider-track {
    background-color: #fff;
    border: 1px solid #5d9cec;
}
.bs-slider .slider-selection {
    background-color: #5d9cec;
}
.bs-slider .slider .tooltip.top .tooltip-arrow {
    border-top-color: #2c3037;
}
.bs-slider .slider .tooltip.right .tooltip-arrow {
    border-right-color: #2c3037;
}
.bs-slider .slider .tooltip-inner {
    background-color: #2c3037;
}
.bs-slider .slider-lg {
    width: 380px;
}
body {
    /**
     * Chosen
     */
    /* Support for input groups */
    /**
     * Filestyle
     */
}
body .chosen-container {
    max-width: 100%;
}
body .chosen-container-multi .chosen-choices {
    box-shadow: 0 0 0 #000 !important;
    display: block;
    width: 100%;
    height: 35px;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 1.52857143;
    color: #3a3f51;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #dde6e9;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
body .chosen-container-multi .chosen-choices:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
body .chosen-container-multi .chosen-choices::-moz-placeholder {
    color: #b7bac9;
    opacity: 1;
}
body .chosen-container-multi .chosen-choices:-ms-input-placeholder {
    color: #b7bac9;
}
body .chosen-container-multi .chosen-choices::-webkit-input-placeholder {
    color: #b7bac9;
}
body .chosen-container-multi .chosen-choices[disabled],
body .chosen-container-multi .chosen-choices[readonly],
    fieldset[disabled] body .chosen-container-multi .chosen-choices {
    cursor: not-allowed;
    background-color: #edf1f2;
    opacity: 1;
}
textareabody .chosen-container-multi .chosen-choices {
    height: auto;
}
body .chosen-container-multi .chosen-choices li.search-field input[type=text] {
    height: auto;
    padding: 0;
}
body .chosen-container-multi .chosen-choices li.search-choice {
    margin: 0 5px 3px 0;
    background-color: #f5f6f7;
    border: 1px solid #e7e9ec;
    background-image: none;
}
body .chosen-container .chosen-results li.highlighted {
    background-color: #a1a2a3;
    background-image: none;
}
body .chosen-container .chosen-drop {
    border-color: #ddd;
}
body .chosen-container .chosen-results li.group-result {
    color: #747576;
    letter-spacing: 0.02em;
}
body .chosen-container-single .chosen-single,
body .chosen-container-active.chosen-with-drop .chosen-single {
    box-shadow: 0 0 0 #000 !important;
    display: block;
    width: 100%;
    height: 35px;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 1.52857143;
    color: #3a3f51;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #dde6e9;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
body .chosen-container-single .chosen-single:focus,
body .chosen-container-active.chosen-with-drop .chosen-single:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
body .chosen-container-single .chosen-single::-moz-placeholder,
body .chosen-container-active.chosen-with-drop .chosen-single::-moz-placeholder {
    color: #b7bac9;
    opacity: 1;
}
body .chosen-container-single .chosen-single:-ms-input-placeholder,
body .chosen-container-active.chosen-with-drop .chosen-single:-ms-input-placeholder {
    color: #b7bac9;
}
body .chosen-container-single .chosen-single::-webkit-input-placeholder,
body .chosen-container-active.chosen-with-drop .chosen-single::-webkit-input-placeholder {
    color: #b7bac9;
}
body .chosen-container-single .chosen-single[disabled],
body .chosen-container-active.chosen-with-drop .chosen-single[disabled],
body .chosen-container-single .chosen-single[readonly],
body .chosen-container-active.chosen-with-drop .chosen-single[readonly],
    fieldset[disabled] body .chosen-container-single .chosen-single,
    fieldset[disabled] body .chosen-container-active.chosen-with-drop .chosen-single {
    cursor: not-allowed;
    background-color: #edf1f2;
    opacity: 1;
}
textareabody .chosen-container-single .chosen-single,
textareabody .chosen-container-active.chosen-with-drop .chosen-single {
    height: auto;
}
body .chosen-container-single .chosen-drop {
    margin-top: -3px;
}
body .chosen-container-single .chosen-single div {
    top: 6px;
    right: 5px;
}
body .chosen-container-multi .chosen-choices li.search-field input[type=text] {
    color: #b7bac9;
}
body .input-group .chosen-container:last-child > a {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
body .input-group select:first-child + .chosen-container > a {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
body [classyloader] {
    max-width: 100%;
}
body .ui-select-bootstrap .ui-select-toggle {
    text-align: left;
}
/* ========================================================================
 Component: slim-scroll.less
 ========================================================================== */
scrollable {
    display: block;
}
.slimScrollBar {
    opacity: 1 !important;
    background-color: rgba(0, 0, 0, 0.35) !important;
    border: 0 !important;
    border-radius: 1px !important;
}
.slimScrollRail {
    opacity: 1 !important;
    background-color: rgba(0, 0, 0, 0.15) !important;
    border: 0 !important;
    border-radius: 0 !important;
    bottom: 0;
}
/* ========================================================================
 Component: datepicker.less
 ========================================================================== */
.ui-datepicker {
    display: inline-block;
    max-width: 100%;
    overflow: auto;
}
/* ========================================================================
 Component: alerts.less
 ========================================================================== */
.alerts {
    position: fixed;
    top: 60px;
    left: 60px;
    z-index: 9090;
    width: 350px;
    left: auto;
    right: 60px;
}
.alerts:hover .alert .close {
    opacity: 1;
    visibility: visible;
}
.alerts-top-right,
.alerts-bottom-right {
    left: auto;
    right: 60px;
}
.alerts-top-center,
.alerts-bottom-center {
    left: 50%;
    margin-left: -175px;
}
.alerts-bottom-left,
.alerts-bottom-right,
.alerts-bottom-center {
    top: auto;
    bottom: 60px;
}
@media (max-width: 480px) {
.alerts {
        left: 10px;
        right: 10px;
        width: auto;
        margin: 0;
    }
}
/* ========================================================================
 Component: notify.less
 ========================================================================== */
.uk-notify {
    position: fixed;
    top: 50px;
    left: 50px;
    z-index: 1040;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 350px;
}
.uk-notify-top-right,
.uk-notify-bottom-right {
    left: auto;
    right: 50px;
}
.uk-notify-top-center,
.uk-notify-bottom-center {
    left: 50%;
    margin-left: -175px;
}
.uk-notify-bottom-left,
.uk-notify-bottom-right,
.uk-notify-bottom-center {
    top: auto;
    bottom: 50px;
}
@media (max-width: 480px) {
.uk-notify {
        left: 10px;
        right: 10px;
        width: auto;
        margin: 0;
    }
}
.uk-notify-message {
    position: relative;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 3px;
    padding-right: 35px;
    cursor: pointer;
}
.uk-notify-message.alert.alert-normal {
    background: #444444;
    color: #ffffff;
}
.uk-notify-message > .close {
    visibility: hidden;
}
.uk-notify-message:hover > .close {
    visibility: visible;
}
/* ========================================================================
 Component: calendar.less
 ========================================================================== */
.calendar-app .fc-button {
    color: #333333;
    background-color: #ffffff;
    border-color: #eaeaea;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    height: auto;
    background-image: none;
}
.calendar-app .fc-button:focus,
.calendar-app .fc-button.focus {
    color: #333333;
    background-color: #f5f5f5;
    border-color: #d6d6d6;
}
.calendar-app .fc-button:hover {
    color: #333333;
    background-color: #f5f5f5;
    border-color: #d6d6d6;
}
.calendar-app .fc-button:active,
.calendar-app .fc-button.active,
.open > .dropdown-toggle.calendar-app .fc-button {
    color: #333333;
    background-color: #f5f5f5;
    border-color: #d6d6d6;
}
.calendar-app .fc-button:active:hover,
.calendar-app .fc-button.active:hover,
.open > .dropdown-toggle.calendar-app .fc-button:hover,
.calendar-app .fc-button:active:focus,
.calendar-app .fc-button.active:focus,
.open > .dropdown-toggle.calendar-app .fc-button:focus,
.calendar-app .fc-button:active.focus,
.calendar-app .fc-button.active.focus,
.open > .dropdown-toggle.calendar-app .fc-button.focus {
    color: #333333;
    background-color: #f5f5f5;
    border-color: #d6d6d6;
}
.calendar-app .fc-button:active,
.calendar-app .fc-button.active,
.open > .dropdown-toggle.calendar-app .fc-button {
    background-image: none;
}
.calendar-app .fc-button.disabled,
.calendar-app .fc-button[disabled],
fieldset[disabled] .calendar-app .fc-button,
.calendar-app .fc-button.disabled:hover,
.calendar-app .fc-button[disabled]:hover,
fieldset[disabled] .calendar-app .fc-button:hover,
.calendar-app .fc-button.disabled:focus,
.calendar-app .fc-button[disabled]:focus,
fieldset[disabled] .calendar-app .fc-button:focus,
.calendar-app .fc-button.disabled.focus,
.calendar-app .fc-button[disabled].focus,
fieldset[disabled] .calendar-app .fc-button.focus,
.calendar-app .fc-button.disabled:active,
.calendar-app .fc-button[disabled]:active,
fieldset[disabled] .calendar-app .fc-button:active,
.calendar-app .fc-button.disabled.active,
.calendar-app .fc-button[disabled].active,
fieldset[disabled] .calendar-app .fc-button.active {
    background-color: #ffffff;
    border-color: #eaeaea;
}
.calendar-app .fc-button .badge {
    color: #ffffff;
    background-color: #333333;
}
.calendar-app .fc-button:active,
.calendar-app .fc-button.active,
.calendar-app .fc-button.fc-state-active {
    outline: 0;
    background-image: none;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.calendar-app .fc-button .fc-icon {
    margin: 0 .1em;
    font-size: inherit;
    font-family: FontAwesome !important;
    vertical-align: baseline;
    color: #555;
}
.calendar-app .fc-button .fc-icon:after {
    display: none;
}
.calendar-app .fc-state-highlight,
.calendar-app .fc-day:hover {
    background-color: #f7f8f9;
}
.calendar-app .fc-day-number {
    font-size: 18px;
    font-weight: bold;
    color: #a1a2a3;
}
.calendar-app .fc-view {
    overflow: visible;
}
.calendar-app .external-events {
    margin: 0;
}
.calendar-app .external-events > div {
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 6px 10px;
    color: #fff;
    font-size: 11px;
    border-radius: 2px;
    cursor: move;
}
.calendar-app .external-events:empty {
    content: "EMRTPUY";
}
.calendar-app .external-events-trash {
    position: relative;
    min-height: 120px;
}
.calendar-app .external-events-trash:after {
    content: "\f00d";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #131e26;
    opacity: 0;
    font-family: FontAwesome;
    color: #fff;
    text-align: center;
    font-size: 50px;
    padding: 8%;
    max-height: 100%;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: -1;
}
.calendar-app .external-events-trash.active:after {
    opacity: 1;
    z-index: 1;
}
.calendar-app .external-events-trash.hovered:after {
    background-color: #fb797e;
}
.calendar-app .external-event-color-selector .circle.selected {
    border: 3px solid rgba(255, 255, 255, 0.5);
}
/* ========================================================================
 Component: spinner.less
 ========================================================================== */
body .whirl {
    position: relative;
}
body .whirl:before {
    content: attr(data-spinner-text);
    display: block;
    background-color: #f0f0f0;
    opacity: 0.7;
}
body .whirl.solid {
    opacity: 1;
}
body .whirl:after {
    border-top-color: #5d9cec;
}
body .whirl.blade:after {
    border-bottom-color: #5d9cec;
}
body .whirl.double-up:after {
    border-right-color: #5d9cec;
    border-top-color: #5d9cec;
    border-left-color: #5d9cec;
    border-bottom-color: #5d9cec;
}
body .whirl.duo:after {
    border-right-color: #5d9cec;
    border-left-color: #5d9cec;
    border-top-color: #7266ba;
    border-bottom-color: #7266ba;
}
body .whirl.helicopter:after {
    background-color: #5d9cec;
}
body .whirl.ringed:after {
    border-right-color: #23b7e5;
    border-top-color: #7266ba;
    border-left-color: #7266ba;
    border-bottom-color: #7266ba;
}
body .whirl.traditional:after {
    border-right-color: #23b7e5;
    border-top-color: #23b7e5;
    border-left-color: #7266ba;
    border-bottom-color: #fad732;
}
body .whirl.line:after {
    box-shadow: inset -10px 0px 0px rgba(93, 156, 236, 0.5);
}
.no-cssanimations body .whirl:before {
    opacity: .9;
}
.no-cssanimations body .whirl:after {
    content: "Loading...";
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    line-height: 40px;
    color: #000;
    opacity: 1;
    border: 0;
    box-shadow: 0 0 0 #000;
    background-color: transparent;
    text-align: center;
}
body .ball-pulse > div,
body .ball-grid-pulse > div,
body .square-spin > div,
body .ball-pulse-rise > div,
body .ball-rotate > div,
body .ball-rotate > div:before,
body .ball-rotate > div:after,
body .cube-transition > div,
body .ball-zig-zag > div,
body .ball-zig-zag-deflect > div,
body .ball-triangle-path > div,
body .ball-scale > div,
body .line-scale > div,
body .line-scale-party > div,
body .ball-scale-multiple > div,
body .ball-pulse-sync > div,
body .ball-beat > div,
body .line-scale-pulse-out > div,
body .line-scale-pulse-out-rapid > div,
body .ball-spin-fade-loader > div,
body .line-spin-fade-loader > div,
body .triangle-skew-spin > div,
body .ball-grid-beat > div,
body .semi-circle-spin > div {
    background-color: #5d9cec;
}
body .ball-clip-rotate-multiple {
    width: 1px;
}
body .ball-clip-rotate-multiple > div {
    border-color: #5d9cec transparent #5d9cec transparent;
}
body .ball-clip-rotate-multiple > div:last-child {
    border-color: transparent #5d9cec transparent #5d9cec;
}
body .ball-clip-rotate > div {
    border-color: #5d9cec;
    border-bottom-color: transparent;
}
body .ball-clip-rotate-pulse > div:first-child {
    background-color: #5d9cec;
    top: 5px;
    left: -8px;
}
body .ball-clip-rotate-pulse > div:last-child {
    border-color: #5d9cec transparent #5d9cec transparent;
}
body .square-spin > div,
body .ball-scale-ripple > div,
body .ball-scale-ripple-multiple > div {
    border-color: #5d9cec;
}
body .pacman > div:first-of-type {
    border-top-color: #5d9cec;
    border-left-color: #5d9cec;
    border-bottom-color: #5d9cec;
}
body .pacman > div:nth-child(2) {
    border-top-color: #5d9cec;
    border-left-color: #5d9cec;
    border-bottom-color: #5d9cec;
}
body .pacman > div:nth-child(3),
body .pacman > div:nth-child(4),
body .pacman > div:nth-child(5),
body .pacman > div:nth-child(6) {
    background-color: #5d9cec;
}
body .sk-spinner-rotating-plane.sk-spinner,
body .sk-spinner-double-bounce .sk-double-bounce1,
body .sk-spinner-double-bounce .sk-double-bounce2,
body .sk-spinner-wave div,
body .sk-spinner-wandering-cubes .sk-cube1,
body .sk-spinner-wandering-cubes .sk-cube2,
body .sk-spinner-chasing-dots .sk-dot1,
body .sk-spinner-chasing-dots .sk-dot2,
body .sk-spinner-three-bounce div,
body .sk-spinner-circle .sk-circle:before,
body .sk-spinner-cube-grid .sk-cube,
body .sk-spinner-fading-circle .sk-circle:before,
body .sk-spinner-pulse.sk-spinner,
body .sk-spinner-wordpress.sk-spinner {
    background-color: #5d9cec;
}
body .sk-spinner-wordpress .sk-inner-circle {
    background-color: #fff;
}
/* just for loaders.css demo */
.loader-demo {
    height: 150px;
    padding-top: 50px;
    text-align: center;
}
.loader-demo > div {
    display: inline-block;
}
/* ========================================================================
 Component: gmap.less
 ========================================================================== */
.gmap {
    height: 300px;
}
.gmap.gmap-sm {
    height: 150px;
}
/* ========================================================================
 Component: vector-map.less
 ========================================================================== */
body .jvectormap-label {
    position: absolute;
    display: none;
    border: solid 1px #313232;
    border-radius: 2px;
    background: #313232;
    color: white;
    padding: 3px 6px;
    opacity: 0.9;
    z-index: 11;
}
body .jvectormap-zoomin,
body .jvectormap-zoomout {
    position: absolute;
    left: 10px;
    width: 22px;
    height: 22px;
    border-radius: 2px;
    background: #515253;
    padding: 5px;
    color: white;
    cursor: pointer;
    line-height: 10px;
    text-align: center;
}
body .jvectormap-zoomin {
    top: 10px;
}
body .jvectormap-zoomout {
    top: 30px;
}
/* ========================================================================
 Component: portlets.less
 ========================================================================== */
[portlet] {
    min-height: 30px;
}
[portlet].portlet-handler,
[portlet] .portlet-handler {
    cursor: move;
}
.portlets-wrapper {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    overflow: auto;
}
.portlet.box-placeholder {
    padding: 0;
}
/* ========================================================================
 Component: mailbox.less
 ========================================================================== */
.mb-boxes {
    height: 0;
    overflow: hidden;
}
.mb-boxes .nav > li > a {
    font-weight: 600;
    color: #3a3f51;
    margin: 5px 0;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
}
.mb-boxes .nav > li > a:hover,
.mb-boxes .nav > li > a:focus {
    background-color: #c0d0d3;
}
.mb-boxes .nav > li.active > a {
    background-color: #5d9cec !important;
    color: #fff;
}
@media only screen and (min-width: 992px) {
.mb-boxes {
        height: auto !important;
        visibility: visible !important;
        display: block;
    }
}
@media only screen and (min-width: 992px) {
.mb-compose-button {
        display: block;
        width: 100%;
    }
.mb-toggle-button {
        display: none;
    }
}
.mb-mails > tbody > tr > td {
    border-top-color: transparent;
    cursor: pointer;
}
.mb-mails .mb-mail-active {
    background-color: #f7f8f9 !important;
}
.mb-mails .mb-mail-avatar {
    float: left;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
}
.mb-mails .mb-mail-date {
    display: block;
    float: right;
    color: #909fa7;
    font-size: 12px;
    font-weight: bold;
}
.mb-mails .mb-mail-from {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
}
.mb-mails .mb-mail-meta {
    overflow: hidden;
}
.mb-mails .mb-mail-subject {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 6px;
}
.mb-mails .mb-mail-preview {
    clear: both;
    margin-top: 10px;
    color: #909fa7;
    margin-top: 2px;
}
.mb-mails .mb-attachment {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #e4eaec;
}
.mb-view > tbody > tr > td {
    cursor: auto;
}
.mb-view .mb-mail-to-list {
    margin-top: 6px;
}
.mb-view .mb-mail-to-list > a {
    margin-right: 5px;
    color: #909fa7;
}
/* ========================================================================
 Component: utils.less
 ========================================================================== */
.m0 {
    margin: 0 !important;
}
.ml0 {
    margin-left: 0 !important;
}
.mr0 {
    margin-right: 0 !important;
}
.mt0 {
    margin-top: 0 !important;
}
.mb0 {
    margin-bottom: 0 !important;
}
.m {
    margin: 10px !important;
}
.ml {
    margin-left: 10px !important;
}
.mr {
    margin-right: 10px !important;
}
.mt {
    margin-top: 10px !important;
}
.mb {
    margin-bottom: 10px !important;
}
.m-sm {
    margin: 5px !important;
}
.ml-sm {
    margin-left: 5px !important;
}
.mr-sm {
    margin-right: 5px !important;
}
.mt-sm {
    margin-top: 5px !important;
}
.mb-sm {
    margin-bottom: 5px !important;
}
.m-lg {
    margin: 15px !important;
}
.ml-lg {
    margin-left: 15px !important;
}
.mr-lg {
    margin-right: 15px !important;
}
.mt-lg {
    margin-top: 15px !important;
}
.mb-lg {
    margin-bottom: 15px !important;
}
.m-xl {
    margin: 30px !important;
}
.ml-xl {
    margin-left: 30px !important;
}
.mr-xl {
    margin-right: 30px !important;
}
.mt-xl {
    margin-top: 30px !important;
}
.mb-xl {
    margin-bottom: 30px !important;
}
.mv {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}
.mh {
    margin-left: 10px !important;
    margin-right: 10px !important;
}
.mv-lg {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
}
.mh-lg {
    margin-left: 15px !important;
    margin-right: 15px !important;
}
.mv-sm {
    margin-top: 5px !important;
    margin-bottom: 5px !important;
}
.mh-sm {
    margin-left: 5px !important;
    margin-right: 5px !important;
}
.p0 {
    padding: 0 !important;
}
.pl0 {
    padding-left: 0 !important;
}
.pr0 {
    padding-right: 0 !important;
}
.pt0 {
    padding-top: 0 !important;
}
.pb0 {
    padding-bottom: 0 !important;
}
.pv0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
.ph0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.p {
    padding: 10px !important;
}
.pl {
    padding-left: 10px !important;
}
.pr {
    padding-right: 10px !important;
}
.pt {
    padding-top: 10px !important;
}
.pb {
    padding-bottom: 10px !important;
}
.p-sm {
    padding: 5px !important;
}
.pl-sm {
    padding-left: 5px !important;
}
.pr-sm {
    padding-right: 5px !important;
}
.pt-sm {
    padding-top: 5px !important;
}
.pb-sm {
    padding-bottom: 5px !important;
}
.p-lg {
    padding: 15px !important;
}
.pl-lg {
    padding-left: 15px !important;
}
.pr-lg {
    padding-right: 15px !important;
}
.pt-lg {
    padding-top: 15px !important;
}
.pb-lg {
    padding-bottom: 15px !important;
}
.p-xl {
    padding: 30px !important;
}
.pl-xl {
    padding-left: 30px !important;
}
.pr-xl {
    padding-right: 30px !important;
}
.pt-xl {
    padding-top: 30px !important;
}
.pb-xl {
    padding-bottom: 30px !important;
}
.pv {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}
.ph {
    padding-left: 10px !important;
    padding-right: 10px !important;
}
.pv-xl {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
}
.ph-xl {
    padding-left: 30px !important;
    padding-right: 30px !important;
}
.pv-lg {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
}
.ph-lg {
    padding-left: 15px !important;
    padding-right: 15px !important;
}
.pv-sm {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
}
.ph-sm {
    padding-left: 5px !important;
    padding-right: 5px !important;
}
.b0 {
    border-width: 0 !important;
}
.bl0 {
    border-left-width: 0 !important;
}
.br0 {
    border-right-width: 0 !important;
}
.bt0 {
    border-top-width: 0 !important;
}
.bb0 {
    border-bottom-width: 0 !important;
}
.br {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.bl {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.bt {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.bb {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.b,
.ba {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.radius-clear {
    border-radius: 0 !important;
}
.shadow-clear {
    box-shadow: 0 0 0 #000 !important;
}
.text-white {
    color: #fff;
}
.text-inverse {
    color: #131e26;
}
.text-alpha {
    color: rgba(255, 255, 255, 0.5);
}
.text-pink {
    color: #f532e5;
}
.text-purple {
    color: #7266ba;
}
.text-dark {
    color: #3a3f51;
}
.text-alpha-inverse {
    color: rgba(0, 0, 0, 0.5);
}
.text-green {
    color: #37bc9b;
}
.text-yellow {
    color: #fad732;
}
.text-gray-darker {
    color: #232735;
}
.text-gray-dark {
    color: #3a3f51;
}
.text-gray {
    color: #dde6e9;
}
.text-gray-light {
    color: #e4eaec;
}
.text-gray-lighter {
    color: #edf1f2;
}
.text-inherit {
    color: inherit;
}
.text-sm {
    font-size: 11.9px;
}
.text-md {
    font-size: 26.6px;
}
.text-lg {
    font-size: 42px;
}
.text-nowrap {
    white-space: nowrap;
}
.text-thin {
    font-weight: 100 !important;
}
.text-normal {
    font-weight: normal !important;
}
.text-bold {
    font-weight: bold !important;
}
.inline {
    display: inline-block !important;
}
.block-center {
    margin: 0 auto;
}
.bg-primary {
    background-color: #5d9cec;
    color: #ffffff !important;
}
.bg-primary-light {
    background-color: #8bb8f1;
    color: #ffffff !important;
}
.bg-primary-dark {
    background-color: #2f80e7;
    color: #ffffff !important;
}
.bg-primary small {
    color: inherit;
}
.bg-success {
    background-color: #27c24c;
    color: #ffffff !important;
}
.bg-success-light {
    background-color: #43d967;
    color: #ffffff !important;
}
.bg-success-dark {
    background-color: #1e983b;
    color: #ffffff !important;
}
.bg-success small {
    color: inherit;
}
.bg-info {
    background-color: #23b7e5;
    color: #ffffff !important;
}
.bg-info-light {
    background-color: #51c6ea;
    color: #ffffff !important;
}
.bg-info-dark {
    background-color: #1797be;
    color: #ffffff !important;
}
.bg-info small {
    color: inherit;
}
.bg-warning {
    background-color: #ff902b;
    color: #ffffff !important;
}
.bg-warning-light {
    background-color: #ffab5e;
    color: #ffffff !important;
}
.bg-warning-dark {
    background-color: #f77600;
    color: #ffffff !important;
}
.bg-warning small {
    color: inherit;
}
.bg-danger {
    background-color: #f05050;
    color: #ffffff !important;
}
.bg-danger-light {
    background-color: #f47f7f;
    color: #ffffff !important;
}
.bg-danger-dark {
    background-color: #ec2121;
    color: #ffffff !important;
}
.bg-danger small {
    color: inherit;
}
.bg-green {
    background-color: #37bc9b;
    color: #ffffff !important;
}
.bg-green-light {
    background-color: #58ceb1;
    color: #ffffff !important;
}
.bg-green-dark {
    background-color: #2b957a;
    color: #ffffff !important;
}
.bg-green small {
    color: inherit;
}
.bg-pink {
    background-color: #f532e5;
    color: #ffffff !important;
}
.bg-pink-light {
    background-color: #f763eb;
    color: #ffffff !important;
}
.bg-pink-dark {
    background-color: #e90bd6;
    color: #ffffff !important;
}
.bg-pink small {
    color: inherit;
}
.bg-purple {
    background-color: #7266ba;
    color: #ffffff !important;
}
.bg-purple-light {
    background-color: #9289ca;
    color: #ffffff !important;
}
.bg-purple-dark {
    background-color: #564aa3;
    color: #ffffff !important;
}
.bg-purple small {
    color: inherit;
}
.bg-inverse {
    background-color: #131e26;
    color: #ffffff !important;
}
.bg-inverse-light {
    background-color: #243948;
    color: #ffffff !important;
}
.bg-inverse-dark {
    background-color: #020304;
    color: #ffffff !important;
}
.bg-inverse small {
    color: inherit;
}
.bg-yellow {
    background-color: #fad732;
    color: #ffffff !important;
}
.bg-yellow-light {
    background-color: #fbe164;
    color: #ffffff !important;
}
.bg-yellow-dark {
    background-color: #f3ca06;
    color: #ffffff !important;
}
.bg-yellow small {
    color: inherit;
}
.bg-white {
    background-color: #ffffff;
    color: inherit !important;
}
.bg-gray-darker {
    background-color: #232735;
    color: #ffffff !important;
}
.bg-gray-dark {
    background-color: #3a3f51;
    color: #ffffff !important;
}
.bg-gray {
    background-color: #dde6e9;
    color: #515253 !important;
}
.bg-gray-light {
    background-color: #e4eaec;
    color: #515253 !important;
}
.bg-gray-lighter {
    background-color: #edf1f2;
    color: #515253 !important;
}
.bg-transparent {
    background-color: transparent !important;
}
.bg-cover {
    background-size: cover;
}
.thumb8 {
    width: 8px !important;
    height: 8px !important;
}
.thumb16 {
    width: 16px !important;
    height: 16px !important;
}
.thumb24 {
    width: 24px !important;
    height: 24px !important;
}
.thumb32 {
    width: 32px !important;
    height: 32px !important;
}
.thumb48 {
    width: 48px !important;
    height: 48px !important;
}
.thumb64 {
    width: 64px !important;
    height: 64px !important;
}
.thumb80 {
    width: 80px !important;
    height: 80px !important;
}
.thumb96 {
    width: 96px !important;
    height: 96px !important;
}
.thumb128 {
    width: 128px !important;
    height: 128px !important;
}
.align-middle {
    vertical-align: middle;
}
.align-top {
    vertical-align: top;
}
.align-bottom {
    vertical-align: bottom;
}
.bg-center {
    background-position: center center;
    background-size: cover;
}
.list-icon em {
    font-size: 14px;
    width: 40px;
    vertical-align: middle;
    margin: 0;
    display: inline-block;
    text-align: center;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    line-height: 30px;
}
.list-icon div:hover em {
    -webkit-transform: scale(3, 3);
    -ms-transform: scale(3, 3);
    -o-transform: scale(3, 3);
    transform: scale(3, 3);
}
.wd-xxs {
    width: 60px;
}
.wd-xs {
    width: 90px;
}
.wd-sm {
    width: 150px;
}
.wd-sd {
    width: 200px;
}
.wd-md {
    width: 240px;
}
.wd-lg {
    width: 280px;
}
.wd-xl {
    width: 320px;
}
.wd-xxl {
    width: 360px;
}
.wd-wide {
    width: 100%;
}
.wd-auto {
    width: auto;
}
.wd-zero {
    width: 0;
}
.label-inverse {
    background-color: #131e26;
}
.label-inverse[href]:hover,
.label-inverse[href]:focus {
    background-color: #020304;
}
.label-green {
    background-color: #37bc9b;
}
.label-green[href]:hover,
.label-green[href]:focus {
    background-color: #2b957a;
}
.label-pink {
    background-color: #f532e5;
}
.label-pink[href]:hover,
.label-pink[href]:focus {
    background-color: #e90bd6;
}
.label-purple {
    background-color: #7266ba;
}
.label-purple[href]:hover,
.label-purple[href]:focus {
    background-color: #564aa3;
}
.alert-purple {
    background-color: #7266ba;
    border-color: #7266ba;
    color: #ffffff;
}
.alert-purple hr {
    border-top-color: #6254b2;
}
.alert-purple .alert-link {
    color: #e6e6e6;
}
.alert-green {
    background-color: #37bc9b;
    border-color: #37bc9b;
    color: #ffffff;
}
.alert-green hr {
    border-top-color: #31a88b;
}
.alert-green .alert-link {
    color: #e6e6e6;
}
.alert-pink {
    background-color: #f532e5;
    border-color: #f532e5;
    color: #ffffff;
}
.alert-pink hr {
    border-top-color: #f41ae2;
}
.alert-pink .alert-link {
    color: #e6e6e6;
}
.alert-inverse {
    background-color: #131e26;
    border-color: #131e26;
    color: #ffffff;
}
.alert-inverse hr {
    border-top-color: #0a1115;
}
.alert-inverse .alert-link {
    color: #e6e6e6;
}
.abs-center-container {
    position: relative;
}
.abs-center {
    height: 50%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.abs-center.abs-fixed {
    position: fixed;
    z-index: 999;
}
.abs-center.abs-right {
    left: auto;
    right: 20px;
    text-align: right;
}
.abs-center.abs-left {
    right: auto;
    left: 20px;
    text-align: left;
}

.abs-center.login {
    position: relative;
    margin-top: 20px;
}

.abs-center.login label {
    font-weight: inherit;
    margin: 5px 0px 0px;
    font-size: 12px;
}

@media (max-height: 720px) {
.abs-center {
        position: relative;
    }
}
.link-unstyled {
    text-decoration: none !important;
    outline: none !important;
}
.no-resize {
    resize: none;
    max-width: 100%;
    min-width: 100%;
}
/**
 * Displays hidden content on hover. Add this class to the parent element.
 * Markup
 *   <div class="hover-visible">
 *    <div class="hover-hidden"></div>
 *   </div>
 */
.hover-visible .hover-hidden {
    display: none;
}
.hover-visible:hover .hover-hidden {
    display: block;
}
.hover-visible:hover .hover-hidden-inline {
    display: inline-block;
}
.media-box,
.media-box-body {
    overflow: hidden;
    zoom: 1;
}
.media-box,
.media-box .media-box {
    margin-top: 15px;
}
.media-box:first-child {
    margin-top: 0;
}
.media-box-object {
    display: block;
}
.media-box-heading {
    margin: 0 0 5px;
}
.media-box > .pull-left {
    margin-right: 10px;
}
.media-box > .pull-right {
    margin-left: 10px;
}
.media-box-list {
    padding-left: 0;
    list-style: none;
}
/* ========================================================================
 Component: print.less
 ========================================================================== */
@media print {
.sidebar,
.topnavbar,
.offsidebar,
.btn {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
    }
.wrapper,
.wrapper > section,
.content-wrapper {
        margin: 0 !important;
        /* remove margin used for sidebar and expand the content */
        padding: 0 !important;
        width: 100% !important;
    }
.content-wrapper {
        overflow: hidden !important;
    }
}
.setting-color {
    padding: 0 5px;
}
.setting-color > label {
    display: block;
    position: relative;
    margin: 0 10px;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
.setting-color > label:first-child {
    margin-left: 0;
}
.setting-color > label:last-child {
    margin-right: 0;
}
.setting-color > label > .color {
    display: block;
    height: 18px;
}
.setting-color > label > .split {
    display: block;
}
.setting-color > label > .split:before,
.setting-color > label > .split:after {
    content: " ";
    display: table;
}
.setting-color > label > .split:after {
    clear: both;
}
.setting-color > label > .split > .color {
    display: block;
    height: 37.5px;
}
.setting-color > label > .split > .color:first-child {
    float: left;
    width: 70%;
}
.setting-color > label > .split > .color:last-child {
    float: right;
    width: 30%;
}
.setting-color > label > .icon-check {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-top: -20px;
    margin-left: -10px;
    text-align: center;
    font-size: 1.33333333em;
    vertical-align: -15%;
    color: #fff;
    opacity: 0;
}
.setting-color > label > input[type="radio"] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
}
.setting-color > label > input[type="radio"]:checked + .icon-check {
    opacity: 1 !important;
}
flatdoc {
    display: block;
    margin: -15px;
}
@media only screen and (min-width: 768px) {
    flatdoc {
        margin: -20px;
    }
}
flatdoc [role~="flatdoc"] {
    width: 100%;
    height: 100%;
}
@media only screen and (min-width: 768px) {
    flatdoc [role~="flatdoc"] {
        display: table;
        table-layout: fixed;
        border-spacing: 0;
    }
}
flatdoc [role~="flatdoc-menu"] {
    border-right: 1px solid #e1e2e3;
    font-size: 14px;
}
@media only screen and (min-width: 768px) {
    flatdoc [role~="flatdoc-menu"] {
        position: relative;
        display: table-cell;
        height: 100%;
        vertical-align: top;
        width: 180px;
    }
    flatdoc [role~="flatdoc-menu"] > ul {
        padding-top: 20px;
    }
}
flatdoc [role~="flatdoc-menu"] ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
flatdoc [role~="flatdoc-menu"] ul.level-1 > li > a {
    padding-top: 25px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e1e2e3;
    pointer-events: none;
}
flatdoc [role~="flatdoc-menu"] ul.level-2 > li + li > a,
    flatdoc [role~="flatdoc-menu"] ul.level-2 > li:first-child > a {
    background-color: rgba(255, 255, 255, 0.75);
}
flatdoc [role~="flatdoc-menu"] ul a {
    position: relative;
    display: block;
    padding: 10px;
    padding-right: 30px;
}
flatdoc [role~="flatdoc-menu"] ul a,
    flatdoc [role~="flatdoc-menu"] ul a:visited {
    color: #3a3f51;
}
flatdoc [role~="flatdoc-menu"] ul a:hover {
    color: #2e3241;
    background-color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
}
flatdoc [role~="flatdoc-menu"] ul a.level-1 {
    font-family: montserrat, sans-serif;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: bold;
}
flatdoc [role~="flatdoc-menu"] ul a.level-1,
    flatdoc [role~="flatdoc-menu"] ul a.level-1:visited {
    color: #3a3f51;
}
flatdoc [role~="flatdoc-menu"] ul a.level-1:hover {
    color: #3a3f51;
}
flatdoc [role~="flatdoc-menu"] ul a.level-2 {
    font-weight: 600;
}
flatdoc [role~="flatdoc-menu"] ul a.level-3 {
    font-weight: normal;
    font-size: 0.9em;
    padding-left: 15px;
}
flatdoc [role~="flatdoc-menu"] ul a.active {
    font-weight: bold !important;
}
flatdoc [role~="flatdoc-menu"] ul a.active,
    flatdoc [role~="flatdoc-menu"] ul a.active:visited,
    flatdoc [role~="flatdoc-menu"] ul a.active:hover {
    color: #505050 !important;
}
flatdoc [role~="flatdoc-menu"] ul a.active:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -2px;
    right: 15px;
    width: 9px;
    height: 3px;
    border-radius: 2px;
    background: #3a3f51;
}
flatdoc [role~="flatdoc-content"] {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 1px;
    padding-bottom: 50px;
    background-color: #fff;
}
@media only screen and (min-width: 768px) {
    flatdoc [role~="flatdoc-content"] {
        display: table-cell;
        height: 100%;
        vertical-align: top;
    }
}
flatdoc [role~="flatdoc-content"] pre {
    background-color: #f3f6fb;
    border: 1px solid #dde6e9;
}
flatdoc [role~="flatdoc-content"] pre code {
    display: inline-block;
    white-space: pre;
}
flatdoc [role~="flatdoc-content"] pre code .string,
    flatdoc [role~="flatdoc-content"] pre code .number {
    color: #2b957a;
}
flatdoc [role~="flatdoc-content"] pre code .init {
    color: #2b957a;
}
flatdoc [role~="flatdoc-content"] pre code .keyword {
    color: #3a3f51;
    font-weight: bold;
}
flatdoc [role~="flatdoc-content"] pre code .comment {
    color: #909fa7;
}
flatdoc [role~="flatdoc-content"] > h1 {
    padding: 11px 0;
    margin: 0;
    line-height: 1;
}
flatdoc [role~="flatdoc-content"] > h2,
    flatdoc [role~="flatdoc-content"] > h3 {
    padding: 20px;
    border-top: 1px solid #f1f2f3;
    margin: 0 -20px;
}
flatdoc .button {
    display: inline-block;
    padding: 6px 16px;
    font-size: 13px;
    border-radius: 3px;
    text-decoration: none;
    color: #ffffff;
    background-color: #23b7e5;
    border-color: #23b7e5;
}
flatdoc .button:focus,
    flatdoc .button.focus {
    color: #ffffff;
    background-color: #1aacda;
    border-color: #189ec8;
}
flatdoc .button:hover {
    color: #ffffff;
    background-color: #1aacda;
    border-color: #189ec8;
}
flatdoc .button:active,
    flatdoc .button.active,
.open > .dropdown-toggleflatdoc .button {
    color: #ffffff;
    background-color: #1aacda;
    border-color: #189ec8;
}
flatdoc .button:active:hover,
    flatdoc .button.active:hover,
.open > .dropdown-toggleflatdoc .button:hover,
    flatdoc .button:active:focus,
    flatdoc .button.active:focus,
.open > .dropdown-toggleflatdoc .button:focus,
    flatdoc .button:active.focus,
    flatdoc .button.active.focus,
.open > .dropdown-toggleflatdoc .button.focus {
    color: #ffffff;
    background-color: #1aacda;
    border-color: #189ec8;
}
flatdoc .button:active,
    flatdoc .button.active,
.open > .dropdown-toggleflatdoc .button {
    background-image: none;
}
flatdoc .button.disabled,
    flatdoc .button[disabled],
    fieldset[disabled] flatdoc .button,
    flatdoc .button.disabled:hover,
    flatdoc .button[disabled]:hover,
    fieldset[disabled] flatdoc .button:hover,
    flatdoc .button.disabled:focus,
    flatdoc .button[disabled]:focus,
    fieldset[disabled] flatdoc .button:focus,
    flatdoc .button.disabled.focus,
    flatdoc .button[disabled].focus,
    fieldset[disabled] flatdoc .button.focus,
    flatdoc .button.disabled:active,
    flatdoc .button[disabled]:active,
    fieldset[disabled] flatdoc .button:active,
    flatdoc .button.disabled.active,
    flatdoc .button[disabled].active,
    fieldset[disabled] flatdoc .button.active {
    background-color: #23b7e5;
    border-color: #23b7e5;
}
flatdoc .button .badge {
    color: #23b7e5;
    background-color: #ffffff;
}

.gallery-backend {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0px auto;
    background-size: contain;
    background-position: center;
    max-width: 100%;
    background-repeat: no-repeat;
}

#load_textarea {
    width: 35px;
    height: 35px;
    position: relative;
}

.pointer {
    margin: -22.5px 0px 0px -22.5px;
    position: absolute;
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    text-align: center;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.4);
    cursor: all-scroll;
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    -ms-transition: background-color 0.2s;
    transition: background-color 0.2s;
}

.pointer > #edit-point {
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    width: 0px;
    height: 0px;
    background-color: #bbb;
    border-radius: 50%;
    border: 2px solid #FFF;
    color: #FFF;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    -ms-transition: all 0.4s;
    transition: all 0.4s;
    overflow: hidden;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
}

.pointer:hover {
    background-color: #666;
}

.pointer::after {
    content: "\f047";
    color: #FFF;
    font-family: 'FontAwesome';
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    line-height: 45px;
}

.pointer:hover > #edit-point {
    top: -13px;
    right: -17px;
    width: 30px;
    height: 30px;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
    opacity: 1;
}



.pointer > #edit-point:hover {
    background-color: #ccc;
}

.pointer > #edit-point > i {
    line-height: 29px;
}

#immagine {
    position: relative;
    overflow: auto;
    width: 100%;
    height: 100%;
}

#overlay-waiting {
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.6);
    z-index:1000000;
    width:100%;
    height:100%;
}

.modal {
    z-index: 100000;
}

pre.sf-dump {
    z-index: 1000;
}

.chosen-container {
    width: 100% !important;
}

#overlay-waiting-content {
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    text-align: center;
    color: #FFF;
    font-size: 20px;
}

#overlay-waiting-content .fa-spin {
    margin-right: 10px;
}

.nav-arrow {
    color: #000;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 20px;
    width: 25px;
    height: 25px;
    text-align: center;
}