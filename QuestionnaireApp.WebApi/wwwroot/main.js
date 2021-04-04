(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n    <banner></banner>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n<mat-spinner style=\"margin:0 auto; margin-top: 40px\" *ngIf=\"loadingSpinnerService.isSpinnerShowing\"></mat-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-question-dialog/add-question-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-question-dialog/add-question-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add a new question</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field>\r\n        <mat-label>Section</mat-label>\r\n        <mat-select [(ngModel)]=\"data.sectionId\">\r\n            <mat-option *ngFor=\"let section of data.sections\" [value]=\"section.id\">\r\n                {{section.name}}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-label>Text</mat-label>\r\n        <input matInput [(ngModel)]=\"data.text\">\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button color=\"secondary\" (click)=\"onNoClick()\">Cancel</button>\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add a new questionnaire</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput [(ngModel)]=\"data.name\">\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"secondary\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-section-dialog/add-section-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-section-dialog/add-section-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add a new section</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field>\r\n        <mat-label>Name</mat-label>\r\n        <input matInput [(ngModel)]=\"data.name\">\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button color=\"secondary\" (click)=\"onNoClick()\">Cancel</button>\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/answer/answer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/answer/answer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"answer\">\r\n    <h4>{{answer.question.text}}</h4>\r\n    <mat-form-field>\r\n        <mat-label>Type answer here</mat-label>\r\n        <input matInput [(ngModel)]=\"answer.text\" (change)=\" updateAnswer()\">\r\n    </mat-form-field>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner\">\r\n    <div class=\"title\">Questionnaire App</div>\r\n    <div class=\"menu-item\">\r\n        <button mat-button class=\"home-menu-item\" (click)=\"navigateToHome()\">Home</button>\r\n    </div>\r\n    <div class=\"login-menu-item\" *ngIf=\"!authenticationService.currentUserEmail\">\r\n        <button mat-button class=\"login-menu-item\" (click)=\"navigateToLogin()\">Login</button>\r\n    </div>\r\n    <div class=\"login-menu-item\" *ngIf=\"authenticationService.currentUserEmail\">\r\n        <button mat-button class=\"login-menu-item\" (click)=\"authenticationService.logout()\">Logged in as\r\n            {{authenticationService.currentUserEmail}} | Logout</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"login-title\">Login or register an account</h2>\r\n\r\n<div class=\"login-cards\">\r\n    <div class=\"login-card\">\r\n        <mat-card class=\"login-form\">\r\n            <mat-card-header class=\"header\">\r\n                <mat-card-title>Login</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <div>\r\n                    <mat-form-field>\r\n                        <mat-label>Email</mat-label>\r\n                        <input matInput [(ngModel)]=\"loginEmail\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <mat-form-field>\r\n                        <mat-label>Password</mat-label>\r\n                        <input type=\"password\" matInput [(ngModel)]=\"loginPassword\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"login-card\" *ngIf=\"showRegisterAccount\">\r\n        <mat-card class=\"login-form\">\r\n            <mat-card-header class=\"header\">\r\n                <mat-card-title>Register an account</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <div>\r\n                    <mat-form-field>\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput [(ngModel)]=\"registerName\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <mat-form-field>\r\n                        <mat-label>Email</mat-label>\r\n                        <input matInput [(ngModel)]=\"registerEmail\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <mat-form-field>\r\n                        <mat-label>Password</mat-label>\r\n                        <input type=\"password\" matInput [(ngModel)]=\"registerPassword\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <mat-form-field>\r\n                        <mat-label>Confirm Password</mat-label>\r\n                        <input type=\"password\" matInput [(ngModel)]=\"registerPasswordConfirmation\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"register()\">Register</button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire-list/questionnaire-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire-list/questionnaire-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-questionnaire-button\">\r\n    <button *ngIf=\"authenticationService.isUserAdmin\" mat-raised-button color=\"primary\" (click)=\"openAddQuestionnaireDialog()\">Add Questionnaire!</button>\r\n</div>\r\n<div class=\"questionnaires-table\">\r\n    <table mat-table [dataSource]=\"dataSource\"\r\n        class=\"mat-elevation-z8 content\">\r\n        <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef> ID </th>\r\n            <td mat-cell *matCellDef=\"let questionnaire\"> {{questionnaire.id}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let questionnaire\"> {{questionnaire.name}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"createdDate\">\r\n            <th mat-header-cell *matHeaderCellDef> Created Date </th>\r\n            <td mat-cell *matCellDef=\"let questionnaire\"> {{questionnaire.createdDate | date: 'dd/MM/yyyy'}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"viewButton\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let questionnaire\">\r\n                <button mat-button color=\"primary\" (click)=\"viewQuestionnaire(questionnaire.id)\">View\r\n                    Questionnaire</button>\r\n            </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"responseButton\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let questionnaire\">\r\n                <button mat-button color=\"primary\" (click)=\"addResponse(questionnaire.id)\" *ngIf=\"authenticationService.currentUserEmail\">Add Response</button>\r\n            </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"responseListButton\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let questionnaire\">\r\n                <button mat-button color=\"primary\" *ngIf=\"authenticationService.isUserAdmin\" (click)=\"viewResponses(questionnaire.id)\">View Responses</button>\r\n            </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire/questionnaire.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire/questionnaire.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>{{name}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div class=\"action-buttons\" *ngIf=\"authenticationService.isUserAdmin\">\r\n            <div class=\"add-section-button\">\r\n                <button id=\"add-section-button\" mat-raised-button color=\"primary\" (click)=\"openAddSectionDialog()\">Add Section</button>\r\n            </div>\r\n            <div class=\"add-question-button\">\r\n                <button id=\"add-question-button\" mat-raised-button color=\"primary\" (click)=\"openAddQuestionDialog()\">Add Question</button>\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let section of orderedSections\">\r\n            <section [name]=\"section.name\" [questions]=\"section.questions\"></section>\r\n            <br />\r\n            <hr>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response-list/response-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/response-list/response-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"responses-container\">\r\n    <div>\r\n        <h2>Responses for Questionnaire: {{questionnaireName}}</h2>\r\n    </div>\r\n    <mat-accordion class=\"example-headers-align\" multi *ngFor=\"let response of responses\">\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    {{response.id}} - {{response.completedByUser.email}}\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    DATE COMPLETED (TO-DO)\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div *ngFor=\"let section of response.sections\">\r\n                <mat-card>\r\n                    <mat-card-header>\r\n                        <mat-card-title>{{section.sectionOrdinal + 1}} - {{section.sectionName}}</mat-card-title>\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <div *ngFor=\"let answer of section.answers\">\r\n                            <h4>{{answer.question.ordinal + 1}} - {{answer.question.text}}</h4>\r\n                            <p *ngIf=\"answer.text && answer.text.length > 0\">{{answer.text}}</p>\r\n                            <p *ngIf=\"!answer.text || answer.text.length === 0\">NO ANSWER GIVEN</p>\r\n                        </div>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n                <br />\r\n            </div>\r\n        </mat-expansion-panel>\r\n    </mat-accordion>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response/response.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/response/response.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"response\" class=\"response\">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Questionnaire: {{questionnaireName}}</mat-card-title>\r\n            <mat-card-title>Name: {{response.completedByUser.name}}</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <div *ngFor=\"let section of response.sections\">\r\n                <mat-card>\r\n                    <mat-card-header>\r\n                        <mat-card-title>{{section.sectionName}}</mat-card-title>\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <answer *ngFor=\"let answer of section.answers\" [answer]=\"answer\"></answer>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n                <br />\r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>{{name}}</h3>\r\n<div *ngFor=\"let question of orderedQuestions\">\r\n    {{question.ordinal + 1}}. {{question.text}}\r\n</div>\r\n<div *ngIf=\"!orderedQuestions || orderedQuestions.length === 0\" class=\"no-questions\">\r\n    <strong>No questions for this section yet!</strong>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/questionnaire/questionnaire.component */ "./src/app/components/questionnaire/questionnaire.component.ts");
/* harmony import */ var _components_response_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/response/response.component */ "./src/app/components/response/response.component.ts");
/* harmony import */ var _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/questionnaire-list/questionnaire-list.component */ "./src/app/components/questionnaire-list/questionnaire-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/response-list/response-list.component */ "./src/app/components/response-list/response-list.component.ts");








