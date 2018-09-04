webpackJsonp([4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    // public birthDate: string;
    function ProfilePage(navCtrl, navParams, alertCtrl, authProvider, profileProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.toastCtrl = toastCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            // this.birthDate = userProfileSnapshot.val().birthDate;
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot("LoginPage");
        });
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Ingresa tu nombre y apellido.",
            inputs: [
                {
                    name: "firstName",
                    placeholder: "Tu nombre",
                    value: this.userProfile.firstName
                },
                {
                    name: "lastName",
                    placeholder: "Tu apellido",
                    value: this.userProfile.lastName
                }
            ],
            buttons: [
                { text: "Cancelar" },
                {
                    text: "Guardar",
                    handler: function (data) {
                        _this.profileProvider.updateName(data.firstName, data.lastName);
                        var toast = _this.toastCtrl.create({
                            message: 'Nombre actualizado correctamente!',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    // updateDOB(birthDate:string):void {
    //   this.profileProvider.updateDOB(birthDate);
    // }
    ProfilePage.prototype.updateCarnet = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Ingresa tu carnet.",
            inputs: [
                {
                    name: "carnet",
                    placeholder: "Tu carnet",
                    value: this.userProfile.carnet
                },
            ],
            buttons: [
                { text: "Cancelar" },
                {
                    text: "Guardar",
                    handler: function (data) {
                        _this.profileProvider.updateCarnet(data.carnet);
                        var toast = _this.toastCtrl.create({
                            message: 'Carnet actualizado correctamente!',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateDOB = function (carrera) {
        this.profileProvider.updateDOB(carrera);
        var toast = this.toastCtrl.create({
            message: 'Carrera actualizada correctamente!',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [{ name: 'newEmail', placeholder: 'Ingresa un nuevo correo' },
                { name: 'password', placeholder: 'Tu contraseña', type: 'password' }],
            buttons: [
                { text: 'Cancelar' },
                { text: 'Guardar',
                    handler: function (data) {
                        _this.profileProvider
                            .updateEmail(data.newEmail, data.password)
                            .then(function () { console.log('E-mail registrado correctamente'); })
                            .catch(function (error) { console.log('ERROR: ' + error.message); });
                        var toast = _this.toastCtrl.create({
                            message: 'E-mail actualizado correctamente!',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    } }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPassword', placeholder: 'Contraseña nueva', type: 'password' },
                { name: 'oldPassword', placeholder: 'Contraseña actual', type: 'password' }
            ],
            buttons: [
                { text: 'Cancelar' },
                { text: 'Guardar',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                        var toast = _this.toastCtrl.create({
                            message: 'Contraseña actualizada correctamente!',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.goToList = function () {
        this.navCtrl.push('EventListPage');
    };
    ProfilePage.prototype.goToTrimestre = function () {
        this.navCtrl.push('TrimestrePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/eliaeliaswakil/Development/uplan2/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Perfil</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Información Personal\n    </ion-list-header>\n\n    <ion-item (click)="updateName()">\n      <ion-grid>\n     <ion-row>\n       <ion-col col-5> Nombre </ion-col>\n       <ion-col col-5 *ngIf="userProfile?.firstName || userProfile?.lastName">\n         {{userProfile?.firstName}} {{userProfile?.lastName}}\n       </ion-col>\n       <ion-col col-5 class="placeholder-profile"\n       *ngIf="!userProfile?.firstName">\n         <span> Presiona para editar. </span>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n  </ion-item>\n\n <!-- <ion-item>\n  <ion-label class="dob-label">Date of Birth</ion-label>\n  <ion-datetime displayFormat="MMM D, YYYY" pickerFormat="D MMM YYYY"\n  [(ngModel)]="birthDate" (ionChange)="updateDOB(birthDate)"></ion-datetime>\n  </ion-item> -->\n\n  <ion-item (click)="updateCarnet()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5> Carnet </ion-col>\n        <ion-col col-5 *ngIf="userProfile?.carnet">\n          {{userProfile?.carnet}}\n        </ion-col>\n        <ion-col col-5 class="placeholder-profile"\n        *ngIf="!userProfile?.carnet">\n        <span> Presiona para editar. </span>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n  <ion-label class="dob-label">Carrera</ion-label>\n  <ion-select [(ngModel)]="carrera" (ionChange)="updateDOB(carrera)" placeholder={{userProfile?.carrera}}>\n    <ion-option value="Ingeniería Civil">Ingeniería Civil</ion-option>\n    <ion-option value="Ingeniería Eléctrica">Ingeniería Eléctrica</ion-option>\n    <ion-option value="Ingeniería de Sistemas">Ingeniería de Sistemas</ion-option>\n    <ion-option value="Ingeniería Química">Ingeniería Química</ion-option>\n    <ion-option value="Ingeniería Mecánica">Ingeniería Mecánica</ion-option>\n  </ion-select>\n  </ion-item>\n\n\n  <ion-item (click)="updateEmail()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-5> E-mail </ion-col>\n          <ion-col col-5 *ngIf="userProfile?.email">\n            {{userProfile?.email}}\n          </ion-col>\n          <ion-col col-5 class="placeholder-profile" *ngIf="!userProfile?.email">\n            <span> Presiona para editar. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item (click)="updatePassword()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-5> Contraseña </ion-col>\n          <ion-col col-5 class="placeholder-profile">\n            <span> Presiona para cambiar. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="primary" (click)="goToTrimestre()">\n  Trimestre Actual\n  </button>\n\n  <button ion-button block color="primary" (click)="goToList()">\n  Cálculo de IAA/IAP\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eliaeliaswakil/Development/uplan2/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _f || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map