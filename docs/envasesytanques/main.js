(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-eyt {\r\n\tcolor: #0F4D77;\r\n}\r\n\r\n.success-eyt {\r\n\tcolor: #00233D;\r\n}\r\n\r\n.confirm-eyt {\r\n\tcolor: #287AB8;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" class=\"m-0 p-0\" style=\"margin-top: 120px\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"container-fluid personal-p-0 personal-m-0\">\n\t<img src=\"assets/img/barra_inferior.png\" width=\"100%\" height=\"50\" class=\"personal-p-0 personal-m-0\">\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page/home/home.component */ "./src/app/components/page/home/home.component.ts");
/* harmony import */ var _components_page_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/contacts/contacts.component */ "./src/app/components/page/contacts/contacts.component.ts");
/* harmony import */ var _components_page_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/about/about.component */ "./src/app/components/page/about/about.component.ts");
/* harmony import */ var _components_page_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/products/products.component */ "./src/app/components/page/products/products.component.ts");
/* harmony import */ var _components_page_management_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/management/management.component */ "./src/app/components/page/management/management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Routes

//Components








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_page_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"],
                _components_page_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_page_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                _components_page_management_management_component__WEBPACK_IMPORTED_MODULE_10__["ManagementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["app_routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: app_routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_routing", function() { return app_routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index.pages */ "./src/app/components/index.pages.ts");

//Components

var app_routes = [
    { path: '', component: _components_index_pages__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    // { path: 'categorias', component: CategoriesComponent },
    { path: 'productos', component: _components_index_pages__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"] },
    { path: 'contactenos', component: _components_index_pages__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"] },
    { path: 'quienes-somos', component: _components_index_pages__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'gestion-ambiental', component: _components_index_pages__WEBPACK_IMPORTED_MODULE_1__["ManagementComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app_routes);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid personal-p-0 personal-m-0\">\n\t<footer class=\"personal-bg-n3\">\n\t\t<div class=\"row personal-p-0 personal-m-0 ml-1 pt-4\">\n\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t<h5 class=\"text-uppercase personal-c-white mb-4\">Envases y Tanques</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row personal-p-0 personal-m-0 ml-1\">\n\t\t\t<div class=\"col-md-4 col-sm-6 personal-f-s-sm personal-c-white\">\n\t\t\t\t<h6>Contáctenos</h6>\n\t\t\t\t<p><i class=\"fas fa-phone\"></i> 2 470 306 <span>(desde Quito)</span></p>\n\t\t\t\t<p><i class=\"fas fa-phone\"></i> 022 470 306 <span> (Cualquier parte del país)</span></p>\n\t\t\t\t<p><i class=\"fas fa-mobile\"></i> (+593) 9 6764 7864</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-6 personal-f-s-sm personal-c-white\">\n\t\t\t\t<h6>Para consultas y cotizaciones</h6>\n\t\t\t\t<p><i class=\"fas fa-globe\"></i> www.envasesytanques.com</p>\n\t\t\t\t<p><i class=\"fas fa-at\"></i> envasesytanques@hotmail.com</p>\n\t\t\t\t<p><i class=\"fas fa-home\"></i> Francisco Londoño Oe1-174 y Pedro de Alfaro, Quito - Ecuador</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-6 personal-f-s-md personal-f-d-none\">\n\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t\t<li class=\"nav-item pr-3\">\n\t\t            \t<a class=\"nav-link personal-c-white m-1 p-0\" routerLink=\"\">Inicio</a>\n\t\t          \t</li>\n\t\t\t\t\t<li class=\"nav-item pr-3\">\n\t\t\t\t\t\t<a class=\"nav-link personal-c-white m-1 p-0\" routerLink=\"contactenos\">Contáctenos</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item pr-3\">\n\t\t\t\t\t\t<a class=\"nav-link personal-c-white m-1 p-0\" routerLink=\"productos\">Productos</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item pr-3\">\n\t\t\t\t\t\t<a class=\"nav-link personal-c-white m-1 p-0\" routerLink=\"quienes-somos\">Quienes Somos?</a>\n\t\t\t\t\t</li>\n\t\t        </ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-1 ml-1 personal-p-0 personal-m-0\">\n\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t<h6 class=\"personal-f-s-md personal-c-white text-center\">Desarrollo:</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row ml-1 personal-p-0 personal-m-0\">\n\t\t\t<div class=\"col-md-4 col-sm-4\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-4 text-center\">\n\t\t\t\t<p class=\"personal-f-s-sm personal-c-white\">Jorge Tinoco (<a class=\"personal-f-d-none personal-c-white\" href=\"mailto:jorgeluistinocoj@gmail.com\"> jorgeluistinocoj@gmail.com</a>)</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-4\">\n\t\t\t\t<!-- Swiper -->\n\t\t\t\t<!-- <div class=\"swiper-container\">\n\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t<div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/600/600/nature/1)\"></div>\n\t\t\t\t\t\t<div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/600/600/nature/2)\"></div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<!-- Add Pagination -->\n\t\t\t\t\t<!-- <div class=\"swiper-pagination\"></div> -->\n\t\t\t\t<!-- </div> -->\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/index.pages.ts":
/*!*******************************************!*\
  !*** ./src/app/components/index.pages.ts ***!
  \*******************************************/
/*! exports provided: ContactsComponent, HomeComponent, AboutComponent, ProductsComponent, ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/contacts/contacts.component */ "./src/app/components/page/contacts/contacts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return _page_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_0__["ContactsComponent"]; });

/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/components/page/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _page_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });

/* harmony import */ var _page_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/about/about.component */ "./src/app/components/page/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _page_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]; });

/* harmony import */ var _page_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/products/products.component */ "./src/app/components/page/products/products.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return _page_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]; });

/* harmony import */ var _page_management_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/management/management.component */ "./src/app/components/page/management/management.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return _page_management_management_component__WEBPACK_IMPORTED_MODULE_4__["ManagementComponent"]; });








/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav {\r\n\tcolor: #FFF;\r\n}\r\n\r\n.nav-item:hover a {\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-0 p-0\">\n  <div class=\"row personal-m-0\">\n    <div class=\"col-lg-4\">\n      <div id=\"cntLogo\" data-av-animation=\"fadeIn\" class=\"aniview slow container-fluid persona-navbar-f\" style=\"width: 100%\">\n        <a class=\"navbar-brand m-2\" routerLink=\"\">\n          <img src=\"assets/img/logo_completo_original.png\" width=\"300\" height=\"auto\" class=\"d-inline-block align-top\">\n        </a>\n      </div>\n    </div>\n    <div class=\"col-lg-3\"></div>\n    <div class=\"col-lg-5 text-right pr-4\">\n      <p class=\"personal-f-s-sm mt-4 mb-0 p-0\">Contáctenos: </p>\n      <h4 class=\"number-phone personal-c-n2 m-0 p-0\"><i class=\"fas fa-mobile-alt\"></i> (+593) 96764XXXX</h4>\n    </div>\n  </div>\n  <!-- Menu -->\n  <div id=\"cntNavBar\" data-av-animation=\"slideInTop\" class=\"aniview fast container-fluid m-0 p-0 personal-bg-n2\" style=\"width: 100%\">\n    <nav class=\"persona-navbar-f personal-f-s-md navbar navbar-expand-lg shadow p-0 m-0\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse m-0 p-0\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item pl-1 pr-1\" style=\"width: 30px\">\n            <a routerLink=\"\" name=\"ocultarDinamico\" data-av-animation=\"fadeIn\" class=\"nav-link personal-c-white m-1 p-0 personal-f-d-none\">\n              <img src=\"assets/img/logo_eyt_fb.ico\" class=\"m-0 p-0\" width=\"20\" height=\"auto\">\n            </a>\n          </li>\n          <li class=\"nav-item pr-3\">\n            <a routerLink=\"\" class=\"nav-link personal-c-white personal-f-d-none\">Inicio</a>\n          </li>\n          <!-- <li class=\"nav-item dropdown pr-3\">\n            <a class=\"nav-link dropdown-toggle personal-f-d-none\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Servicios</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item personal-f-d-none\" href=\"#\">Gestión Ambiental</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item personal-f-d-none\" href=\"#\">Gestión de Residúos</a>\n            </div>\n          </li> -->\n          <li class=\"nav-item pr-3\">\n            <a routerLink=\"gestion-ambiental\" class=\"nav-link personal-c-white personal-f-d-none\">Gestión Ambiental</a>\n          </li>\n          <li class=\"nav-item pr-3\">\n            <a routerLink=\"productos\" class=\"nav-link personal-c-white personal-f-d-none\">Productos</a>\n          </li>\n          <li class=\"nav-item pr-3\">\n            <a routerLink=\"contactenos\" class=\"nav-link personal-c-white personal-f-d-none\">Contáctenos</a>\n          </li>\n          <li class=\"nav-item pr-3\">\n            <a routerLink=\"quienes-somos\" class=\"nav-link personal-c-white personal-f-d-none\">¿Quienes somos?</a>\n          </li>\n        </ul>\n      </div>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <span name=\"ocultarDinamico\" class=\"personal-f-s-md personal-c-white text-right m-0 p-0 pr-4\"><i class=\"fas fa-mobile-alt\"></i> (+953) 96764XXXX</span>\n      </form>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page/about/about.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/page/about/about.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/about/about.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/page/about/about.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n\t\r\n\t<div class=\"row\">\r\n\t\t\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<img src=\"assets/img/logo_completo_vertical.png\" alt=\"Envases y Tanques\" class=\"img-thumbnail\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\">\r\n\t\t\t\r\n\t\t\t<h5>Misión</h5>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempore inventore saepe at necessitatibus, temporibus quae quod facere nisi! Quidem alias, est temporibus nulla quae ratione, minus eveniet tempora ipsum.</p>\r\n\t\t\t<h5 class=\"mt-5\">Visión</h5>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum facere dolor dolorem, quidem dolorum a assumenda nulla eos molestias eveniet placeat recusandae at earum dolores, atque omnis iste eaque!</p>\r\n\t\t\t<h6 class=\"mt-5\">Actividad Económica</h6>\r\n\t\t\t<p>Recolección, transporte, reacondiconamiento, lavado y venta de envases plásticos, metálios y de cartón.</p>\r\n\t\t\t<p>Recolección, transporte y entrega al gestor califiado de papel, catón, plástico, chatarra, yute, almidón, madera y otros residuos orgánicos.</p>\r\n\r\n\t\t\t<h4 class=\"mt-5\">Permiso Ambiental 0000AH1-0000012-000031-023402</h4>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/page/about/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/page/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/page/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/page/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/page/contacts/contacts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/contacts/contacts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/contacts/contacts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/contacts/contacts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n\n\t<h4 class=\"text-uppercase personal-c-n1 mb-4\">Contáctenos</h4>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<h5 class=\"text-uppercase mb-4\">Envases y Tanques</h5>\n\t\t\t<p class=\"personal-f-s-md personal-c-n3 mb-4\">\n\t\t\t\tServicios ambientales, gestión de residuos, mantenimiento y venta de envases y tanques.\n\t\t\t</p>\n\t\t\t<p><i class=\"fas fa-phone personal-c-n1\"></i> 2 470 306 <span class=\"personal-c-n2 personal-f-s-sm\">(desde Quito)</span></p>\n\t\t\t<p><i class=\"fas fa-phone personal-c-n1\"></i> 022 470 306 <span class=\"personal-c-n2 personal-f-s-sm\"> (Cualquier parte del país)</span></p>\n\t\t\t<p><i class=\"fas fa-mobile personal-c-n1\"></i> (+593) 9 6764 7864</p>\n\t\t\t<h6 class=\"mt-5 mb-3 ml-3\">Para consultas y cotizaciones</h6>\n\t\t\t<p><i class=\"fas fa-globe personal-c-n1\"></i> www.envasesytanques.com</p>\n\t\t\t<p><i class=\"fas fa-at personal-c-n1\"></i> envasesytanques@hotmail.com</p>\n\t\t\t<p><i class=\"fas fa-home personal-c-n1\"></i> Francisco Londoño Oe1-174 y Pedro de Alfaro, Quito - Ecuador</p>\n\t\t</div>\n\t\t<!-- fas fa-phone -->\n\t\t<!-- Formulario -->\n\t\t<div class=\"col-lg-6\" *ngIf=\"!message\">\n\t\t\t<p class=\"personal-f-s-sm personal-c-n3\">Envíenos sus consultas y pedidos a través de nuestro formulario de consultas, lo atenderemos a la brevedad posible.</p>\n\t\t\t{{ message }}\n\t\t\t<!-- <form> -->\n\t\t\t  <div class=\"form-row\">\n\t\t\t    <div class=\"form-group col-md-12\">\n\t\t\t    \t<input type=\"text\" class=\"form-control form-control-sm\" id=\"inEmpresa\" placeholder=\"Empresa\">\n\t\t\t    </div>\n\t\t\t    <div class=\"form-group col-md-12\">\n\t\t\t    \t<input type=\"text\" class=\"form-control form-control-sm\" id=\"inNombres\" placeholder=\"(*) Nombre y Apellido\">\n\t\t\t    </div>\n\t\t\t    <div class=\"form-group col-md-12\">\n\t\t\t    \t<input type=\"text\" class=\"form-control form-control-sm\" id=\"inTelefono\" placeholder=\"(*) Telefono\">\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"form-group col-md-12\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-sm\" id=\"inCorreo\" placeholder=\"(*) Correo\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-12\">\n\t\t\t\t\t<textarea class=\"form-control form-control-sm\" id=\"inMensaje\" rows=\"3\" placeholder=\"(*) Escriba su mensaje...\"></textarea>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group col-md-12\">\n\t\t\t  \t<p class=\"personal-f-s-sm text-danger text-right\">Datos obligatorios (*)</p>\n\t\t\t  </div>\n\t\t\t  <button (click)=\"sendMessage()\" class=\"btn btn-success pl-5 pr-5\"><i class=\"fas fa-envelope\"></i> Enviar</button>\n\t\t\t<!-- </form> -->\n\t\t</div>\n\n\t\t<div class=\"col-lg-6 p-5 bg-light border border-secondary rounded\" *ngIf=\"message\">\n\t\t\t<h3 class=\"mt-5 mb-5\"><i class=\"fas fa-check-circle text-success\"></i> Correo enviado exitosamente!</h3>\n\t\t\t<h6> Gracias por escribirnos, responderemos tu correo lo más pronto posible.</h6>\n\t\t</div>\n\n\t</div>\n\t\n\t<!-- <div class=\"row mt-5\">\n\t\t<div class=\"col-md-2\">\n\t\t\t<img src=\"assets/img/logo_base.png\" alt=\"...\" class=\"img-thumbnail\">\n\t\t</div>\n\t\t<div class=\"col-md-10\">\n\t\t\t<h6>Envases y Tanques</h6>\n\t\t\t<hr>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur soluta commodi ipsam provident ex obcaecati nulla facere harum tenetur qui accusantium saepe in perspiciatis dolores recusandae, ipsa eligendi, excepturi quisquam!</p>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur soluta commodi ipsam provident ex obcaecati nulla facere harum tenetur qui accusantium saepe in perspiciatis dolores recusandae, ipsa eligendi, excepturi quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur soluta commodi ipsam provident ex obcaecati nulla facere harum tenetur qui accusantium saepe in perspiciatis dolores recusandae, ipsa eligendi, excepturi quisquam!</p>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur soluta commodi ipsam provident ex obcaecati nulla facere harum tenetur qui accusantium saepe in perspiciatis dolores recusandae, ipsa eligendi, excepturi quisquam!</p>\n\t\t</div>\n\t</div> -->\n\n\t<!-- <div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t\n\t\t\t<h6>Equipo de trabajo</h6>\n\t\t\t<hr>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\n\t\t\t<div class=\"card\" style=\"width: 16rem; margin: 0 auto\">\n\t\t\t\t<img class=\"card-img-top rounded\" src=\"assets/img/team/mario-solis.jpg\" alt=\"Card image cap\">\n\t\t\t\t<div class=\"card-body personal-c-n2\">\n\t\t\t\t\t<h6>Mario Solis</h6>\n\t\t\t\t\t<p class=\"personal-f-s-sm personal-c-n3\">Ejecutivo de Ventas</p>\n\t\t\t\t\t<p class=\"personal-f-s-sm\"><i class=\"fas fa-phone\"></i> (+953) 967647444</p>\n\t\t\t\t\t<p class=\"personal-f-s-sm\"><i class=\"fas fa-phone\"></i> (+953) 967647333</p>\n\t\t\t\t\t<p class=\"personal-f-s-sm\"><i class=\"fas fa-envelope\"></i> envasesytanques@hotmail.com</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\n\t\t\t<div class=\"card\" style=\"width: 16rem; margin: 0 auto\">\n\t\t\t\t<img class=\"card-img-top rounded\" src=\"assets/img/team/mario-solis.jpg\" alt=\"Card image cap\">\n\t\t\t\t<div class=\"card-body personal-c-n2\">\n\t\t\t\t\t<h6>Mario Solis</h6>\n\t\t\t\t\t<p class=\"personal-f-s-sm personal-c-n3\">Ejecutivo de Ventas</p>\n\t\t\t\t\t<p class=\"personal-f-s-sm\"><i class=\"fas fa-phone\"></i> (+953) 967-647444</p>\n\t\t\t\t\t<p class=\"personal-f-s-sm\"><i class=\"fas fa-phone\"></i> (+953) 967647333</p>\n\t\t\t\t\t<p class=\"personal-f-s-sm\"><i class=\"fas fa-envelope\"></i> envasesytanques@hotmail.com</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<hr>\n\t\t\t\n\t\t\t\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-md-12\">\n\t\t\t\n\t\t\t<h6>Ubícanos</h6>\n\n\t\t\t<hr>\n\n\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> Av. Simón Bolivar Km 12 1/2 y entrada norte.</p>\n\n\t\t</div>\n\t</div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/components/page/contacts/contacts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/contacts/contacts.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.message = false;
    }
    ContactsComponent.prototype.sendMessage = function () {
        console.log("Enviar mensaje" + this.message);
        this.message = true;
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/page/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/page/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/page/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/page/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/page/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inicio\" class=\"carousel slide mp-5\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"assets/img/galery/transporte.jpg\" alt=\"Third slide\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5 class=\"text-left\">Gestión Ambiental</h5>\n        <p class=\"text-left\">Desarrollamos proyectos ambientales que buscan disminuir los residuos y reutilizar...</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/galery/m13.png\" alt=\"First slide\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5 class=\"text-left personal-c-n3\">Venta de Envases y Tanques</h5>\n        <p class=\"text-left\">Venta y mantenimiento de envases y tanques...</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/galery/sistemagestionambiental.jpg\" alt=\"Second slide\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5 class=\"text-left personal-c-n3\">Gestión Ambiental</h5>\n        <p class=\"text-left\">Proyectos de gestión ambiental...</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#inicio\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#inicio\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"container mt-5 mb-5\">\n  \n  <!-- Productos y Servicios -->\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <h4 class=\"personal-c-n2\">Gestión Ambiental</h4>\n      <p class=\"personal-f-s-md\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique non? Tenetur repellat fugit voluptate laudantium doloribus ea, quidem facilis, error voluptatum, minus, eligendi consequuntur aspernatur numquam reprehenderit? Architecto, iure?</p>\n      <a class=\"btn btn-success\" routerLink=\"gestion-ambiental\" role=\"button\">Leer más...</a>\n     </div>\n     <div class=\"col-lg-4 text-center\">\n       <img src=\"assets/img/galery/gestion.jpg\" class=\"rounded\">\n     </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-lg-8\">\n      <h4 class=\"personal-c-n2\">Gestión de Resíduos</h4>\n      <p class=\"personal-f-s-md\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique non? Tenetur repellat fugit voluptate laudantium doloribus ea, quidem facilis, error voluptatum, minus, eligendi consequuntur aspernatur numquam reprehenderit? Architecto, iure?</p>\n      <a class=\"btn btn-success\" routerLink=\"gestion-ambiental\" role=\"button\">Leer más...</a>\n    </div>\n    <div class=\"col-lg-4 text-center\">\n       <img src=\"assets/img/galery/residuos.jpg\" class=\"rounded\">\n     </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-lg-8\">\n      <h4 class=\"personal-c-n2\">Mantenimiento de tanques</h4>\n      <p class=\"personal-f-s-md\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique non? Tenetur repellat fugit voluptate laudantium doloribus ea, quidem facilis, error voluptatum, minus, eligendi consequuntur aspernatur numquam reprehenderit? Architecto, iure?</p>\n      <a class=\"btn btn-success\" routerLink=\"gestion-ambiental\" role=\"button\">Leer más...</a>\n    </div>\n    <div class=\"col-lg-4 text-center\">\n      <img src=\"assets/img/galery/mantenimiento.jpg\" class=\"rounded\">\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-lg-8\">\n      <h4 class=\"personal-c-n2\">Venta de envases y tanques</h4>\n      <p class=\"personal-f-s-md\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique non? Tenetur repellat fugit voluptate laudantium doloribus ea, quidem facilis, error voluptatum, minus, eligendi consequuntur aspernatur numquam reprehenderit? Architecto, iure?</p>\n      <a class=\"btn btn-success\" routerLink=\"productos\" role=\"button\">Catálogo de Productos</a>\n    </div>\n    <div class=\"col-lg-4 text-center\">\n      <img src=\"assets/img/galery/tanques.png\" class=\"rounded\">\n    </div>\n  </div>\n\n  <!-- Contenedores Marcas -->\n  <br>\n  <h5 class=\"mt-5 mb-2 personal-c-n2\">Nuestros Clientes</h5>\n  <br>\n\n  <div class=\"row mb-5 center\">\n    <div class=\"col-md-2 col-sm-12 p-2\">\n      <img src=\"assets/img/marcas/forteplas.jpg\" class=\"img-thumbnail mx-auto d-block\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 p-2\">\n      <img src=\"assets/img/marcas/copea.jpeg\" class=\"img-thumbnail mx-auto d-block\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 p-2\">\n      <img src=\"assets/img/marcas/rotoplas.jpg\" class=\"img-thumbnail mx-auto d-block\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 p-2\">\n      <img src=\"assets/img/marcas/tatsa.jpg\" class=\"img-thumbnail mx-auto d-block\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 p-2\">\n      <img src=\"assets/img/marcas/plastigama.jpeg\" class=\"img-thumbnail mx-auto d-block\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 p-2\">\n      <img src=\"assets/img/marcas/plasticos-ecuador.jpg\" class=\"img-thumbnail mx-auto d-block\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/page/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/page/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/page/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/page/management/management.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/page/management/management.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\n\t<div class=\"row\">\n\n\t\t<div class=\"col-md-12\">\n\n\t\t\t<h5 class=\"mt-5\">Gestión Ambiental</h5>\n\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa possimus, quae optio sequi, ullam iure porro quos, mollitia tempore blanditiis repellendus iste animi unde corporis adipisci dignissimos architecto itaque sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis et iusto! Ullam dolor velit, similique ab porro odit, consectetur, voluptates quaerat cupiditate nihil fugiat natus autem sit atque dolorem.</p>\n\n\t\t\t<div class=\"row mt-5\">\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card border-secondary\">\n\t\t\t\t\t\t<!-- <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\"> -->\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title personal-f-s-lg\">Gestión de Proyectos Ambientales</h5>\n\t\t\t\t\t\t\t<p class=\"card-text personal-f-s-md\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card border-secondary\">\n\t\t\t\t\t\t<!-- <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\"> -->\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title personal-f-s-lg\">Getión de Resíduos</h5>\n\t\t\t\t\t\t\t<p class=\"card-text personal-f-s-md\">This card has supporting text below as a natural lead-in to additional content.</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card border-secondary\">\n\t\t\t\t\t\t<!-- <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\"> -->\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title personal-f-s-lg\">Mantenimiento de Envases</h5>\n\t\t\t\t\t\t\t<p class=\"card-text personal-f-s-md\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/page/management/management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/page/management/management.component.ts ***!
  \********************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagementComponent = /** @class */ (function () {
    function ManagementComponent() {
    }
    ManagementComponent.prototype.ngOnInit = function () {
    };
    ManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management',
            template: __webpack_require__(/*! ./management.component.html */ "./src/app/components/page/management/management.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/page/products/products.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/products/products.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t<div class=\"row\">\n\n\t\t<div class=\"col-md-2 col-sm-12 mb-5 mt-5\">\n\t\t\t<h6>Filtros</h6>\n\t\t\t<h6 class=\"mt-2 personal-f-s-sm\">Tipos</h6>\n\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm border border-secondary mr-1 mt-1\">Cisterna</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">Tanque</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">Caneca</button>\n\t\t\t<h6 class=\"mt-2 personal-f-s-sm\">Material</h6>\n\t\t\t<button type=\"button\" class=\"btn btn-light  btn-sm border border-secondary mr-1 mt-1\">Cartón</button>\n\t\t\t<button type=\"button\" class=\"btn btn-success  btn-sm border border-secondary mr-1 mt-1\">Plástico</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light  btn-sm border border-secondary mr-1 mt-1\">Metál</button>\n\t\t\t<h6 class=\"mt-2 personal-f-s-sm\">Volumen</h6>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">10</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">20</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">30</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">40</button>\n\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm border border-secondary mr-1 mt-1\">50</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">60</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">70</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">80</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">90</button>\n\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border border-secondary mr-1 mt-1\">100</button>\n\t\t</div>\n\t\t<div class=\"col-md-1\"></div>\n\t\t<div class=\"col-md-9 col-sm-12 mb-5\">\n\n\t\t\t<h5 class=\"mt-5 mb-5 personal-c-n2\">Productos</h5>\n\n\t\t \t<div class=\"row p-0\">\n\t\t\t    <div class=\"col-md-4 col-sm-1 p-0 m-0\">\n\t\t\t      <ul class=\"list-unstyled\">\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m5.jpg\" alt=\"\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-2\">Tanque 50L <span class=\"badge badge-primary\">Promoción</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 50L</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50m</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m6.jpeg\" alt=\"Generic placeholder image\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-2\">Balde de 20L <span class=\"badge badge-success\">Disponible</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 50L</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50m</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m10.jpg\" alt=\"Generic placeholder image\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-1\">Cisterna 1000L <span class=\"badge badge-danger\">Agotado</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 50L</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50m</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t      </ul>\n\t\t\t    </div>\n\t\t\t    <div class=\"col-md-4 col-sm-12 p-0 m-0\">\n\t\t\t      <ul class=\"list-unstyled\">\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m17.jpg\" alt=\"Generic placeholder image\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-1\">Envase 40ml <span class=\"badge badge-success\">Disponible</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 50L</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50m</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m19.jpg\" alt=\"Generic placeholder image\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-1\">Envase 30ml <span class=\"badge badge-success\">Disponible</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 30ml</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50cm</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t      </ul>\n\t\t\t    </div>\n\t\t\t    <div class=\"col-md-4 col-sm-12 p-0 m-0\">\n\t\t\t      <ul class=\"list-unstyled\">\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m18.jpg\" alt=\"Generic placeholder image\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-1\">Envase 50ml <span class=\"badge badge-primary\">Promoción</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 50L</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50m</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t        <li class=\"media mb-5\">\n\t\t\t          <img class=\"mr-3\" src=\"assets/img/galery/m20.jpeg\" alt=\"Generic placeholder image\">\n\t\t\t          <div class=\"media-body\">\n\t\t\t            <h6 class=\"mt-0 mb-1\">Envase 30ml <span class=\"badge badge-primary\">Promoción</span></h6>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Capacidad: 30ml</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Radio: 0.50cm</p>\n\t\t\t            <p class=\"personal-f-s-sm mb-1\">- Tapa</p>\n\t\t\t          </div>\n\t\t\t        </li>\n\t\t\t      </ul>\n\t\t\t    </div>\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/page/products/products.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/products/products.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/page/products/products.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\jorge.tinoco\Proyectos\angular\envasesytanques\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map