const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'questionnaire-list', component: _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireListComponent"] },
    { path: 'questionnaire/:id', component: _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireComponent"] },
    { path: 'response/:id', component: _components_response_response_component__WEBPACK_IMPORTED_MODULE_4__["ResponseComponent"] },
    { path: 'response-list/:id', component: _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_7__["ResponseListComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loading-spinner.service */ "./src/app/services/loading-spinner.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");




let AppComponent = class AppComponent {
    constructor(loadingSpinnerService, authenticationService) {
        this.loadingSpinnerService = loadingSpinnerService;
        this.authenticationService = authenticationService;
        this.title = 'questionnaire-app';
    }
    ngOnInit() {
        this.authenticationService.setUserDetails();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/questionnaire/questionnaire.component */ "./src/app/components/questionnaire/questionnaire.component.ts");
/* harmony import */ var _components_response_response_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/response/response.component */ "./src/app/components/response/response.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/questionnaire-list/questionnaire-list.component */ "./src/app/components/questionnaire-list/questionnaire-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _components_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-question-dialog/add-question-dialog.component */ "./src/app/components/add-question-dialog/add-question-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-section-dialog/add-section-dialog.component */ "./src/app/components/add-section-dialog/add-section-dialog.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/components/section/section.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/answer/answer.component */ "./src/app/components/answer/answer.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/response-list/response-list.component */ "./src/app/components/response-list/response-list.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_add_questionnaire_dialog_add_questionnaire_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/add-questionnaire-dialog/add-questionnaire-dialog.component */ "./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.ts");



































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireComponent"],
            _components_response_response_component__WEBPACK_IMPORTED_MODULE_6__["ResponseComponent"],
            _components_questionnaire_list_questionnaire_list_component__WEBPACK_IMPORTED_MODULE_8__["QuestionnaireListComponent"],
            _components_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddQuestionDialogComponent"],
            _components_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddSectionDialogComponent"],
            _components_section_section_component__WEBPACK_IMPORTED_MODULE_22__["SectionComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
            _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_25__["BannerComponent"],
            _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_27__["AnswerComponent"],
            _components_response_list_response_list_component__WEBPACK_IMPORTED_MODULE_30__["ResponseListComponent"],
            _components_add_questionnaire_dialog_add_questionnaire_dialog_component__WEBPACK_IMPORTED_MODULE_33__["AddQuestionnaireDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_26__["TokenInterceptor"],
                multi: true
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_32__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_32__["HashLocationStrategy"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _components_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddSectionDialogComponent"],
            _components_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddQuestionDialogComponent"],
            _components_add_questionnaire_dialog_add_questionnaire_dialog_component__WEBPACK_IMPORTED_MODULE_33__["AddQuestionnaireDialogComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-question-dialog/add-question-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/add-question-dialog/add-question-dialog.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXF1ZXN0aW9uLWRpYWxvZy9hZGQtcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/add-question-dialog/add-question-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/add-question-dialog/add-question-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddQuestionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionDialogComponent", function() { return AddQuestionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let AddQuestionDialogComponent = class AddQuestionDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AddQuestionDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddQuestionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-question-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-question-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-question-dialog/add-question-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-question-dialog.component.scss */ "./src/app/components/add-question-dialog/add-question-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddQuestionDialogComponent);



/***/ }),

/***/ "./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXF1ZXN0aW9ubmFpcmUtZGlhbG9nL2FkZC1xdWVzdGlvbm5haXJlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddQuestionnaireDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionnaireDialogComponent", function() { return AddQuestionnaireDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let AddQuestionnaireDialogComponent = class AddQuestionnaireDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AddQuestionnaireDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddQuestionnaireDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-questionnaire-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-questionnaire-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-questionnaire-dialog.component.scss */ "./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddQuestionnaireDialogComponent);



/***/ }),

/***/ "./src/app/components/add-section-dialog/add-section-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/add-section-dialog/add-section-dialog.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNlY3Rpb24tZGlhbG9nL2FkZC1zZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/add-section-dialog/add-section-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-section-dialog/add-section-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddSectionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSectionDialogComponent", function() { return AddSectionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let AddSectionDialogComponent = class AddSectionDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AddSectionDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddSectionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-section-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-section-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-section-dialog/add-section-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-section-dialog.component.scss */ "./src/app/components/add-section-dialog/add-section-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddSectionDialogComponent);



/***/ }),

/***/ "./src/app/components/answer/answer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/answer/answer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5zd2VyL2Fuc3dlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/answer/answer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/answer/answer.component.ts ***!
  \*******************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/answer.service */ "./src/app/services/answer.service.ts");



let AnswerComponent = class AnswerComponent {
    constructor(answerService) {
        this.answerService = answerService;
    }
    updateAnswer() {
        let model = { AnswerId: this.answer.id, UpdatedText: this.answer.text };
        this.answerService.put(model).subscribe(result => result);
    }
};
AnswerComponent.ctorParameters = () => [
    { type: src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_2__["default"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerComponent.prototype, "answer", void 0);
AnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'answer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/answer/answer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer.component.scss */ "./src/app/components/answer/answer.component.scss")).default]
    })
], AnswerComponent);



/***/ }),

