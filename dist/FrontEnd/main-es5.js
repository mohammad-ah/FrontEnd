function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_admin_ads_ads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/admin/ads/ads.component */
    "./src/app/components/admin/ads/ads.component.ts");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/users/users.component */
    "./src/app/components/users/users.component.ts");
    /* harmony import */


    var _components_following_following_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/following/following.component */
    "./src/app/components/following/following.component.ts");
    /* harmony import */


    var _services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/authGuard.service */
    "./src/app/services/authGuard.service.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'admin',
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
      canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: 'ads',
      component: _components_admin_ads_ads_component__WEBPACK_IMPORTED_MODULE_5__["AdsComponent"],
      canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'notifications',
      component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"],
      canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: 'users',
      component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
      canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: 'followings',
      component: _components_following_following_component__WEBPACK_IMPORTED_MODULE_8__["FollowingComponent"],
      canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/side-bar/side-bar.component */
    "./src/app/shared/side-bar/side-bar.component.ts");
    /* harmony import */


    var _components_home_ad_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/ad/ad.component */
    "./src/app/components/home/ad/ad.component.ts");

    function AppComponent_app_header_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 5);
      }
    }

    function AppComponent_app_side_bar_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-bar", 6);
      }
    }

    function AppComponent_app_ad_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ad");
      }
    }

    var AppComponent = function AppComponent(auth) {
      _classCallCheck(this, AppComponent);

      this.auth = auth;
      this.title = 'FrontEnd';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 3,
      consts: [["calss", "header", 4, "ngIf"], [1, "container"], ["class", "sidebar", 4, "ngIf"], [1, "content"], [4, "ngIf"], ["calss", "header"], [1, "sidebar"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 1, 0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_side_bar_4_Template, 1, 0, "app-side-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_ad_7_Template, 1, 0, "app-ad", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"], _components_home_ad_ad_component__WEBPACK_IMPORTED_MODULE_6__["AdComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 74px;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  float: left;\n  position: fixed;\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXE1JVVxcTVdBXFxGaW5hbFByb2plY3RcXEZyb250RW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogNzRweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNzRweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/not-found/not-found.component */
    "./src/app/shared/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/side-bar/side-bar.component */
    "./src/app/shared/side-bar/side-bar.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _store_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/reducers/post.reducer */
    "./src/app/store/reducers/post.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _components_admin_ads_ads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/admin/ads/ads.component */
    "./src/app/components/admin/ads/ads.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_admin_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/admin/header-admin/header-admin.component */
    "./src/app/components/admin/header-admin/header-admin.component.ts");
    /* harmony import */


    var _components_admin_unhealthy_unhealthy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/admin/unhealthy/unhealthy.component */
    "./src/app/components/admin/unhealthy/unhealthy.component.ts");
    /* harmony import */


    var _components_admin_filtered_filtered_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/admin/filtered/filtered.component */
    "./src/app/components/admin/filtered/filtered.component.ts");
    /* harmony import */


    var _components_admin_activations_activations_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/admin/activations/activations.component */
    "./src/app/components/admin/activations/activations.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");
    /* harmony import */


    var _components_home_ad_ad_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/home/ad/ad.component */
    "./src/app/components/home/ad/ad.component.ts");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/users/users.component */
    "./src/app/components/users/users.component.ts");
    /* harmony import */


    var _components_following_following_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/following/following.component */
    "./src/app/components/following/following.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({
        posts: _store_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_12__["postsReducer"]
      }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"], _components_admin_ads_ads_component__WEBPACK_IMPORTED_MODULE_18__["AdsComponent"], _components_admin_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_27__["HeaderAdminComponent"], _components_admin_unhealthy_unhealthy_component__WEBPACK_IMPORTED_MODULE_28__["UnhealthyComponent"], _components_admin_filtered_filtered_component__WEBPACK_IMPORTED_MODULE_29__["FilteredComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_32__["NotificationsComponent"], _components_admin_activations_activations_component__WEBPACK_IMPORTED_MODULE_30__["ActivationsComponent"], _components_home_ad_ad_component__WEBPACK_IMPORTED_MODULE_33__["AdComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_34__["UsersComponent"], _components_following_following_component__WEBPACK_IMPORTED_MODULE_35__["FollowingComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"], _components_admin_ads_ads_component__WEBPACK_IMPORTED_MODULE_18__["AdsComponent"], _components_admin_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_27__["HeaderAdminComponent"], _components_admin_unhealthy_unhealthy_component__WEBPACK_IMPORTED_MODULE_28__["UnhealthyComponent"], _components_admin_filtered_filtered_component__WEBPACK_IMPORTED_MODULE_29__["FilteredComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_32__["NotificationsComponent"], _components_admin_activations_activations_component__WEBPACK_IMPORTED_MODULE_30__["ActivationsComponent"], _components_home_ad_ad_component__WEBPACK_IMPORTED_MODULE_33__["AdComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_34__["UsersComponent"], _components_following_following_component__WEBPACK_IMPORTED_MODULE_35__["FollowingComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({
            posts: _store_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_12__["postsReducer"]
          }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/activations/activations.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/admin/activations/activations.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ActivationsComponent */

  /***/
  function srcAppComponentsAdminActivationsActivationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationsComponent", function () {
      return ActivationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ActivationsComponent_mat_card_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivationsComponent_mat_card_0_div_1_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.accept(item_r66);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accept");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivationsComponent_mat_card_0_div_1_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.refuse(item_r66);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Refuse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r66["userid"]["username"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r66["userid"]["email"]);
      }
    }

    function ActivationsComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivationsComponent_mat_card_0_div_1_Template, 10, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r66["reviewed"]);
      }
    }

    var ActivationsComponent = /*#__PURE__*/function () {
      function ActivationsComponent(adminService) {
        _classCallCheck(this, ActivationsComponent);

        this.adminService = adminService;
      }

      _createClass(ActivationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this = this;

          this.adminService.getActivations().subscribe(function (data) {
            console.log(data['data']);
            _this.data = data['data'];
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "accept",
        value: function accept(user) {
          var _this2 = this;

          this.adminService.acceptActivation(user['_id']).subscribe(function (data) {
            alert('success');

            _this2.loadData();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "refuse",
        value: function refuse(user) {
          var _this3 = this;

          this.adminService.refuseActivation(user['_id']).subscribe(function (data) {
            alert('success');

            _this3.loadData();
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return ActivationsComponent;
    }();

    ActivationsComponent.ɵfac = function ActivationsComponent_Factory(t) {
      return new (t || ActivationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
    };

    ActivationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivationsComponent,
      selectors: [["app-activations"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-button", "", 3, "click"]],
      template: function ActivationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ActivationsComponent_mat_card_0_Template, 2, 1, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWN0aXZhdGlvbnMvYWN0aXZhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activations',
          templateUrl: './activations.component.html',
          styleUrls: ['./activations.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-admin/header-admin.component */
    "./src/app/components/admin/header-admin/header-admin.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ads_ads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ads/ads.component */
    "./src/app/components/admin/ads/ads.component.ts");
    /* harmony import */


    var _filtered_filtered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filtered/filtered.component */
    "./src/app/components/admin/filtered/filtered.component.ts");
    /* harmony import */


    var _unhealthy_unhealthy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./unhealthy/unhealthy.component */
    "./src/app/components/admin/unhealthy/unhealthy.component.ts");
    /* harmony import */


    var _activations_activations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./activations/activations.component */
    "./src/app/components/admin/activations/activations.component.ts");

    function AdminComponent_app_ads_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ads");
      }
    }

    function AdminComponent_app_filtered_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filtered");
      }
    }

    function AdminComponent_app_unhealthy_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-unhealthy");
      }
    }

    function AdminComponent_app_activations_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-activations");
      }
    }

    var CurrentPage;

    (function (CurrentPage) {
      CurrentPage[CurrentPage["Ads"] = 0] = "Ads";
      CurrentPage[CurrentPage["Filtered"] = 1] = "Filtered";
      CurrentPage[CurrentPage["Unhealthy"] = 2] = "Unhealthy";
      CurrentPage[CurrentPage["Activations"] = 3] = "Activations";
    })(CurrentPage || (CurrentPage = {}));

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);

        this.currentPage = CurrentPage.Ads;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openAdsPage",
        value: function openAdsPage() {
          this.currentPage = CurrentPage.Ads;
        }
      }, {
        key: "openFilteredPage",
        value: function openFilteredPage() {
          this.currentPage = CurrentPage.Filtered;
        }
      }, {
        key: "openUnhealthyPage",
        value: function openUnhealthyPage() {
          this.currentPage = CurrentPage.Unhealthy;
        }
      }, {
        key: "openActivationsPage",
        value: function openActivationsPage() {
          this.currentPage = CurrentPage.Activations;
        }
      }, {
        key: "isAdsPage",
        value: function isAdsPage() {
          return this.currentPage === CurrentPage.Ads;
        }
      }, {
        key: "isFilteredPage",
        value: function isFilteredPage() {
          return this.currentPage === CurrentPage.Filtered;
        }
      }, {
        key: "isUnhealthyPage",
        value: function isUnhealthyPage() {
          return this.currentPage === CurrentPage.Unhealthy;
        }
      }, {
        key: "isActivationsPage",
        value: function isActivationsPage() {
          return this.currentPage === CurrentPage.Activations;
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 5,
      vars: 4,
      consts: [[3, "adsClicked", "filteredClicked", "unhealthyClicked", "activationsClicked"], [4, "ngIf"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header-admin", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("adsClicked", function AdminComponent_Template_app_header_admin_adsClicked_0_listener() {
            return ctx.openAdsPage();
          })("filteredClicked", function AdminComponent_Template_app_header_admin_filteredClicked_0_listener() {
            return ctx.openFilteredPage();
          })("unhealthyClicked", function AdminComponent_Template_app_header_admin_unhealthyClicked_0_listener() {
            return ctx.openUnhealthyPage();
          })("activationsClicked", function AdminComponent_Template_app_header_admin_activationsClicked_0_listener() {
            return ctx.openActivationsPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_app_ads_1_Template, 1, 0, "app-ads", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_app_filtered_2_Template, 1, 0, "app-filtered", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_app_unhealthy_3_Template, 1, 0, "app-unhealthy", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminComponent_app_activations_4_Template, 1, 0, "app-activations", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdsPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFilteredPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUnhealthyPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActivationsPage());
        }
      },
      directives: [_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_1__["HeaderAdminComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_3__["AdsComponent"], _filtered_filtered_component__WEBPACK_IMPORTED_MODULE_4__["FilteredComponent"], _unhealthy_unhealthy_component__WEBPACK_IMPORTED_MODULE_5__["UnhealthyComponent"], _activations_activations_component__WEBPACK_IMPORTED_MODULE_6__["ActivationsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/ads/ads.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/admin/ads/ads.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdsComponent */

  /***/
  function srcAppComponentsAdminAdsAdsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsComponent", function () {
      return AdsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AdsComponent = /*#__PURE__*/function () {
      function AdsComponent(adminService) {
        _classCallCheck(this, AdsComponent);

        this.adminService = adminService;
      }

      _createClass(AdsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pushAd",
        value: function pushAd() {
          this.adminService.pushAd({
            text: this.text,
            image: this.image,
            isAll: this.isAll
          }).subscribe(function (data) {
            alert('ad pushed');
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return AdsComponent;
    }();

    AdsComponent.ɵfac = function AdsComponent_Factory(t) {
      return new (t || AdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
    };

    AdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdsComponent,
      selectors: [["app-ads"]],
      decls: 12,
      vars: 3,
      consts: [[3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"]],
      template: function AdsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Text: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdsComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Image: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdsComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.image = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdsComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.isAll = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Is All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdsComponent_Template_a_click_10_listener() {
            return ctx.pushAd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Push");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isAll);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRzL2Fkcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ads',
          templateUrl: './ads.component.html',
          styleUrls: ['./ads.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/filtered/filtered.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/admin/filtered/filtered.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FilteredComponent */

  /***/
  function srcAppComponentsAdminFilteredFilteredComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilteredComponent", function () {
      return FilteredComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function FilteredComponent_mat_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilteredComponent_mat_list_item_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.switchAddEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Word");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FilteredComponent_mat_list_item_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilteredComponent_mat_list_item_2_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.editWord = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilteredComponent_mat_list_item_2_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.editDone();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Done");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.editWord);
      }
    }

    function FilteredComponent_mat_list_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r64.word, " ");
      }
    }

    var FilteredComponent = /*#__PURE__*/function () {
      function FilteredComponent(adminService) {
        _classCallCheck(this, FilteredComponent);

        this.adminService = adminService;
        this.isAddOrEdit = false;
        this.editWord = "";
      }

      _createClass(FilteredComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "switchAddEdit",
        value: function switchAddEdit() {
          this.isAddOrEdit = !this.isAddOrEdit;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this4 = this;

          this.adminService.getFiltered().subscribe(function (data) {
            console.log(data['data']);
            _this4.data = data['data'];
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "editDone",
        value: function editDone() {
          var _this5 = this;

          this.adminService.editFilter(this.editWord).subscribe(function (data) {
            console.log('success');

            _this5.switchAddEdit();

            _this5.editWord = "";

            _this5.loadData();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "editMe",
        value: function editMe(item) {
          this.editWord = item.word;
          this.switchAddEdit();
        }
      }]);

      return FilteredComponent;
    }();

    FilteredComponent.ɵfac = function FilteredComponent_Factory(t) {
      return new (t || FilteredComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
    };

    FilteredComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilteredComponent,
      selectors: [["app-filtered"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [3, "ngModel", "ngModelChange"]],
      template: function FilteredComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilteredComponent_mat_list_item_1_Template, 3, 0, "mat-list-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilteredComponent_mat_list_item_2_Template, 4, 1, "mat-list-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilteredComponent_mat_list_item_3_Template, 4, 1, "mat-list-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddOrEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddOrEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZmlsdGVyZWQvZmlsdGVyZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilteredComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-filtered',
          templateUrl: './filtered.component.html',
          styleUrls: ['./filtered.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/header-admin/header-admin.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/admin/header-admin/header-admin.component.ts ***!
    \*************************************************************************/

  /*! exports provided: HeaderAdminComponent */

  /***/
  function srcAppComponentsAdminHeaderAdminHeaderAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderAdminComponent", function () {
      return HeaderAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderAdminComponent = /*#__PURE__*/function () {
      function HeaderAdminComponent() {
        _classCallCheck(this, HeaderAdminComponent);

        this.adsClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filteredClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unhealthyClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activationsClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderAdminComponent;
    }();

    HeaderAdminComponent.ɵfac = function HeaderAdminComponent_Factory(t) {
      return new (t || HeaderAdminComponent)();
    };

    HeaderAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderAdminComponent,
      selectors: [["app-header-admin"]],
      outputs: {
        adsClicked: "adsClicked",
        filteredClicked: "filteredClicked",
        unhealthyClicked: "unhealthyClicked",
        activationsClicked: "activationsClicked"
      },
      decls: 14,
      vars: 0,
      consts: [[1, "list-horizontal"], ["mat-list-item", "", "routerLinkActive", "active", 3, "click"]],
      template: function HeaderAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderAdminComponent_Template_a_click_6_listener() {
            return ctx.adsClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderAdminComponent_Template_a_click_8_listener() {
            return ctx.filteredClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filtered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderAdminComponent_Template_a_click_10_listener() {
            return ctx.unhealthyClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unhealthy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderAdminComponent_Template_a_click_12_listener() {
            return ctx.activationsClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Activations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: ["mat-nav-list.list-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9oZWFkZXItYWRtaW4vRDpcXE1JVVxcTVdBXFxGaW5hbFByb2plY3RcXEZyb250RW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZG1pblxcaGVhZGVyLWFkbWluXFxoZWFkZXItYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vaGVhZGVyLWFkbWluL2hlYWRlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9oZWFkZXItYWRtaW4vaGVhZGVyLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LW5hdi1saXN0Lmxpc3QtaG9yaXpvbnRhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gfVxyXG4iLCJtYXQtbmF2LWxpc3QubGlzdC1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-admin',
          templateUrl: './header-admin.component.html',
          styleUrls: ['./header-admin.component.scss']
        }]
      }], function () {
        return [];
      }, {
        adsClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        filteredClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        unhealthyClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activationsClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/unhealthy/unhealthy.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/admin/unhealthy/unhealthy.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UnhealthyComponent */

  /***/
  function srcAppComponentsAdminUnhealthyUnhealthyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnhealthyComponent", function () {
      return UnhealthyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function UnhealthyComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnhealthyComponent_mat_card_0_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var item_r53 = ctx.$implicit;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.makeHealthy(item_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Make Healthy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53["userid"]["username"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53["text"]);
      }
    }

    var UnhealthyComponent = /*#__PURE__*/function () {
      function UnhealthyComponent(adminService) {
        _classCallCheck(this, UnhealthyComponent);

        this.adminService = adminService;
      }

      _createClass(UnhealthyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this6 = this;

          this.adminService.getUnhealthy().subscribe(function (data) {
            console.log(data['data']);
            _this6.data = data['data'];
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "makeHealthy",
        value: function makeHealthy(item) {
          var _this7 = this;

          this.adminService.disableUnhealthy(item['_id']).subscribe(function (data) {
            alert('success');

            _this7.loadData();
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return UnhealthyComponent;
    }();

    UnhealthyComponent.ɵfac = function UnhealthyComponent_Factory(t) {
      return new (t || UnhealthyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
    };

    UnhealthyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnhealthyComponent,
      selectors: [["app-unhealthy"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"]],
      template: function UnhealthyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnhealthyComponent_mat_card_0_Template, 8, 2, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vdW5oZWFsdGh5L3VuaGVhbHRoeS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnhealthyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unhealthy',
          templateUrl: './unhealthy.component.html',
          styleUrls: ['./unhealthy.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/following/following.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/following/following.component.ts ***!
    \*************************************************************/

  /*! exports provided: FollowingComponent */

  /***/
  function srcAppComponentsFollowingFollowingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingComponent", function () {
      return FollowingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function FollowingComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FollowingComponent_mat_card_2_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var following_r42 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.unfollow(following_r42._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UnFollow ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "person_add_disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var following_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](following_r42.username);
      }
    }

    var FollowingComponent = /*#__PURE__*/function () {
      function FollowingComponent(http, auth) {
        _classCallCheck(this, FollowingComponent);

        this.http = http;
        this.auth = auth;
      }

      _createClass(FollowingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.userId = this.auth.getId();
          this.http.get('http://127.0.0.1:3000/user/' + this.userId + '/followings').subscribe(function (data) {
            console.log(data);
            _this8.followings = data['followings'];
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "unfollow",
        value: function unfollow(id) {
          this.http.post('http://127.0.0.1:3000/user/unfollow', {
            followingId: id,
            id: this.userId
          }).subscribe(function (data) {
            console.log(data);
            window.location.reload();
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return FollowingComponent;
    }();

    FollowingComponent.ɵfac = function FollowingComponent_Factory(t) {
      return new (t || FollowingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    FollowingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FollowingComponent,
      selectors: [["app-following"]],
      decls: 3,
      vars: 1,
      consts: [[1, "followings-container"], ["class", "following-card", 4, "ngFor", "ngForOf"], [1, "following-card"], [1, "follow-content"], ["mat-button", "", "color", "primary", 1, "funollow-button", 3, "click"]],
      template: function FollowingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FollowingComponent_mat_card_2_Template, 9, 1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.followings);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: [".followings-container[_ngcontent-%COMP%] {\n  width: 700px;\n  height: auto;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.following-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  padding: 10px;\n  margin: 10px;\n}\n\n.follow-content[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n\n.funollow-button[_ngcontent-%COMP%] {\n  float: right;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3dpbmcvRDpcXE1JVVxcTVdBXFxGaW5hbFByb2plY3RcXEZyb250RW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb2xsb3dpbmdcXGZvbGxvd2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3dpbmcvZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3dpbmcvZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbGxvd2luZ3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM1LCAxMzUsIDEzNSwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3dpbmctY2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3ctY29udGVudCB7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5mdW5vbGxvdy1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XHJcbn1cclxuIiwiLmZvbGxvd2luZ3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM1LCAxMzUsIDEzNSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvbGxvd2luZy1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5mb2xsb3ctY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuXG4uZnVub2xsb3ctYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-following',
          templateUrl: './following.component.html',
          styleUrls: ['./following.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/ad/ad.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/home/ad/ad.component.ts ***!
    \****************************************************/

  /*! exports provided: AdComponent */

  /***/
  function srcAppComponentsHomeAdAdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdComponent", function () {
      return AdComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/ad.service */
    "./src/app/services/ad.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function AdComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.ad["text"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r74.ad["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AdComponent = /*#__PURE__*/function () {
      function AdComponent(adService) {
        _classCallCheck(this, AdComponent);

        this.adService = adService;
      }

      _createClass(AdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this9 = this;

          this.adService.getAd().subscribe(function (data) {
            console.log(data['data']);
            _this9.ad = data['data'];
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return AdComponent;
    }();

    AdComponent.ɵfac = function AdComponent_Factory(t) {
      return new (t || AdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]));
    };

    AdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdComponent,
      selectors: [["app-ad"]],
      decls: 1,
      vars: 1,
      consts: [["class", "ad", 4, "ngIf"], [1, "ad"], ["mat-card-image", "", 3, "src"]],
      template: function AdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdComponent_mat_card_0_Template, 4, 2, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ad);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"]],
      styles: [".ad[_ngcontent-%COMP%] {\n  width: 250px;\n  position: absolute;\n  margin-left: 919px;\n  top: 74px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2FkL0Q6XFxNSVVcXE1XQVxcRmluYWxQcm9qZWN0XFxGcm9udEVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcYWRcXGFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvYWQvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9hZC9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogOTE5cHg7XHJcbiAgdG9wOiA3NHB4O1xyXG59XHJcbiIsIi5hZCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogOTE5cHg7XG4gIHRvcDogNzRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ad',
          templateUrl: './ad.component.html',
          styleUrls: ['./ad.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/actions/post.actions */
    "./src/app/store/actions/post.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_sharedData_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/sharedData.service */
    "./src/app/services/sharedData.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function HomeComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errMsg);
      }
    }

    function HomeComponent_div_27_mat_sidenav_container_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_27_mat_sidenav_container_1_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var idx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.showDeleteSection(idx_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "post-edit_", post_r9.post._id, "");
      }
    }

    function HomeComponent_div_27_mat_sidenav_container_1_img_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
      }

      if (rf & 2) {
        var post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", post_r9.post.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return {
        "background-image": "url(../../assets/test.jpg)"
      };
    };

    function HomeComponent_div_27_mat_sidenav_container_1_mat_card_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r20.userid.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r20.text, " ");
      }
    }

    function HomeComponent_div_27_mat_sidenav_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_27_mat_sidenav_container_1_button_6_Template, 3, 1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_27_mat_sidenav_container_1_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r10 = ctx_r23.index;
          var post_r9 = ctx_r23.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.deletePost(idx_r10, post_r9.post._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_27_mat_sidenav_container_1_img_11_Template, 1, 1, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_27_mat_sidenav_container_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r10 = ctx_r26.index;
          var post_r9 = ctx_r26.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.likeUnlike(idx_r10, post_r9.post._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "thumb_up_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_27_mat_sidenav_container_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var idx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.showCommentsSection(idx_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Comments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-header", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Comment?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_div_27_mat_sidenav_container_1_Template_textarea_keyup_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r10 = ctx_r30.index;
          var post_r9 = ctx_r30.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.AddComment(idx_r10, post_r9.post._id, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_div_27_mat_sidenav_container_1_mat_card_36_Template, 8, 4, "mat-card", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var post_r9 = ctx_r31.$implicit;
        var idx_r10 = ctx_r31.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "post_", post_r9.post._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r9.post.userid.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r9.post.userid._id === ctx_r11.userId || post_r9.post.userid === ctx_r11.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "post-remove_", post_r9.post._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r11.delIdx !== idx_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r9.post.img);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r9.post.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r9.post.likes.length, " Likes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r11.postIdx !== idx_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r9.post.comments);
      }
    }

    function HomeComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_27_mat_sidenav_container_1_Template, 37, 15, "mat-sidenav-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r9.post._id);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(store, http, sharedDataService, auth) {
        _classCallCheck(this, HomeComponent);

        this.store = store;
        this.http = http;
        this.sharedDataService = sharedDataService;
        this.auth = auth;
        this.delIdx = null;
        this.postIdx = null;
        this.skip = 0;
        this.limit = 20;
        this.userId = null;
        this.userName = null;
        this.postText = null;
        this.postNotify = false;
        this.postImg = null;
        this.errMsg = '';
        this.posts = store.select('posts');
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.skip = 0;
          this.limit = 20;
          this.userId = this.auth.getId();
          this.userName = this.auth.getName();
          this.followers = this.auth.getFollowers();
          this.sharedDataService.setsShowNotification(false);
          this.loadPosts();
          this.socketConnect();
          this.updateNotifications();
        }
      }, {
        key: "showDeleteSection",
        value: function showDeleteSection(index) {
          if (this.delIdx === index) {
            this.delIdx = null;
          } else {
            this.delIdx = index;
          }
        }
      }, {
        key: "showCommentsSection",
        value: function showCommentsSection(index) {
          if (this.postIdx === index) {
            this.postIdx = null;
          } else {
            this.postIdx = index;
          }
        }
      }, {
        key: "deletePost",
        value: function deletePost(index, id) {
          var _this10 = this;

          var res = this.posts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
            // const index = result.findIndex(objInItems => new String(objInItems.post['_id']).trim() === new String(id).trim());
            // console.log(index, id);
            _this10.http.post('http://127.0.0.1:3000/post/remove', {
              id: id
            }).subscribe(function (data) {
              console.log(data);
              _this10.delIdx = null;
            }, function (error) {
              console.log(error);
            });

            _this10.store.dispatch(new _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["RemovePost"](index));
          });
        }
      }, {
        key: "likeUnlike",
        value: function likeUnlike(idx, pid) {
          var _this11 = this;

          this.posts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
            console.log(result);
            var index = result.findIndex(function (objInItems) {
              return new String(objInItems.post['_id']).trim() === new String(pid).trim();
            });
            var currentPost = result[index].post;
            var poss = JSON.stringify(currentPost);
            poss = JSON.parse(poss);
            console.log(poss['likes']); // let likeIndex = poss['likes'].findIndex(objInItems => new String(objInItems).trim() === new String(this.userId).trim());
            // if (likeIndex < 0) {

            var likeIndex = poss['likes'].findIndex(function (objInItems) {
              console.log(objInItems);

              if (objInItems.hasOwnProperty('userid')) {
                return new String(objInItems.userid._id).trim() === new String(_this11.userId).trim();
              } else {
                return new String(objInItems).trim() === new String(_this11.userId).trim();
              }
            }); // }

            console.log(likeIndex);

            if (likeIndex < 0) {
              if (poss['likes'] === undefined) {
                poss['likes'] = [_this11.userId];
              } else {
                poss['likes'].push(_this11.userId);
              }

              _this11.store.dispatch(new _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["AddLike"](idx, {
                post: poss
              })); // add like to DB


              _this11.http.post('http://127.0.0.1:3000/likes/like', {
                userid: _this11.userId,
                postid: pid
              }).subscribe(function (data) {
                console.log(data);
                _this11.delIdx = null;
              }, function (error) {
                console.log(error);
              });
            } else {
              if (poss['likes'].length === 1) {
                poss['likes'] = [];
              } else {
                poss['likes'].splice(likeIndex, 1);
              }

              _this11.store.dispatch(new _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveLike"](idx, {
                post: poss
              })); // remove like from DB


              _this11.http.post('http://127.0.0.1:3000/likes/dislike', {
                userid: _this11.userId,
                postid: pid
              }).subscribe(function (data) {
                console.log(data);
                _this11.delIdx = null;
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "AddComment",
        value: function AddComment(idx, pid, event) {
          var _this12 = this;

          var text = event.target.value;

          if (event.key == 'Enter') {
            console.log(event.key);
            this.posts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
              var index = result.findIndex(function (objInItems) {
                return new String(objInItems.post['_id']).trim() === new String(pid).trim();
              });
              var currentPost = result[index].post;
              var poss = JSON.stringify(currentPost);
              poss = JSON.parse(poss); // const likeIndex = poss['comments'].findIndex(objInItems => new String(objInItems).trim() === new String(pid).trim());

              var bodyRequest = {
                postid: pid,
                userid: _this12.userId,
                text: text
              };
              var comment = {
                text: text,
                userid: {
                  username: _this12.userName,
                  _id: _this12.userId
                }
              };

              if (poss['comments'] === undefined) {
                poss['comments'] = [comment];
              } else {
                poss['comments'].push(comment);
              }

              _this12.http.post('http://127.0.0.1:3000/comments/create-comment', bodyRequest).subscribe(function (data) {
                console.log(data);
                _this12.delIdx = null;
              }, function (error) {
                console.log(error);
              });

              _this12.store.dispatch(new _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["AddComment"](idx, {
                post: poss
              }));
            });
          }
        }
      }, {
        key: "loadMorePosts",
        value: function loadMorePosts() {
          this.skip += this.limit;
          this.loadPosts();
        }
      }, {
        key: "loadPosts",
        value: function loadPosts() {
          var _this13 = this;

          this.http.get('http://127.0.0.1:3000/get-posts/' + this.userId + '&' + this.skip + '&' + this.limit).subscribe(function (data) {
            var _iterator = _createForOfIteratorHelper(data['posts']),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var post = _step.value;

                _this13.store.dispatch(new _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["AddPost"]({
                  post: post
                }));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "addPost",
        value: function addPost() {
          var _this14 = this;

          if (this.postText === null && this.postImg === null) {
            this.errMsg = 'You should choose an image or write something!';
            return;
          }

          console.log('inside');
          var fd = new FormData();

          if (this.postImg !== null) {
            fd.append('image', this.postImg);
          }

          if (this.postText !== null) {
            fd.append('text', this.postText);
          } // console.log(this.postText);
          // console.log(this.postImg);


          fd.append('notifyusers', this.postNotify + '');
          fd.append('userid', this.userId); // console.log('inside 2')

          this.http.post('http://127.0.0.1:3000/post/create-post', fd).subscribe(function (data) {
            console.log(data);
            var post = data['post'];
            post['likes'] = [];
            post['comments'] = [];

            _this14.store.dispatch(new _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["AddPostFirst"]({
              post: post
            }));

            _this14.errMsg = null;

            _this14.sendNotification();
          }, function (error) {
            console.log(error);
          });
          console.log('outside');
        }
      }, {
        key: "imageSelected",
        value: function imageSelected(event) {
          this.postImg = event.target['files'][0];
        }
      }, {
        key: "sendNotification",
        value: function sendNotification() {
          console.log(this.followers);
          this.socket.emit('getMsg', {
            from: this.userId,
            toid: this.followers,
            msg: 'user have new post',
            name: 'PANDA MAIN'
          });
          console.log('message emitted');
        }
      }, {
        key: "socketConnect",
        value: function socketConnect() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000', {
            transports: ['websocket']
          });
          this.socket.emit('username', this.userId);
        }
      }, {
        key: "updateNotifications",
        value: function updateNotifications() {
          var _this15 = this;

          this.socket.on('sendMsg', function (data) {
            console.log('message recieved', data);

            _this15.sharedDataService.setsShowNotification(true);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sharedData_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 35,
      vars: 9,
      consts: [[1, "new-post-container"], [1, "new-post-card"], [1, ""], ["mat-card-avatar", "", 1, "post-header-image", 3, "ngStyle"], ["appearance", "fill", 1, "post-text-area"], ["matInput", "", "matTextareaAutosize", "false", 3, "ngModel", "rows", "ngModelChange"], [1, "post-action-buttons"], ["mat-button", "", "color", "primary"], ["for", "fileToUpload"], [1, "add-photo-icon"], ["id", "fileToUpload", "type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["mat-button", "", "color", "primary", 1, "post-button", 3, "click"], ["class", "err-msg", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "load-more"], [1, "load-more-content"], ["mat-icon-button", "", "color", "primary", "aria-label", "Load more posts", 1, "load-more-button", 3, "click"], [1, "err-msg"], ["class", "comments-container", 3, "id", 4, "ngIf"], [1, "comments-container", 3, "id"], [1, "post-card"], ["mat-card-avatar", "", 1, "example-header-image", 3, "ngStyle"], [1, "title"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon", "class", "edit-post", 3, "id", "click", 4, "ngIf"], [1, "remove-post-cont", 3, "id", "hidden"], ["mat-button", "", "color", "primary", 1, "remove-post", 3, "click"], [1, "img-container"], ["mat-card-image", "", "class", "img-article", "alt", "", 3, "src", 4, "ngIf"], [1, "action-buttons"], ["mat-button", "", "color", "primary", 3, "click"], [3, "hidden"], [1, "post-comment"], [1, "post-comment-header"], ["appearance", "fill", 1, "comment-text-area"], ["matInput", "", "matTextareaAutosize", "false", 3, "rows", "keyup"], ["class", "comments-card", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon", 1, "edit-post", 3, "id", "click"], ["mat-card-image", "", "alt", "", 1, "img-article", 3, "src"], [1, "comments-card"], [1, "comment-content"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Post Something");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What you feel?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_12_listener($event) {
            return ctx.postText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "add_photo_alternate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Add Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_19_listener($event) {
            return ctx.imageSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_checkbox_ngModelChange_20_listener($event) {
            return ctx.postNotify = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Notify Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_22_listener() {
            return ctx.addPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "near_me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_mat_error_26_Template, 2, 1, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_div_27_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-sidenav-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_32_listener() {
            return ctx.loadMorePosts();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.postText)("rows", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.postNotify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 6, ctx.posts));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".post-card[_ngcontent-%COMP%] {\n  margin-bottom: -8px;\n}\n\n.example-header-image[_ngcontent-%COMP%], .post-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  margin-bottom: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.img-article[_ngcontent-%COMP%] {\n  max-width: 666px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow: hidden;\n}\n\n.action-buttons[_ngcontent-%COMP%], .post-action-buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  border-top: 1px solid rgba(135, 135, 135, 0.5);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(135, 135, 135, 0.5);\n}\n\n.comments-container[_ngcontent-%COMP%], .new-post-container[_ngcontent-%COMP%] {\n  width: 700px;\n  height: auto;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.edit-post[_ngcontent-%COMP%] {\n  right: 0;\n  position: absolute;\n}\n\n.remove-post-cont[_ngcontent-%COMP%] {\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  right: 0;\n  position: absolute;\n  background-color: #f8f8f8fa;\n  min-width: 150px;\n  margin-top: 30px;\n}\n\n.remove-post[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.post-text-area[_ngcontent-%COMP%] {\n  float: left;\n  width: 91%;\n}\n\n.post-header-image[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.post-action-buttons[_ngcontent-%COMP%] {\n  clear: both;\n  color: #3f51b5;\n}\n\n.add-photo-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.post-button[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n\n.comment-content[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.comment-text-area[_ngcontent-%COMP%] {\n  width: 91%;\n}\n\n.new-post-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.load-more-button[_ngcontent-%COMP%] {\n  width: 700px;\n  height: auto;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  border-radius: 10px;\n  margin-bottom: 10px;\n  background-color: #4d5ebb;\n  color: white;\n}\n\n.load-more-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.err-msg[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxNSVVcXE1XQVxcRmluYWxQcm9qZWN0XFxGcm9udEVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsOENBQUE7QUNMRjs7QURRQTtFQUNFLGlEQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSwwQ0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9BO0VBQ0UsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDSEY7O0FES0E7RUFDRSxzQkFBQTtBQ0ZGOztBRElBO0VBQ0Usc0JBQUE7QUNERjs7QURJQTtFQUNFLHNCQUFBO0FDREY7O0FER0E7RUFDRSxVQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LXBvc3QtY29udGFpbmVyIHtcclxuICAvL21hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5wb3N0LWNhcmR7XHJcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlLCAucG9zdC1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1nLWFydGljbGV7XHJcbiAgbWF4LXdpZHRoOiA2NjZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIC8vd2lkdGg6IGF1dG87XHJcbiAgLy9tYXgtaGVpZ2h0OiA3MDBweDtcclxuXHJcbn1cclxuLmltZy1jb250YWluZXIge1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucywgLnBvc3QtYWN0aW9uLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XHJcbn1cclxuXHJcbi5jb21tZW50cy1jb250YWluZXIsIC5uZXctcG9zdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmVkaXQtcG9zdCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucmVtb3ZlLXBvc3QtY29udCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ZmE7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5yZW1vdmUtcG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3N0LXRleHQtYXJlYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDkxJTtcclxufVxyXG5cclxuLnBvc3QtaGVhZGVyLWltYWdlIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ucG9zdC1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuLmFkZC1waG90by1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5wb3N0LWJ1dHRvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuLmNvbW1lbnQtY29udGVudCB7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG4uY29tbWVudC10ZXh0LWFyZWEge1xyXG4gIHdpZHRoOiA5MSU7XHJcbn1cclxuXHJcbi5uZXctcG9zdC1jYXJkIG1hdC1jYXJkLXRpdGxlIHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxuLnBvc3QtY2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvYWQtbW9yZS1idXR0b24ge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1ZWJiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubG9hZC1tb3JlLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmVyci1tc2cge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLnBvc3QtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSwgLnBvc3QtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbWctYXJ0aWNsZSB7XG4gIG1heC13aWR0aDogNjY2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY3Rpb24tYnV0dG9ucywgLnBvc3QtYWN0aW9uLWJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG59XG5cbi5jb21tZW50cy1jb250YWluZXIsIC5uZXctcG9zdC1jb250YWluZXIge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZWRpdC1wb3N0IHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJlbW92ZS1wb3N0LWNvbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjhmYTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJlbW92ZS1wb3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0LXRleHQtYXJlYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogOTElO1xufVxuXG4ucG9zdC1oZWFkZXItaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnBvc3QtYWN0aW9uLWJ1dHRvbnMge1xuICBjbGVhcjogYm90aDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5hZGQtcGhvdG8taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wb3N0LWJ1dHRvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5jb21tZW50LWNvbnRlbnQge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4uY29tbWVudC10ZXh0LWFyZWEge1xuICB3aWR0aDogOTElO1xufVxuXG4ubmV3LXBvc3QtY2FyZCBtYXQtY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG4ucG9zdC1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvYWQtbW9yZS1idXR0b24ge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1ZWJiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2FkLW1vcmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lcnItbXNnIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _services_sharedData_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.error, " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, auth) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.auth = auth;
        this.credentials = {
          email: '',
          password: ''
        };
        this.adminUser = 'lionos';
        this.adminPass = 'happyPanda';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          asAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/home');
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          console.log(this.form.value.username);

          if (this.form.value.username === null || this.form.value.password === null) {
            this.error = 'Please fill username and password';
            return;
          }

          this.error = '';

          if (this.form.value.asAdmin !== undefined && this.form.value.asAdmin) {
            if (this.form.value.username === this.adminUser && this.form.value.password === this.adminPass) {
              this.router.navigateByUrl('/admin');
            }
          } else {
            this.login(this);
          }
        }
      }, {
        key: "login",
        value: function login(formGroup) {
          var _this16 = this;

          console.log(formGroup.form.value.username);
          this.auth.login(formGroup.form.value).subscribe(function () {
            _this16.router.navigateByUrl('/home');
          }, function (err) {
            _this16.error = 'Invalid credentials';
            console.error(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 15,
      vars: 2,
      consts: [[1, "login-form"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password"], ["formControlName", "asAdmin", "color", "primary"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-checkbox", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login As Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_p_14_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: white;\n  background-color: red;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  margin-right: 300px;\n  width: 433px;\n  min-height: 300px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxcTUlVXFxNV0FcXEZpbmFsUHJvamVjdFxcRnJvbnRFbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwMHB4IDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSxcclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIG1hcmdpbi1yaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDQzM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O31cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDMzcHg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/notifications/notifications.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function NotificationsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " From ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "user/", notification_r34.from._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r34.from.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r34.text, " ");
      }
    }

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent(http) {
        _classCallCheck(this, NotificationsComponent);

        this.http = http;
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.userId = '5e8bcb6c258256022cac8a0c';
          this.http.get('http://127.0.0.1:3000/notifications/get/' + this.userId).subscribe(function (data) {
            console.log(data);
            _this17.notifications = data['notifications'];

            _this17.notifications.forEach(function (notification) {
              _this17.http.post('http://127.0.0.1:3000/notifications/read/' + notification['_id'] + '/' + _this17.userId, {}).subscribe(function (postData) {
                console.log(postData);
              }, function (error) {
                console.log(error);
              });
            });
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [1, "notification-container"], [1, "notification-card"], [3, "href"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationsComponent_div_0_Template, 9, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]],
      styles: [".notification-container[_ngcontent-%COMP%] {\n  width: 700px;\n  height: auto;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.notification-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL0Q6XFxNSVVcXE1XQVxcRmluYWxQcm9qZWN0XFxGcm9udEVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uc1xcbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1jYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4iLCIubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ub3RpZmljYXRpb24tY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications',
          templateUrl: './notifications.component.html',
          styleUrls: ['./notifications.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.error, " ");
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(auth, router) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this18 = this;

          console.log(this.form.value);
          this.auth.register(this.form.value).subscribe(function () {
            _this18.router.navigateByUrl('/login');
          }, function (err) {
            _this18.error = 'Invalid credentials';
            console.error(err);
          });
        }
      }, {
        key: "login",
        value: function login(formGroup) {// console.log(formGroup.form.value.username);
          // this.auth.login(formGroup.form.value).subscribe(() => {
          //   this.router.navigateByUrl('/login');
          // }, (err) => {
          //   this.error = 'Invalid credentials';
          //
          //   console.error(err);
          // });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 15,
      vars: 2,
      consts: [[1, "login-form"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password"], ["type", "email", "matInput", "", "placeholder", "email", "formControlName", "email"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegisterComponent_p_14_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: white;\n  background-color: red;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  margin-right: 300px;\n  width: 433px;\n  min-height: 300px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9EOlxcTUlVXFxNV0FcXEZpbmFsUHJvamVjdFxcRnJvbnRFbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwMHB4IDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSxcclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIG1hcmdpbi1yaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDQzM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O31cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDMzcHg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)();
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 2,
      vars: 0,
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signup works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/users/users.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/users/users.component.ts ***!
    \*****************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UsersComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_mat_card_2_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var user_r37 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.follow(user_r37._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Follow ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "person_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r37.username);
      }
    }

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(http, auth) {
        _classCallCheck(this, UsersComponent);

        this.http = http;
        this.auth = auth;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.userId = this.userId = this.auth.getId();
          this.http.post('http://127.0.0.1:3000/user/list', {
            id: this.userId
          }).subscribe(function (data) {
            console.log(data);
            _this19.users = data['users'];
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "follow",
        value: function follow(id) {
          this.http.post('http://127.0.0.1:3000/user/follow', {
            id: this.userId,
            followerId: id
          }).subscribe(function (data) {
            console.log(data);
            window.location.reload();
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 3,
      vars: 1,
      consts: [[1, "users-container"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "user-content"], ["mat-flat-button", "", "color", "primary", 1, "follow-button", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_mat_card_2_Template, 9, 1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: [".users-container[_ngcontent-%COMP%] {\n  width: 700px;\n  height: auto;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(135, 135, 135, 0.5);\n  padding: 10px;\n  margin: 10px;\n}\n\n.user-content[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n\n.follow-button[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9EOlxcTUlVXFxNV0FcXEZpbmFsUHJvamVjdFxcRnJvbnRFbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzZXJzXFx1c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1jYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM1LCAxMzUsIDEzNSwgMC41KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnVzZXItY29udGVudCB7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5mb2xsb3ctYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwiLnVzZXJzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi51c2VyLWNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ad.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/ad.service.ts ***!
    \****************************************/

  /*! exports provided: AdService */

  /***/
  function srcAppServicesAdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdService", function () {
      return AdService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AdService = /*#__PURE__*/function () {
      function AdService(httpClient) {
        _classCallCheck(this, AdService);

        this.httpClient = httpClient;
      }

      _createClass(AdService, [{
        key: "getAd",
        value: function getAd() {
          return this.httpClient.get('http://localhost:3000/admin/ad');
        }
      }]);

      return AdService;
    }();

    AdService.ɵfac = function AdService_Factory(t) {
      return new (t || AdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdService,
      factory: AdService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/admin.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(httpClient) {
        _classCallCheck(this, AdminService);

        this.httpClient = httpClient;
      }

      _createClass(AdminService, [{
        key: "getFiltered",
        value: function getFiltered() {
          return this.httpClient.get('http://localhost:3000/admin/filtered');
        }
      }, {
        key: "editFilter",
        value: function editFilter(word) {
          return this.httpClient.post('http://localhost:3000/admin/addFilter', {
            word: word
          });
        }
      }, {
        key: "pushAd",
        value: function pushAd(body) {
          return this.httpClient.post('http://localhost:3000/admin/pushAd', body);
        }
      }, {
        key: "getUnhealthy",
        value: function getUnhealthy() {
          return this.httpClient.get('http://localhost:3000/admin/unhealthy-post');
        }
      }, {
        key: "disableUnhealthy",
        value: function disableUnhealthy(id) {
          return this.httpClient.post('http://localhost:3000/admin/disable-unhealthy', {
            id: id
          });
        }
      }, {
        key: "getActivations",
        value: function getActivations() {
          return this.httpClient.get('http://localhost:3000/admin/activations');
        }
      }, {
        key: "acceptActivation",
        value: function acceptActivation(id) {
          return this.httpClient.post('http://localhost:3000/admin/accept-activation', {
            id: id
          });
        }
      }, {
        key: "refuseActivation",
        value: function refuseActivation(id) {
          return this.httpClient.post('http://localhost:3000/admin/refuse-activation', {
            id: id
          });
        }
      }]);

      return AdminService;
    }();

    AdminService.ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authGuard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/authGuard.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth, router) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('mean-token', token);
          this.token = token;
        }
      }, {
        key: "saveId",
        value: function saveId(id) {
          localStorage.setItem('mean-id', id);
          this.id = id;
        }
      }, {
        key: "saveName",
        value: function saveName(name) {
          localStorage.setItem('mean-name', name);
          this.name = name;
        }
      }, {
        key: "saveFollowers",
        value: function saveFollowers(followers) {
          localStorage.setItem('mean-followers', followers);
          this.followers = followers;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem('mean-token');
          }

          return this.token;
        }
      }, {
        key: "getId",
        value: function getId() {
          if (!this.id) {
            this.id = localStorage.getItem('mean-id');
          }

          return this.id;
        }
      }, {
        key: "getName",
        value: function getName() {
          if (!this.name) {
            this.name = localStorage.getItem('mean-id');
          }

          return this.name;
        }
      }, {
        key: "getFollowers",
        value: function getFollowers() {
          if (!this.followers) {
            this.followers = localStorage.getItem('mean-followers');
          }

          return this.followers;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = '';
          window.localStorage.removeItem('mean-token');
          this.router.navigateByUrl('/');
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();
          var payload;

          if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getUserDetails();

          if (user) {
            return user.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
      }, {
        key: "request",
        value: function request(method, type, user) {
          var _this20 = this;

          var base;

          if (method === 'post') {
            base = this.http.post('http://localhost:3000/user/' + type, user);
          } else {
            base = this.http.get('http://localhost:3000/user/' + type, {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          }

          console.log(base);
          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            console.log(data);

            if (data['token']) {
              _this20.saveToken(data['token']);

              _this20.saveId(data['user']._id);

              _this20.saveName(data['user'].username);

              _this20.saveFollowers(data['user'].followers);

              console.log(data['user']);
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "login",
        value: function login(user) {
          console.log(user);
          return this.request('post', 'login', user);
        }
      }, {
        key: "register",
        value: function register(value) {
          return this.request('post', 'register', value);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/sharedData.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/sharedData.service.ts ***!
    \************************************************/

  /*! exports provided: SharedDataService */

  /***/
  function srcAppServicesSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedDataService", function () {
      return SharedDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedDataService = /*#__PURE__*/function () {
      function SharedDataService() {
        _classCallCheck(this, SharedDataService);

        this.newNotification = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newNotification$ = this.newNotification.asObservable();
      }

      _createClass(SharedDataService, [{
        key: "getsNewNotification",
        value: function getsNewNotification() {
          return this.newNotification$;
        }
      }, {
        key: "setsShowNotification",
        value: function setsShowNotification(newNot) {
          this.newNotification.next(newNot);
        }
      }]);

      return SharedDataService;
    }();

    SharedDataService.ɵfac = function SharedDataService_Factory(t) {
      return new (t || SharedDataService)();
    };

    SharedDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedDataService,
      factory: SharedDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_sharedData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/sharedData.service */
    "./src/app/services/sharedData.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications_active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(sharedDataService, auth) {
        _classCallCheck(this, HeaderComponent);

        this.sharedDataService = sharedDataService;
        this.auth = auth;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.sharedDataService.getsNewNotification().subscribe(function (data) {
            console.log('observing', data);
            _this21.newNotifications = data;
            console.log(_this21.newNotifications);
          });
          console.log('notific', this.newNotifications);
        }
      }, {
        key: "logout",
        value: function logout() {
          console.log('out');
          this.auth.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sharedData_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 12,
      vars: 3,
      consts: [["color", "primary", 1, "main-toolbar"], [1, "content"], ["href", "/home"], ["type", "text", "matInput", "", 1, "search-area"], ["mat-icon-button", "", "color", "primary", "aria-label", "Load more posts", 1, "search-button"], ["mat-icon-button", "", "routerLink", "notifications", "color", "warn", "aria-label", "Load more posts", "class", "notifications-button", 4, "ngIf"], ["mat-icon-button", "", "routerLink", "notifications", "color", "secondary", "aria-label", "Load more posts", "class", "notifications-button", 4, "ngIf"], ["mat-icon-button", "", "routerLink", "logout", "color", "secondary", "aria-label", "Load more posts", "class", "logout-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "routerLink", "notifications", "color", "warn", "aria-label", "Load more posts", 1, "notifications-button"], ["mat-icon-button", "", "routerLink", "notifications", "color", "secondary", "aria-label", "Load more posts", 1, "notifications-button"], ["mat-icon-button", "", "routerLink", "logout", "color", "secondary", "aria-label", "Load more posts", 1, "logout-button", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "liLCPanda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_button_9_Template, 3, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_button_10_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_button_11_Template, 4, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newNotifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newNotifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
      styles: [".main-toolbar[_ngcontent-%COMP%] {\n  color: white;\n  position: fixed;\n  z-index: 999;\n}\n\n.search-area[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: white;\n  color: black;\n  margin-left: 10px;\n  width: calc(100% - 30px);\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 50%;\n  align-content: center;\n  margin: 0 auto;\n}\n\n.notifications-button[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  margin-left: -34px;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  right: 60px;\n  position: absolute;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9EOlxcTUlVXFxNV0FcXEZpbmFsUHJvamVjdFxcRnJvbnRFbmQvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRvb2xiYXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcbi5zZWFyY2gtYXJlYSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzRweDtcclxufVxyXG5cclxuLmxvZ291dC1idXR0b24ge1xyXG4gIHJpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCIubWFpbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnNlYXJjaC1hcmVhIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA1MCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ub3RpZmljYXRpb25zLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMzRweDtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICByaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_sharedData_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/not-found/not-found.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/not-found/not-found.component.ts ***!
    \*********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppSharedNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/side-bar/side-bar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
    \*******************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppSharedSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var SideBarComponent = /*#__PURE__*/function () {
      function SideBarComponent() {
        _classCallCheck(this, SideBarComponent);
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideBarComponent;
    }();

    SideBarComponent.ɵfac = function SideBarComponent_Factory(t) {
      return new (t || SideBarComponent)();
    };

    SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideBarComponent,
      selectors: [["app-side-bar"]],
      decls: 11,
      vars: 0,
      consts: [[1, "following-cad"], ["mat-button", "", "routerLink", "followings", "color", "primary", "aria-label", "Load more posts", 1, "buttons", "following-button"], ["mat-button", "", "routerLink", "users", "color", "primary", "aria-label", "Load more posts", 1, "buttons", "users-button"]],
      template: function SideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "group_add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".following-cad[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin-top: -15px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #3f51b5;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL0Q6XFxNSVVcXE1XQVxcRmluYWxQcm9qZWN0XFxGcm9udEVuZC9zcmNcXGFwcFxcc2hhcmVkXFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9sbG93aW5nLWNhZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zOmhvdmVyIHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCIuZm9sbG93aW5nLWNhZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b25zOmhvdmVyIHtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-bar',
          templateUrl: './side-bar.component.html',
          styleUrls: ['./side-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/actions/post.actions.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/actions/post.actions.ts ***!
    \***********************************************/

  /*! exports provided: ADD_POST, LIST_POSTS, REMOVE_POST, ADD_LIKE, REMOVE_LIKE, ADD_COMMENT, ADD_FIRST, AddPost, ListPosts, RemovePost, AddLike, RemoveLike, AddComment, AddPostFirst */

  /***/
  function srcAppStoreActionsPostActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_POST", function () {
      return ADD_POST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIST_POSTS", function () {
      return LIST_POSTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REMOVE_POST", function () {
      return REMOVE_POST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_LIKE", function () {
      return ADD_LIKE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REMOVE_LIKE", function () {
      return REMOVE_LIKE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_COMMENT", function () {
      return ADD_COMMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_FIRST", function () {
      return ADD_FIRST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPost", function () {
      return AddPost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPosts", function () {
      return ListPosts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemovePost", function () {
      return RemovePost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLike", function () {
      return AddLike;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveLike", function () {
      return RemoveLike;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComment", function () {
      return AddComment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostFirst", function () {
      return AddPostFirst;
    }); // Section 2


    var ADD_POST = '[POST] Add';
    var LIST_POSTS = '[POST] List';
    var REMOVE_POST = '[POST] Remove';
    var ADD_LIKE = '[POST] Like';
    var REMOVE_LIKE = '[POST] DisLike';
    var ADD_COMMENT = '[POST] Comment';
    var ADD_FIRST = '[POST] AddFirst'; // Section 3

    var AddPost = function AddPost(payload) {
      _classCallCheck(this, AddPost);

      this.payload = payload;
      this.type = ADD_POST;
    };

    var ListPosts = function ListPosts(payload) {
      _classCallCheck(this, ListPosts);

      this.payload = payload;
      this.type = LIST_POSTS;
    };

    var RemovePost = function RemovePost(payload) {
      _classCallCheck(this, RemovePost);

      this.payload = payload;
      this.type = REMOVE_POST;
    };

    var AddLike = function AddLike(idx, pid) {
      _classCallCheck(this, AddLike);

      this.idx = idx;
      this.pid = pid;
      this.type = ADD_LIKE;
    };

    var RemoveLike = function RemoveLike(idx, pid) {
      _classCallCheck(this, RemoveLike);

      this.idx = idx;
      this.pid = pid;
      this.type = REMOVE_LIKE;
    };

    var AddComment = function AddComment(idx, post) {
      _classCallCheck(this, AddComment);

      this.idx = idx;
      this.post = post;
      this.type = ADD_COMMENT;
    };

    var AddPostFirst = function AddPostFirst(post) {
      _classCallCheck(this, AddPostFirst);

      this.post = post;
      this.type = ADD_FIRST;
    };
    /***/

  },

  /***/
  "./src/app/store/reducers/post.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/post.reducer.ts ***!
    \************************************************/

  /*! exports provided: postsReducer */

  /***/
  function srcAppStoreReducersPostReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postsReducer", function () {
      return postsReducer;
    });
    /* harmony import */


    var _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../store/actions/post.actions */
    "./src/app/store/actions/post.actions.ts"); // Section 1


    var initialState = {
      post: {
        text: 'test'
      }
    }; // Section 2

    function postsReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [initialState];
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var idx = -1; // Section 3

      switch (action.type) {
        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["LIST_POSTS"]:
          return state;

        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_POST"]:
          return [].concat(_toConsumableArray(state), [action.payload]);

        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_FIRST"]:
          return [action.post].concat(_toConsumableArray(state));

        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_POST"]:
          idx = action.payload;
          return [].concat(_toConsumableArray(state.slice(0, idx)), _toConsumableArray(state.slice(idx + 1)));

        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LIKE"]:
          idx = action.idx;
          return [].concat(_toConsumableArray(state.slice(0, idx)), [action.pid], _toConsumableArray(state.slice(idx + 1)));

        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_LIKE"]:
          idx = action.idx;
          return [].concat(_toConsumableArray(state.slice(0, idx)), [action.pid], _toConsumableArray(state.slice(idx + 1)));

        case _store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_COMMENT"]:
          idx = action.idx;
          return [].concat(_toConsumableArray(state.slice(0, idx)), [action.post], _toConsumableArray(state.slice(idx + 1)));

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/compiler */
    "./node_modules/@angular/compiler/fesm2015/compiler.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\MIU\MWA\FinalProject\FrontEnd\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map