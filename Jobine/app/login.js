System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '@vaadin/angular2-polymer', './authentication'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_deprecated_1, angular2_polymer_1, authentication_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (angular2_polymer_1_1) {
                angular2_polymer_1 = angular2_polymer_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            let Login = class Login {
                constructor(fb, auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.error = false;
                    this.form = fb.group({
                        username: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                }
                submitForm(value) {
                    this.auth.login(value.username, value.password)
                        .subscribe((token) => {
                        var btnLogin = document.querySelector('#btnLogin');
                        btnLogin.hidden = true;
                        this.router.navigate(['../Menu']);
                    }, () => { this.error = true; });
                }
            };
            Login = __decorate([
                core_1.Component({
                    selector: 'login',
                    directives: [
                        common_1.FORM_DIRECTIVES,
                        common_1.NgIf,
                        angular2_polymer_1.PolymerElement('paper-input'),
                        angular2_polymer_1.PolymerElement('paper-button'),
                    ],
                    template: `
    <form [ngFormModel]="form" (submit)="onSubmit(form.value)">
      <div *ngIf="error">Check your user name or password</div>
      <div>
       <paper-input id="username" name="username" error-message="Invalide" label="Username"></paper-input>
      </div>
      <div>
        <paper-input id="password" name="password" type="password"></paper-input>
      </div>
      <div class="form-group">
        <paper-button raised on-click="submitForm()"   >submit</paper-button>
      </div>
    </form>
  `
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, authentication_1.Authentication, router_deprecated_1.Router])
            ], Login);
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map