/***/ "./src/app/components/banner/banner.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/banner/banner.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  display: inline-block;\n}\n\n.title {\n  display: inline-block;\n}\n\n.menu-item {\n  display: inline-block;\n  margin-left: 20px;\n}\n\n.login-menu-item {\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvQzpcXFVzZXJzXFxCZW5cXHNvdXJjZVxccmVwb3NcXEJlbjVoZXBoZXJkXFxRdWVzdGlvbm5haXJlXFxxdWVzdGlvbm5haXJlLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59IiwiLmJhbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmxvZ2luLW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let BannerComponent = class BannerComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    navigateToHome() {
        return this.router.navigateByUrl('/questionnaire-list');
    }
    navigateToLogin() {
        return this.router.navigateByUrl('');
    }
};
BannerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner.component.scss */ "./src/app/components/banner/banner.component.scss")).default]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-title {\n  text-align: center;\n}\n\n.login-cards {\n  text-align: center;\n}\n\n.login-card {\n  text-align: center;\n  margin: 10px;\n  display: inline-flex;\n}\n\n.login-card .header {\n  justify-content: center;\n}\n\n.login-form {\n  width: 300px;\n  text-align: center;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXEJlblxcc291cmNlXFxyZXBvc1xcQmVuNWhlcGhlcmRcXFF1ZXN0aW9ubmFpcmVcXHF1ZXN0aW9ubmFpcmUtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQUk7RUFDSSx1QkFBQTtBQ0VSOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIubG9naW4tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jYXJkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ubG9naW4tY2FyZCAuaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let LoginComponent = class LoginComponent {
    constructor(authenticationService, snackBar) {
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.showRegisterAccount = true;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
    }
    login() {
        let model = { Email: this.loginEmail, Password: this.loginPassword };
        this.authenticationService.loginUser(model);
    }
    register() {
        if (this.registerPassword !== this.registerPasswordConfirmation) {
            //throw error
        }
        let model = {
            Name: this.registerName,
            Email: this.registerEmail,
            Password: this.registerPassword
        };
        this.authenticationService.registerUser(model).subscribe(result => {
            this.showRegisterAccount = false;
            this.openAccountRegisteredSnackBar();
        });
    }
    openAccountRegisteredSnackBar() {
        this.snackBar.open('Account successfully registered', 'Close', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/questionnaire-list/questionnaire-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/questionnaire-list/questionnaire-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-questionnaire-button {\n  margin: 10px 0 10px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.questionnaires-table {\n  max-width: 800px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.questionnaires-table table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbm5haXJlLWxpc3QvQzpcXFVzZXJzXFxCZW5cXHNvdXJjZVxccmVwb3NcXEJlbjVoZXBoZXJkXFxRdWVzdGlvbm5haXJlXFxxdWVzdGlvbm5haXJlLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccXVlc3Rpb25uYWlyZS1saXN0XFxxdWVzdGlvbm5haXJlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25uYWlyZS1saXN0L3F1ZXN0aW9ubmFpcmUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbm5haXJlLWxpc3QvcXVlc3Rpb25uYWlyZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1xdWVzdGlvbm5haXJlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbm5haXJlcy10YWJsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSIsIi5hZGQtcXVlc3Rpb25uYWlyZS1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXVlc3Rpb25uYWlyZXMtdGFibGUge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucXVlc3Rpb25uYWlyZXMtdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/questionnaire-list/questionnaire-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/questionnaire-list/questionnaire-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionnaireListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireListComponent", function() { return QuestionnaireListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/questionnaire.service */ "./src/app/services/questionnaire.service.ts");
/* harmony import */ var _view_models_questionnaire_list_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view_models/questionnaire-list-view-model */ "./src/app/view_models/questionnaire-list-view-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/response.service */ "./src/app/services/response.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _add_questionnaire_dialog_add_questionnaire_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-questionnaire-dialog/add-questionnaire-dialog.component */ "./src/app/components/add-questionnaire-dialog/add-questionnaire-dialog.component.ts");
/* harmony import */ var _node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");










let QuestionnaireListComponent = class QuestionnaireListComponent {
    constructor(questionnaireService, responseService, authenticationService, router, dialog) {
        this.questionnaireService = questionnaireService;
        this.responseService = responseService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.dialog = dialog;
        this.dataSource = new _node_modules_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]();
        this.displayedColumns = ['id', 'name', 'createdDate', 'viewButton', 'responseButton', 'responseListButton'];
    }
    ngOnInit() {
        this.questionnaireService.getAll().subscribe(questionnairesReturned => {
            let questionnairesList = Array();
            questionnairesReturned.forEach(q => {
                let questionnaireToAdd = new _view_models_questionnaire_list_view_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
                questionnaireToAdd.id = q.id;
                questionnaireToAdd.name = q.name;
                questionnaireToAdd.createdDate = new Date(q.createdDate);
                questionnairesList.push(questionnaireToAdd);
            });
            this.dataSource = new _node_modules_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](questionnairesList);
        });
    }
    openAddQuestionnaireDialog() {
        const dialogRef = this.dialog.open(_add_questionnaire_dialog_add_questionnaire_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddQuestionnaireDialogComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.addQuestionnaire(result.name);
            }
        });
    }
    addQuestionnaire(name) {
        var model = {
            CreatedByUserId: this.authenticationService.currentUserId,
            Name: name
        };
        let questionnaireToAddToList = new _view_models_questionnaire_list_view_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
        questionnaireToAddToList.createdDate = new Date();
        questionnaireToAddToList.name = model.Name;
        this.questionnaireService.post(model).subscribe(result => {
            questionnaireToAddToList.id = result;
            this.dataSource.data.push(questionnaireToAddToList);
            this.dataSource._updateChangeSubscription();
        });
    }
    viewQuestionnaire(questionnaireId) {
        return this.router.navigateByUrl('/questionnaire/' + questionnaireId);
    }
    addResponse(questionnaireId) {
        var model = { QuestionnaireId: questionnaireId };
        this.responseService.post(model).subscribe(responseId => this.viewResponse(responseId));
    }
    viewResponse(responseId) {
        return this.router.navigateByUrl('/response/' + responseId);
    }
    viewResponses(questionnaireId) {
        return this.router.navigateByUrl('/response-list/' + questionnaireId);
    }
};
QuestionnaireListComponent.ctorParameters = () => [
    { type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { type: _services_response_service__WEBPACK_IMPORTED_MODULE_5__["default"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _node_modules_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
];
QuestionnaireListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questionnaire-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire-list/questionnaire-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./questionnaire-list.component.scss */ "./src/app/components/questionnaire-list/questionnaire-list.component.scss")).default]
    })
], QuestionnaireListComponent);



