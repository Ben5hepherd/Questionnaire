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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n    <banner></banner>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n<mat-spinner style=\"margin:0 auto; margin-top: 40px\" *ngIf=\"loadingSpinnerService.isSpinnerShowing\"></mat-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-question-dialog/add-question-dialog.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-question-dialog/add-question-dialog.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddQuestionDialogAddQuestionDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Add a new question</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n        <mat-label>Section</mat-label>\n        <mat-select [(ngModel)]=\"data.sectionId\">\n            <mat-option *ngFor=\"let section of data.sections\" [value]=\"section.id\">\n                {{section.name}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Text</mat-label>\n        <input matInput [(ngModel)]=\"data.text\">\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"secondary\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-section-dialog/add-section-dialog.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-section-dialog/add-section-dialog.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddSectionDialogAddSectionDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Add a new section</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput [(ngModel)]=\"data.name\">\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"secondary\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/answer/answer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/answer/answer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAnswerAnswerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"answer\">\n    <h4>{{answer.question.text}}</h4>\n    <mat-form-field>\n        <mat-label>Type answer here</mat-label>\n        <input matInput [(ngModel)]=\"answer.text\" (change)=\" updateAnswer()\">\n    </mat-form-field>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBannerBannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner\">\n    <div class=\"title\">Questionnaire App</div>\n    <div class=\"menu-item\">\n        <button mat-button class=\"home-menu-item\" (click)=\"navigateToHome()\">Home</button>\n    </div>\n    <div class=\"login-menu-item\" *ngIf=\"!this.authenticationService.currentUserEmail\">\n        <button mat-button class=\"login-menu-item\" (click)=\"navigateToLogin()\">Login</button>\n    </div>\n    <div class=\"login-menu-item\" *ngIf=\"this.authenticationService.currentUserEmail\">\n        <button mat-button class=\"login-menu-item\" (click)=\"this.authenticationService.logout()\">Logged in as\n            {{this.authenticationService.currentUserEmail}} | Logout</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"login-title\">Login or register an account</h2>\n\n<div class=\"login-cards\">\n    <div class=\"login-card\">\n        <mat-card class=\"login-form\">\n            <mat-card-header class=\"header\">\n                <mat-card-title>Login</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Email</mat-label>\n                        <input matInput [(ngModel)]=\"loginEmail\">\n                    </mat-form-field>\n                </div>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Password</mat-label>\n                        <input type=\"password\" matInput [(ngModel)]=\"loginPassword\">\n                    </mat-form-field>\n                </div>\n                <div>\n                    <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"login-card\" *ngIf=\"showRegisterAccount\">\n        <mat-card class=\"login-form\">\n            <mat-card-header class=\"header\">\n                <mat-card-title>Register an account</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Name</mat-label>\n                        <input matInput [(ngModel)]=\"registerName\">\n                    </mat-form-field>\n                </div>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Email</mat-label>\n                        <input matInput [(ngModel)]=\"registerEmail\">\n                    </mat-form-field>\n                </div>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Password</mat-label>\n                        <input type=\"password\" matInput [(ngModel)]=\"registerPassword\">\n                    </mat-form-field>\n                </div>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Confirm Password</mat-label>\n                        <input type=\"password\" matInput [(ngModel)]=\"registerPasswordConfirmation\">\n                    </mat-form-field>\n                </div>\n                <div>\n                    <button mat-raised-button color=\"primary\" (click)=\"register()\">Register</button>\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire-list/questionnaire-list.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire-list/questionnaire-list.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionnaireListQuestionnaireListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-questionnaire-button\">\n    <button mat-raised-button color=\"primary\" (click)=\"addQuestionnaire()\">Add Questionnaire!</button>\n</div>\n<div class=\"questionnaires-table\">\n    <table *ngIf=\"questionnairesList.length\" mat-table [dataSource]=\"questionnairesList\"\n        class=\"mat-elevation-z8 content\">\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> ID </th>\n            <td mat-cell *matCellDef=\"let questionnaire\"> {{questionnaire.id}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let questionnaire\"> {{questionnaire.name}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"createdDate\">\n            <th mat-header-cell *matHeaderCellDef> Created Date </th>\n            <td mat-cell *matCellDef=\"let questionnaire\"> {{questionnaire.createdDate}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"viewButton\">\n            <th mat-header-cell *matHeaderCellDef>*</th>\n            <td mat-cell *matCellDef=\"let questionnaire\">\n                <button mat-button color=\"primary\" (click)=\"viewQuestionnaire(questionnaire.id)\">View\n                    Questionnaire</button>\n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"responseButton\">\n            <th mat-header-cell *matHeaderCellDef>**</th>\n            <td mat-cell *matCellDef=\"let questionnaire\">\n                <button mat-button color=\"primary\" (click)=\"addResponse(questionnaire.id)\"\n                    *ngIf=\"this.authenticationService.currentUserEmail\">Add Response</button>\n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"responseListButton\">\n            <th mat-header-cell *matHeaderCellDef>***</th>\n            <td mat-cell *matCellDef=\"let questionnaire\">\n                <button mat-button color=\"primary\" (click)=\"viewResponses(questionnaire.id)\">View Responses</button>\n            </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire/questionnaire.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire/questionnaire.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionnaireQuestionnaireComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>{{name}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div class=\"action-buttons\">\r\n            <div class=\"add-section-button\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"openAddSectionDialog()\">Add Section</button>\r\n            </div>\r\n            <div class=\"add-question-button\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"openAddQuestionDialog()\">Add Question</button>\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let section of orderedSections\">\r\n            <section [name]=\"section.name\" [questions]=\"section.questions\"></section>\r\n            <br />\r\n            <hr>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response-list/response-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/response-list/response-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResponseListResponseListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"responses-container\">\n    <div>\n        <h2>Responses for Questionnaire: {{questionnaireName}}</h2>\n    </div>\n    <mat-accordion class=\"example-headers-align\" multi *ngFor=\"let response of responses\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{response.id}} - {{response.completedByUser.email}}\n                </mat-panel-title>\n                <mat-panel-description>\n                    DATE COMPLETED (TO-DO)\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div *ngFor=\"let section of response.sections\">\n                <mat-card>\n                    <mat-card-header>\n                        <mat-card-title>{{section.sectionOrdinal + 1}} - {{section.sectionName}}</mat-card-title>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <div *ngFor=\"let answer of section.answers\">\n                            <h4>{{answer.question.ordinal + 1}} - {{answer.question.text}}</h4>\n                            <p *ngIf=\"answer.text && answer.text.length > 0\">{{answer.text}}</p>\n                            <p *ngIf=\"!answer.text || answer.text.length === 0\">NO ANSWER GIVEN</p>\n                        </div>\n                    </mat-card-content>\n                </mat-card>\n                <br />\n            </div>\n        </mat-expansion-panel>\n    </mat-accordion>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response/response.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/response/response.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResponseResponseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"response\" class=\"response\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>Questionnaire: {{questionnaireName}}</mat-card-title>\n            <mat-card-title>Name: {{response.completedByUser.name}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <div *ngFor=\"let section of response.sections\">\n                <mat-card>\n                    <mat-card-header>\n                        <mat-card-title>{{section.sectionName}}</mat-card-title>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <answer *ngFor=\"let answer of section.answers\" [answer]=\"answer\"></answer>\n                    </mat-card-content>\n                </mat-card>\n                <br />\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSectionSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>{{name}}</h3>\n<div *ngFor=\"let question of orderedQuestions\">\n    {{question.ordinal + 1}}. {{question.text}}\n</div>\n<div *ngIf=\"!orderedQuestions || orderedQuestions.length === 0\" class=\"no-questions\">\n    <strong>No questions for this section yet!</strong>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/questionnaire/questionnaire.component */
    "./src/app/components/questionnaire/questionnaire.component.ts");
    /* harmony import */


    var _components_response_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/response/response.component */
    "./src/app/components/response/response.component.ts");
    /* harmony import */


    var _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/questionnaire-list/questionnaire-list.component */
    "./src/app/components/questionnaire-list/questionnaire-list.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/response-list/response-list.component */
    "./src/app/components/response-list/response-list.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'questionnaire-list',
      component: _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireListComponent"]
    }, {
      path: 'questionnaire/:id',
      component: _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireComponent"]
    }, {
      path: 'response/:id',
      component: _components_response_response_component__WEBPACK_IMPORTED_MODULE_4__["ResponseComponent"]
    }, {
      path: 'response-list/:id',
      component: _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__["ResponseListComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/loading-spinner.service */
    "./src/app/services/loading-spinner.service.ts");

    var AppComponent = function AppComponent(loadingSpinnerService) {
      _classCallCheck(this, AppComponent);

      this.loadingSpinnerService = loadingSpinnerService;
      this.title = 'questionnaire-app';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/questionnaire/questionnaire.component */
    "./src/app/components/questionnaire/questionnaire.component.ts");
    /* harmony import */


    var _components_response_response_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/response/response.component */
    "./src/app/components/response/response.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/questionnaire-list/questionnaire-list.component */
    "./src/app/components/questionnaire-list/questionnaire-list.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _components_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/add-question-dialog/add-question-dialog.component */
    "./src/app/components/add-question-dialog/add-question-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/add-section-dialog/add-section-dialog.component */
    "./src/app/components/add-section-dialog/add-section-dialog.component.ts");
    /* harmony import */


    var _components_section_section_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/section/section.component */
    "./src/app/components/section/section.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/banner/banner.component */
    "./src/app/components/banner/banner.component.ts");
    /* harmony import */


    var _app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../app/interceptors/token-interceptor */
    "./src/app/interceptors/token-interceptor.ts");
    /* harmony import */


    var _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/answer/answer.component */
    "./src/app/components/answer/answer.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/response-list/response-list.component */
    "./src/app/components/response-list/response-list.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireComponent"], _components_response_response_component__WEBPACK_IMPORTED_MODULE_6__["ResponseComponent"], _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_8__["QuestionnaireListComponent"], _components_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddQuestionDialogComponent"], _components_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddSectionDialogComponent"], _components_section_section_component__WEBPACK_IMPORTED_MODULE_22__["SectionComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_25__["BannerComponent"], _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_27__["AnswerComponent"], _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_30__["ResponseListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_26__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_32__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_32__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_components_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddSectionDialogComponent"], _components_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddQuestionDialogComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-question-dialog/add-question-dialog.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/add-question-dialog/add-question-dialog.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddQuestionDialogAddQuestionDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXF1ZXN0aW9uLWRpYWxvZy9hZGQtcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/add-question-dialog/add-question-dialog.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/add-question-dialog/add-question-dialog.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AddQuestionDialogComponent */

  /***/
  function srcAppComponentsAddQuestionDialogAddQuestionDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionDialogComponent", function () {
      return AddQuestionDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var AddQuestionDialogComponent = /*#__PURE__*/function () {
      function AddQuestionDialogComponent(dialogRef, data) {
        _classCallCheck(this, AddQuestionDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(AddQuestionDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return AddQuestionDialogComponent;
    }();

    AddQuestionDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddQuestionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-question-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-question-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-question-dialog/add-question-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-question-dialog.component.scss */
      "./src/app/components/add-question-dialog/add-question-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddQuestionDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/add-section-dialog/add-section-dialog.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/add-section-dialog/add-section-dialog.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddSectionDialogAddSectionDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNlY3Rpb24tZGlhbG9nL2FkZC1zZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/add-section-dialog/add-section-dialog.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/add-section-dialog/add-section-dialog.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddSectionDialogComponent */

  /***/
  function srcAppComponentsAddSectionDialogAddSectionDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSectionDialogComponent", function () {
      return AddSectionDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var AddSectionDialogComponent = /*#__PURE__*/function () {
      function AddSectionDialogComponent(dialogRef, data) {
        _classCallCheck(this, AddSectionDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(AddSectionDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return AddSectionDialogComponent;
    }();

    AddSectionDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddSectionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-section-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-section-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-section-dialog/add-section-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-section-dialog.component.scss */
      "./src/app/components/add-section-dialog/add-section-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddSectionDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/answer/answer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/answer/answer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAnswerAnswerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5zd2VyL2Fuc3dlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/answer/answer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/answer/answer.component.ts ***!
    \*******************************************************/

  /*! exports provided: AnswerComponent */

  /***/
  function srcAppComponentsAnswerAnswerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerComponent", function () {
      return AnswerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/answer.service */
    "./src/app/services/answer.service.ts");

    var AnswerComponent = /*#__PURE__*/function () {
      function AnswerComponent(answerService) {
        _classCallCheck(this, AnswerComponent);

        this.answerService = answerService;
      }

      _createClass(AnswerComponent, [{
        key: "updateAnswer",
        value: function updateAnswer() {
          var model = {
            AnswerId: this.answer.id,
            UpdatedText: this.answer.text
          };
          this.answerService.put(model).subscribe(function (result) {
            return result;
          });
        }
      }]);

      return AnswerComponent;
    }();

    AnswerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AnswerComponent.prototype, "answer", void 0);
    AnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'answer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./answer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/answer/answer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./answer.component.scss */
      "./src/app/components/answer/answer.component.scss"))["default"]]
    })], AnswerComponent);
    /***/
  },

  /***/
  "./src/app/components/banner/banner.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/banner/banner.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBannerBannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner {\n  display: inline-block;\n}\n\n.title {\n  display: inline-block;\n}\n\n.menu-item {\n  display: inline-block;\n  margin-left: 20px;\n}\n\n.login-menu-item {\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvQzpcXFVzZXJzXFxiY3NoZVxcc291cmNlXFxyZXBvc1xcUXVlc3Rpb25uYWlyZUFwcFxccXVlc3Rpb25uYWlyZS1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLW1lbnUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxufSIsIi5iYW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5sb2dpbi1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/banner/banner.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/banner/banner.component.ts ***!
    \*******************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent(router, authenticationService) {
        _classCallCheck(this, BannerComponent);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authenticationService.setCurrentUserEmail();
        }
      }, {
        key: "navigateToHome",
        value: function navigateToHome() {
          return this.router.navigateByUrl('/questionnaire-list');
        }
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          return this.router.navigateByUrl('');
        }
      }]);

      return BannerComponent;
    }();

    BannerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'banner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./banner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./banner.component.scss */
      "./src/app/components/banner/banner.component.scss"))["default"]]
    })], BannerComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-title {\n  text-align: center;\n}\n\n.login-cards {\n  text-align: center;\n}\n\n.login-card {\n  text-align: center;\n  margin: 10px;\n  display: inline-flex;\n}\n\n.login-card .header {\n  justify-content: center;\n}\n\n.login-form {\n  width: 300px;\n  text-align: center;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGJjc2hlXFxzb3VyY2VcXHJlcG9zXFxRdWVzdGlvbm5haXJlQXBwXFxxdWVzdGlvbm5haXJlLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREFJO0VBQ0ksdUJBQUE7QUNFUjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNhcmRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59IiwiLmxvZ2luLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tY2FyZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmxvZ2luLWNhcmQgLmhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authenticationService, snackBar) {
        _classCallCheck(this, LoginComponent);

        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.showRegisterAccount = true;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var model = {
            Email: this.loginEmail,
            Password: this.loginPassword
          };
          this.authenticationService.loginUser(model);
        }
      }, {
        key: "register",
        value: function register() {
          var _this = this;

          if (this.registerPassword !== this.registerPasswordConfirmation) {//throw error
          }

          var model = {
            Name: this.registerName,
            Email: this.registerEmail,
            Password: this.registerPassword
          };
          this.authenticationService.registerUser(model).subscribe(function (result) {
            _this.showRegisterAccount = false;

            _this.openAccountRegisteredSnackBar();
          });
        }
      }, {
        key: "openAccountRegisteredSnackBar",
        value: function openAccountRegisteredSnackBar() {
          this.snackBar.open('Account successfully registered', 'Close', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/questionnaire-list/questionnaire-list.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/questionnaire-list/questionnaire-list.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionnaireListQuestionnaireListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-questionnaire-button {\n  margin: 10px 0 10px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.questionnaires-table {\n  max-width: 800px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.questionnaires-table table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbm5haXJlLWxpc3QvQzpcXFVzZXJzXFxiY3NoZVxcc291cmNlXFxyZXBvc1xcUXVlc3Rpb25uYWlyZUFwcFxccXVlc3Rpb25uYWlyZS1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHF1ZXN0aW9ubmFpcmUtbGlzdFxccXVlc3Rpb25uYWlyZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtbGlzdC9xdWVzdGlvbm5haXJlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25uYWlyZS1saXN0L3F1ZXN0aW9ubmFpcmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcXVlc3Rpb25uYWlyZS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucXVlc3Rpb25uYWlyZXMtdGFibGUge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIuYWRkLXF1ZXN0aW9ubmFpcmUtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnF1ZXN0aW9ubmFpcmVzLXRhYmxlIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnF1ZXN0aW9ubmFpcmVzLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/questionnaire-list/questionnaire-list.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/questionnaire-list/questionnaire-list.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: QuestionnaireListComponent */

  /***/
  function srcAppComponentsQuestionnaireListQuestionnaireListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireListComponent", function () {
      return QuestionnaireListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _view_models_questionnaire_list_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../view_models/questionnaire-list-view-model */
    "./src/app/view_models/questionnaire-list-view-model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/response.service */
    "./src/app/services/response.service.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var QuestionnaireListComponent = /*#__PURE__*/function () {
      function QuestionnaireListComponent(questionnaireService, responseService, authenticationService, router) {
        _classCallCheck(this, QuestionnaireListComponent);

        this.questionnaireService = questionnaireService;
        this.responseService = responseService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.questionnairesList = [];
        this.displayedColumns = ['id', 'name', 'createdDate', 'viewButton', 'responseButton', 'responseListButton'];
      }

      _createClass(QuestionnaireListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllQuestionnaires();
        }
      }, {
        key: "getAllQuestionnaires",
        value: function getAllQuestionnaires() {
          var _this2 = this;

          this.questionnaireService.getAll().subscribe(function (questionnairesReturned) {
            questionnairesReturned.forEach(function (q) {
              var questionnaireToAdd = new _view_models_questionnaire_list_view_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
              questionnaireToAdd.id = q.id;
              questionnaireToAdd.name = q.name;
              questionnaireToAdd.createdDate = new Date(q.createdDate).toLocaleDateString();

              _this2.questionnairesList.push(questionnaireToAdd);
            });
          });
        }
      }, {
        key: "addQuestionnaire",
        value: function addQuestionnaire() {
          var model = {
            CreatedByUserId: 1,
            Name: "Test Questionnaire"
          };
          var questionnaireToAddToList = new _view_models_questionnaire_list_view_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
          questionnaireToAddToList.createdDate = new Date().toLocaleDateString();
          questionnaireToAddToList.name = model.Name;
          this.questionnaireService.post(model).subscribe(function (result) {
            return questionnaireToAddToList.id = result;
          });
          this.questionnairesList.push(questionnaireToAddToList);
        }
      }, {
        key: "viewQuestionnaire",
        value: function viewQuestionnaire(questionnaireId) {
          return this.router.navigateByUrl('/questionnaire/' + questionnaireId);
        }
      }, {
        key: "addResponse",
        value: function addResponse(questionnaireId) {
          var _this3 = this;

          var model = {
            QuestionnaireId: questionnaireId
          };
          this.responseService.post(model).subscribe(function (responseId) {
            return _this3.viewResponse(responseId);
          });
        }
      }, {
        key: "viewResponse",
        value: function viewResponse(responseId) {
          return this.router.navigateByUrl('/response/' + responseId);
        }
      }, {
        key: "viewResponses",
        value: function viewResponses(questionnaireId) {
          return this.router.navigateByUrl('/response-list/' + questionnaireId);
        }
      }]);

      return QuestionnaireListComponent;
    }();

    QuestionnaireListComponent.ctorParameters = function () {
      return [{
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        type: _services_response_service__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    QuestionnaireListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire-list/questionnaire-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire-list.component.scss */
      "./src/app/components/questionnaire-list/questionnaire-list.component.scss"))["default"]]
    })], QuestionnaireListComponent);
    /***/
  },

  /***/
  "./src/app/components/questionnaire/questionnaire.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/questionnaire/questionnaire.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionnaireQuestionnaireComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-card-header-text {\n  margin: 0px !important;\n}\n\n.action-buttons {\n  display: inline-block;\n}\n\n.add-section-button {\n  margin-right: 10px;\n  display: inline-block;\n}\n\n.add-question-button {\n  margin-right: 30px;\n  display: inline-block;\n}\n\n.add-response-button {\n  padding-top: 10px;\n  display: inline-block;\n}\n\n.no-questions {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbm5haXJlL0M6XFxVc2Vyc1xcYmNzaGVcXHNvdXJjZVxccmVwb3NcXFF1ZXN0aW9ubmFpcmVBcHBcXHF1ZXN0aW9ubmFpcmUtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxxdWVzdGlvbm5haXJlXFxxdWVzdGlvbm5haXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWRkLXNlY3Rpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFkZC1xdWVzdGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWRkLXJlc3BvbnNlLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5vLXF1ZXN0aW9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCI6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWRkLXNlY3Rpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGQtcXVlc3Rpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGQtcmVzcG9uc2UtYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5vLXF1ZXN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/questionnaire/questionnaire.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/questionnaire/questionnaire.component.ts ***!
    \*********************************************************************/

  /*! exports provided: QuestionnaireComponent */

  /***/
  function srcAppComponentsQuestionnaireQuestionnaireComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function () {
      return QuestionnaireComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var src_app_view_models_question_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/view_models/question-view-model */
    "./src/app/view_models/question-view-model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../add-question-dialog/add-question-dialog.component */
    "./src/app/components/add-question-dialog/add-question-dialog.component.ts");
    /* harmony import */


    var _add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../add-section-dialog/add-section-dialog.component */
    "./src/app/components/add-section-dialog/add-section-dialog.component.ts");
    /* harmony import */


    var src_app_view_models_section_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/view_models/section-view-model */
    "./src/app/view_models/section-view-model.ts");
    /* harmony import */


    var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/section.service */
    "./src/app/services/section.service.ts");

    var QuestionnaireComponent = /*#__PURE__*/function () {
      function QuestionnaireComponent(route, questionnaireService, questionService, sectionService, dialog) {
        _classCallCheck(this, QuestionnaireComponent);

        this.route = route;
        this.questionnaireService = questionnaireService;
        this.questionService = questionService;
        this.sectionService = sectionService;
        this.dialog = dialog;
      }

      _createClass(QuestionnaireComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this4.id = +params['id'];
          });
          this.questionnaireService.get(this.id).subscribe(function (result) {
            _this4.name = result.name;
            _this4.orderedSections = result.sections.sort(function (a, b) {
              return a.ordinal - b.ordinal;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "openAddSectionDialog",
        value: function openAddSectionDialog() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddSectionDialogComponent"], {
            width: '250px',
            data: {}
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this5.addSection(result.name);
            }
          });
        }
      }, {
        key: "openAddQuestionDialog",
        value: function openAddQuestionDialog() {
          var _this6 = this;

          var dialogRef = this.dialog.open(_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddQuestionDialogComponent"], {
            width: '250px',
            data: {
              sections: this.orderedSections
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this6.addQuestion(result.text, result.sectionId);
            }
          });
        }
      }, {
        key: "addQuestion",
        value: function addQuestion(text, sectionId) {
          var model = {
            Text: text,
            Ordinal: this.orderedSections.find(function (s) {
              return s.id === sectionId;
            }).questions.length,
            QuestionnaireId: this.id,
            SectionId: sectionId
          };
          var questionToAddToList = new src_app_view_models_question_view_model__WEBPACK_IMPORTED_MODULE_5__["default"]();
          questionToAddToList.text = model.Text;
          questionToAddToList.ordinal = model.Ordinal;
          this.questionService.post(model).subscribe(function (result) {
            questionToAddToList.id = result;
          });
          this.orderedSections.find(function (s) {
            return s.id === sectionId;
          }).questions.push(questionToAddToList);
        }
      }, {
        key: "addSection",
        value: function addSection(name) {
          var model = {
            Name: name,
            Ordinal: this.orderedSections.length,
            QuestionnaireId: this.id
          };
          var sectionToAddToList = new src_app_view_models_section_view_model__WEBPACK_IMPORTED_MODULE_9__["default"]();
          sectionToAddToList.name = model.Name;
          sectionToAddToList.ordinal = model.Ordinal;
          sectionToAddToList.questions = [];
          this.sectionService.post(model).subscribe(function (result) {
            sectionToAddToList.id = result;
          });
          this.orderedSections.push(sectionToAddToList);
        }
      }]);

      return QuestionnaireComponent;
    }();

    QuestionnaireComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        type: src_app_services_section_service__WEBPACK_IMPORTED_MODULE_10__["SectionService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    QuestionnaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire/questionnaire.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire.component.scss */
      "./src/app/components/questionnaire/questionnaire.component.scss"))["default"]]
    })], QuestionnaireComponent);
    /***/
  },

  /***/
  "./src/app/components/response-list/response-list.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/response-list/response-list.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResponseListResponseListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.responses-container {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zZS1saXN0L0M6XFxVc2Vyc1xcYmNzaGVcXHNvdXJjZVxccmVwb3NcXFF1ZXN0aW9ubmFpcmVBcHBcXHF1ZXN0aW9ubmFpcmUtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXNwb25zZS1saXN0XFxyZXNwb25zZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3BvbnNlLWxpc3QvcmVzcG9uc2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFOztFQUVFLGFBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3BvbnNlLWxpc3QvcmVzcG9uc2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFjdGlvbi1idXR0b25zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc3BvbnNlcy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4gIC5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfSIsIi5leGFtcGxlLWFjdGlvbi1idXR0b25zIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5yZXNwb25zZXMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/response-list/response-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/response-list/response-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ResponseListComponent */

  /***/
  function srcAppComponentsResponseListResponseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseListComponent", function () {
      return ResponseListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_response_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/response.service */
    "./src/app/services/response.service.ts");

    var ResponseListComponent = /*#__PURE__*/function () {
      function ResponseListComponent(route, responseService) {
        _classCallCheck(this, ResponseListComponent);

        this.route = route;
        this.responseService = responseService;
        this.questionnaireName = "To-do";
        this.responses = [];
      }

      _createClass(ResponseListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this7.questionnaireId = +params['id'];
          });
          this.responseService.getAll(this.questionnaireId).subscribe(function (result) {
            result.forEach(function (element) {
              _this7.responses.push(element);
            });
          });
        }
      }]);

      return ResponseListComponent;
    }();

    ResponseListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_response_service__WEBPACK_IMPORTED_MODULE_3__["default"]
      }];
    };

    ResponseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-response-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./response-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response-list/response-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./response-list.component.scss */
      "./src/app/components/response-list/response-list.component.scss"))["default"]]
    })], ResponseListComponent);
    /***/
  },

  /***/
  "./src/app/components/response/response.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/response/response.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResponseResponseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".response {\n  margin: 20px 50px 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zZS9DOlxcVXNlcnNcXGJjc2hlXFxzb3VyY2VcXHJlcG9zXFxRdWVzdGlvbm5haXJlQXBwXFxxdWVzdGlvbm5haXJlLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVzcG9uc2VcXHJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3BvbnNlL3Jlc3BvbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2UvcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2Uge1xyXG4gICAgbWFyZ2luOiAyMHB4IDUwcHggMCA1MHB4O1xyXG59IiwiLnJlc3BvbnNlIHtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMCA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/response/response.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/response/response.component.ts ***!
    \***********************************************************/

  /*! exports provided: ResponseComponent */

  /***/
  function srcAppComponentsResponseResponseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseComponent", function () {
      return ResponseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_response_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/response.service */
    "./src/app/services/response.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResponseComponent = /*#__PURE__*/function () {
      function ResponseComponent(route, responseService) {
        _classCallCheck(this, ResponseComponent);

        this.route = route;
        this.responseService = responseService;
        this.questionnaireName = "To-do";
      }

      _createClass(ResponseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this8.id = +params['id'];
          });
          this.responseService.get(this.id).subscribe(function (result) {
            _this8.response = result;
          });
        }
      }]);

      return ResponseComponent;
    }();

    ResponseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_response_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    ResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-response',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./response.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response/response.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./response.component.scss */
      "./src/app/components/response/response.component.scss"))["default"]]
    })], ResponseComponent);
    /***/
  },

  /***/
  "./src/app/components/section/section.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/section/section.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSectionSectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/section/section.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/section/section.component.ts ***!
    \*********************************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppComponentsSectionSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent() {
        _classCallCheck(this, SectionComponent);
      }

      _createClass(SectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.questions && this.questions.length > 1) {
            this.orderedQuestions = this.questions.sort(function (a, b) {
              return a.ordinal - b.ordinal;
            });
          } else {
            this.orderedQuestions = this.questions;
          }
        }
      }]);

      return SectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "questions", void 0);
    SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'section',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./section.component.scss */
      "./src/app/components/section/section.component.scss"))["default"]]
    })], SectionComponent);
    /***/
  },

  /***/
  "./src/app/interceptors/token-interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/token-interceptor.ts ***!
    \***************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/loading-spinner.service */
    "./src/app/services/loading-spinner.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(loadingSpinnerService) {
        _classCallCheck(this, TokenInterceptor);

        this.loadingSpinnerService = loadingSpinnerService;
        this.count = 0;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this9 = this;

          request = request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(localStorage.getItem('bearer-token'))
            }
          });
          setTimeout(function () {
            _this9.loadingSpinnerService.show();
          }, 0);
          this.count++;
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            return console.log(event);
          }, function (error) {
            return console.log(error);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this9.count--;

            if (_this9.count == 0) {
              setTimeout(function () {
                _this9.loadingSpinnerService.hide();
              }, 0);
            }
          }));
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/services/answer.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/answer.service.ts ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesAnswerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AnswerService = /*#__PURE__*/function () {
      function AnswerService(httpClient) {
        _classCallCheck(this, AnswerService);

        this.httpClient = httpClient;
      }

      _createClass(AnswerService, [{
        key: "put",
        value: function put(model) {
          return this.httpClient.put('http://localhost:4400/api/answer', model);
        }
      }]);

      return AnswerService;
    }();

    AnswerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AnswerService);
    /* harmony default export */

    __webpack_exports__["default"] = AnswerService;
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(httpClient, router) {
        _classCallCheck(this, AuthenticationService);

        this.httpClient = httpClient;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "registerUser",
        value: function registerUser(model) {
          return this.httpClient.post('http://localhost:4400/api/user', model);
        }
      }, {
        key: "loginUser",
        value: function loginUser(model) {
          var _this10 = this;

          return this.httpClient.post('http://localhost:4400/api/login', model).subscribe(function (result) {
            localStorage.setItem('current-user-email', model.Email);
            localStorage.setItem('bearer-token', result.token);

            _this10.setCurrentUserEmail();

            return _this10.router.navigateByUrl('/questionnaire-list');
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.currentUserEmail = null;
        }
      }, {
        key: "setCurrentUserEmail",
        value: function setCurrentUserEmail() {
          this.currentUserEmail = localStorage.getItem('current-user-email');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/loading-spinner.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/loading-spinner.service.ts ***!
    \*****************************************************/

  /*! exports provided: LoadingSpinnerService */

  /***/
  function srcAppServicesLoadingSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerService", function () {
      return LoadingSpinnerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingSpinnerService = /*#__PURE__*/function () {
      function LoadingSpinnerService() {
        _classCallCheck(this, LoadingSpinnerService);

        this.isSpinnerShowing = false;
      }

      _createClass(LoadingSpinnerService, [{
        key: "show",
        value: function show() {
          this.isSpinnerShowing = true;
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isSpinnerShowing = false;
        }
      }]);

      return LoadingSpinnerService;
    }();

    LoadingSpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoadingSpinnerService);
    /***/
  },

  /***/
  "./src/app/services/question.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/question.service.ts ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var QuestionService = /*#__PURE__*/function () {
      function QuestionService(httpClient) {
        _classCallCheck(this, QuestionService);

        this.httpClient = httpClient;
      }

      _createClass(QuestionService, [{
        key: "post",
        value: function post(model) {
          return this.httpClient.post('http://localhost:4400/api/question', model);
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionService);
    /* harmony default export */

    __webpack_exports__["default"] = QuestionService;
    /***/
  },

  /***/
  "./src/app/services/questionnaire.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/questionnaire.service.ts ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesQuestionnaireServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var QuestionnaireService = /*#__PURE__*/function () {
      function QuestionnaireService(httpClient) {
        _classCallCheck(this, QuestionnaireService);

        this.httpClient = httpClient;
      }

      _createClass(QuestionnaireService, [{
        key: "get",
        value: function get(id) {
          return this.httpClient.get('http://localhost:4400/api/questionnaire/' + id);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.httpClient.get('http://localhost:4400/api/questionnaire');
        }
      }, {
        key: "post",
        value: function post(model) {
          return this.httpClient.post('http://localhost:4400/api/questionnaire', model);
        }
      }]);

      return QuestionnaireService;
    }();

    QuestionnaireService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuestionnaireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionnaireService);
    /* harmony default export */

    __webpack_exports__["default"] = QuestionnaireService;
    /***/
  },

  /***/
  "./src/app/services/response.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/response.service.ts ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesResponseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ResponseService = /*#__PURE__*/function () {
      function ResponseService(httpClient) {
        _classCallCheck(this, ResponseService);

        this.httpClient = httpClient;
      }

      _createClass(ResponseService, [{
        key: "get",
        value: function get(id) {
          return this.httpClient.get('http://localhost:4400/api/response/' + id);
        }
      }, {
        key: "getAll",
        value: function getAll(questionnaireId) {
          return this.httpClient.get('http://localhost:4400/api/response/getResponsesByQuestionnaireId/' + questionnaireId);
        }
      }, {
        key: "post",
        value: function post(model) {
          return this.httpClient.post('http://localhost:4400/api/response', model);
        }
      }]);

      return ResponseService;
    }();

    ResponseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ResponseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ResponseService);
    /* harmony default export */

    __webpack_exports__["default"] = ResponseService;
    /***/
  },

  /***/
  "./src/app/services/section.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/section.service.ts ***!
    \*********************************************/

  /*! exports provided: SectionService */

  /***/
  function srcAppServicesSectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionService", function () {
      return SectionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SectionService = /*#__PURE__*/function () {
      function SectionService(httpClient) {
        _classCallCheck(this, SectionService);

        this.httpClient = httpClient;
      }

      _createClass(SectionService, [{
        key: "post",
        value: function post(model) {
          return this.httpClient.post('http://localhost:4400/api/section', model);
        }
      }]);

      return SectionService;
    }();

    SectionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SectionService);
    /***/
  },

  /***/
  "./src/app/view_models/question-view-model.ts":
  /*!****************************************************!*\
    !*** ./src/app/view_models/question-view-model.ts ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppView_modelsQuestionViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return QuestionViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var QuestionViewModel = function QuestionViewModel() {
      _classCallCheck(this, QuestionViewModel);
    };
    /***/

  },

  /***/
  "./src/app/view_models/questionnaire-list-view-model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/view_models/questionnaire-list-view-model.ts ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppView_modelsQuestionnaireListViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return QuestionnaireListViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var QuestionnaireListViewModel = function QuestionnaireListViewModel() {
      _classCallCheck(this, QuestionnaireListViewModel);
    };
    /***/

  },

  /***/
  "./src/app/view_models/section-view-model.ts":
  /*!***************************************************!*\
    !*** ./src/app/view_models/section-view-model.ts ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppView_modelsSectionViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return SectionViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SectionViewModel = function SectionViewModel() {
      _classCallCheck(this, SectionViewModel);
    };
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\bcshe\source\repos\QuestionnaireApp\questionnaire-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map