/***/ }),

/***/ "./src/app/components/questionnaire/questionnaire.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/questionnaire/questionnaire.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-card-header-text {\n  margin: 0px !important;\n}\n\n.action-buttons {\n  display: inline-block;\n}\n\n.add-section-button {\n  margin-right: 10px;\n  display: inline-block;\n}\n\n.add-question-button {\n  margin-right: 30px;\n  display: inline-block;\n}\n\n.add-response-button {\n  padding-top: 10px;\n  display: inline-block;\n}\n\n.no-questions {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbm5haXJlL0M6XFxVc2Vyc1xcQmVuXFxzb3VyY2VcXHJlcG9zXFxCZW41aGVwaGVyZFxcUXVlc3Rpb25uYWlyZVxccXVlc3Rpb25uYWlyZS1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHF1ZXN0aW9ubmFpcmVcXHF1ZXN0aW9ubmFpcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbm5haXJlL3F1ZXN0aW9ubmFpcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hZGQtc2VjdGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWRkLXF1ZXN0aW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hZGQtcmVzcG9uc2UtYnV0dG9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubm8tcXVlc3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGQtc2VjdGlvbi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFkZC1xdWVzdGlvbi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFkZC1yZXNwb25zZS1idXR0b24ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubm8tcXVlc3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/questionnaire/questionnaire.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/questionnaire/questionnaire.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/questionnaire.service */ "./src/app/services/questionnaire.service.ts");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var src_app_view_models_question_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view_models/question-view-model */ "./src/app/view_models/question-view-model.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-question-dialog/add-question-dialog.component */ "./src/app/components/add-question-dialog/add-question-dialog.component.ts");
/* harmony import */ var _add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-section-dialog/add-section-dialog.component */ "./src/app/components/add-section-dialog/add-section-dialog.component.ts");
/* harmony import */ var src_app_view_models_section_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/view_models/section-view-model */ "./src/app/view_models/section-view-model.ts");
/* harmony import */ var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/section.service */ "./src/app/services/section.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");












let QuestionnaireComponent = class QuestionnaireComponent {
    constructor(route, questionnaireService, questionService, sectionService, authenticationService, dialog) {
        this.route = route;
        this.questionnaireService = questionnaireService;
        this.questionService = questionService;
        this.sectionService = sectionService;
        this.authenticationService = authenticationService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.questionnaireService.get(this.id).subscribe(result => {
            this.name = result.name;
            this.orderedSections = result.sections.sort((a, b) => {
                return a.ordinal - b.ordinal;
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    openAddSectionDialog() {
        const dialogRef = this.dialog.open(_add_section_dialog_add_section_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddSectionDialogComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.addSection(result.name);
            }
        });
    }
    openAddQuestionDialog() {
        const dialogRef = this.dialog.open(_add_question_dialog_add_question_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddQuestionDialogComponent"], {
            width: '250px',
            data: { sections: this.orderedSections }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.addQuestion(result.text, result.sectionId);
            }
        });
    }
    addQuestion(text, sectionId) {
        let model = {
            Text: text,
            Ordinal: this.orderedSections.find(s => s.id === sectionId).questions.length,
            QuestionnaireId: this.id,
            SectionId: sectionId
        };
        let questionToAddToList = new src_app_view_models_question_view_model__WEBPACK_IMPORTED_MODULE_5__["default"]();
        questionToAddToList.text = model.Text;
        questionToAddToList.ordinal = model.Ordinal;
        this.questionService.post(model).subscribe(result => {
            questionToAddToList.id = result;
        });
        this.orderedSections.find(s => s.id === sectionId).questions.push(questionToAddToList);
    }
    addSection(name) {
        let model = {
            Name: name,
            Ordinal: this.orderedSections.length,
            QuestionnaireId: this.id,
        };
        let sectionToAddToList = new src_app_view_models_section_view_model__WEBPACK_IMPORTED_MODULE_9__["default"]();
        sectionToAddToList.name = model.Name;
        sectionToAddToList.ordinal = model.Ordinal;
        sectionToAddToList.questions = [];
        this.sectionService.post(model).subscribe(result => {
            sectionToAddToList.id = result;
        });
        this.orderedSections.push(sectionToAddToList);
    }
};
QuestionnaireComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__["default"] },
    { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["default"] },
    { type: src_app_services_section_service__WEBPACK_IMPORTED_MODULE_10__["SectionService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
QuestionnaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questionnaire.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questionnaire/questionnaire.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./questionnaire.component.scss */ "./src/app/components/questionnaire/questionnaire.component.scss")).default]
    })
], QuestionnaireComponent);



/***/ }),

/***/ "./src/app/components/response-list/response-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/response-list/response-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.responses-container {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zZS1saXN0L0M6XFxVc2Vyc1xcQmVuXFxzb3VyY2VcXHJlcG9zXFxCZW41aGVwaGVyZFxcUXVlc3Rpb25uYWlyZVxccXVlc3Rpb25uYWlyZS1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3BvbnNlLWxpc3RcXHJlc3BvbnNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2UtbGlzdC9yZXNwb25zZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7O0VBRUUsYUFBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2UtbGlzdC9yZXNwb25zZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucmVzcG9uc2VzLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9IiwiLmV4YW1wbGUtYWN0aW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnJlc3BvbnNlcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/response-list/response-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/response-list/response-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResponseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseListComponent", function() { return ResponseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_response_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/response.service */ "./src/app/services/response.service.ts");




let ResponseListComponent = class ResponseListComponent {
    constructor(route, responseService) {
        this.route = route;
        this.responseService = responseService;
        this.questionnaireName = "To-do";
        this.responses = [];
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.questionnaireId = +params['id'];
        });
        this.responseService.getAll(this.questionnaireId).subscribe(result => {
            result.forEach(element => {
                this.responses.push(element);
            });
        });
    }
};
ResponseListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_response_service__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
ResponseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-response-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./response-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response-list/response-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./response-list.component.scss */ "./src/app/components/response-list/response-list.component.scss")).default]
    })
], ResponseListComponent);



/***/ }),

/***/ "./src/app/components/response/response.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/response/response.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".response {\n  margin: 20px 50px 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zZS9DOlxcVXNlcnNcXEJlblxcc291cmNlXFxyZXBvc1xcQmVuNWhlcGhlcmRcXFF1ZXN0aW9ubmFpcmVcXHF1ZXN0aW9ubmFpcmUtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXNwb25zZVxccmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2UvcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zZS9yZXNwb25zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zZSB7XHJcbiAgICBtYXJnaW46IDIwcHggNTBweCAwIDUwcHg7XHJcbn0iLCIucmVzcG9uc2Uge1xuICBtYXJnaW46IDIwcHggNTBweCAwIDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/response/response.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/response/response.component.ts ***!
  \***********************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_response_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/response.service */ "./src/app/services/response.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ResponseComponent = class ResponseComponent {
    constructor(route, responseService) {
        this.route = route;
        this.responseService = responseService;
        this.questionnaireName = "To-do";
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.responseService.get(this.id).subscribe(result => {
            this.response = result;
        });
    }
};
ResponseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_response_service__WEBPACK_IMPORTED_MODULE_2__["default"] }
];
ResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-response',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./response.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/response/response.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./response.component.scss */ "./src/app/components/response/response.component.scss")).default]
    })
], ResponseComponent);



/***/ }),

/***/ "./src/app/components/section/section.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/section/section.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/section/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionComponent = class SectionComponent {
    constructor() { }
    ngOnInit() {
        if (this.questions && this.questions.length > 1) {
            this.orderedQuestions = this.questions.sort((a, b) => {
                return a.ordinal - b.ordinal;
            });
        }
        else {
            this.orderedQuestions = this.questions;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "questions", void 0);
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section.component.scss */ "./src/app/components/section/section.component.scss")).default]
    })
], SectionComponent);



/***/ }),

/***/ "./src/app/interceptors/token-interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token-interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading-spinner.service */ "./src/app/services/loading-spinner.service.ts");




let TokenInterceptor = class TokenInterceptor {
    constructor(loadingSpinnerService) {
        this.loadingSpinnerService = loadingSpinnerService;
        this.count = 0;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
            }
        });
        setTimeout(() => { this.loadingSpinnerService.show(); }, 0);
        this.count++;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => console.log(event), error => console.log(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.count--;
            if (this.count == 0) {
                setTimeout(() => { this.loadingSpinnerService.hide(); }, 0);
            }
        }));
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_loading_spinner_service__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/answer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/answer.service.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AnswerService = class AnswerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    put(model) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/answer', model);
    }
};
AnswerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AnswerService);
/* harmony default export */ __webpack_exports__["default"] = (AnswerService);


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let AuthenticationService = class AuthenticationService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    get isUserAdmin() {
        return this._isUserAdmin;
    }
    get currentUserEmail() {
        return this._currentUserEmail;
    }
    get currentUserId() {
        return this._currentUserId;
    }
    registerUser(model) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/api/user', model);
    }
    loginUser(model) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/api/login', model).subscribe(result => {
            localStorage.setItem('bearer-token', result.token);
            this.setUserDetails();
            return this.router.navigateByUrl('/questionnaire-list');
        });
    }
    setUserDetails() {
        let bearerToken = localStorage.getItem('bearer-token');
        if (bearerToken) {
            this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/api/user/loggedInUser').subscribe((res) => {
                this._isUserAdmin = res.isAdmin;
                this._currentUserEmail = res.email;
                this._currentUserId = res.id;
            });
        }
    }
    logout() {
        localStorage.clear();
        this._isUserAdmin = null;
        this._currentUserEmail = null;
        this._currentUserId = null;
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/loading-spinner.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/loading-spinner.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadingSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerService", function() { return LoadingSpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingSpinnerService = class LoadingSpinnerService {
    constructor() {
        this.isSpinnerShowing = false;
    }
    show() {
        this.isSpinnerShowing = true;
    }
    hide() {
        this.isSpinnerShowing = false;
    }
};
LoadingSpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingSpinnerService);



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let QuestionService = class QuestionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    post(model) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/question', model);
    }
};
QuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionService);
/* harmony default export */ __webpack_exports__["default"] = (QuestionService);


/***/ }),

/***/ "./src/app/services/questionnaire.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/questionnaire.service.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let QuestionnaireService = class QuestionnaireService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/questionnaire/' + id);
    }
    getAll() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/questionnaire');
    }
    post(model) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/questionnaire', model);
    }
};
QuestionnaireService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionnaireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionnaireService);
/* harmony default export */ __webpack_exports__["default"] = (QuestionnaireService);


/***/ }),

/***/ "./src/app/services/response.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/response.service.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ResponseService = class ResponseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/response/' + id);
    }
    getAll(questionnaireId) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/response/getResponsesByQuestionnaireId/' + questionnaireId);
    }
    post(model) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/response', model);
    }
};
ResponseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResponseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ResponseService);
/* harmony default export */ __webpack_exports__["default"] = (ResponseService);


/***/ }),

/***/ "./src/app/services/section.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/section.service.ts ***!
  \*********************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let SectionService = class SectionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    post(model) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/api/section', model);
    }
};
SectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SectionService);



/***/ }),

/***/ "./src/app/view_models/question-view-model.ts":
/*!****************************************************!*\
  !*** ./src/app/view_models/question-view-model.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuestionViewModel {
}


/***/ }),

/***/ "./src/app/view_models/questionnaire-list-view-model.ts":
/*!**************************************************************!*\
  !*** ./src/app/view_models/questionnaire-list-view-model.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionnaireListViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuestionnaireListViewModel {
}


/***/ }),

/***/ "./src/app/view_models/section-view-model.ts":
/*!***************************************************!*\
  !*** ./src/app/view_models/section-view-model.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SectionViewModel {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: "http://localhost:4400"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ben\source\repos\Ben5hepherd\Questionnaire\questionnaire-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map