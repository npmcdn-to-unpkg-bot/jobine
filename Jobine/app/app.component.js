System.register(["@angular/core", '@angular/http', '@angular/router-deprecated', "./job.service.ts", "./login", "./menu"], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, job_service_ts_1, login_1, menu_1;
    var Jobine;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (job_service_ts_1_1) {
                job_service_ts_1 = job_service_ts_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            }],
        execute: function() {
            Jobine = (function () {
                function Jobine(_jobService, _router) {
                    this._jobService = _jobService;
                    this._router = _router;
                }
                Jobine.prototype.ngOnInit = function () {
                    this.lat = "45.5602804"; //,-73.8516124
                    this.long = "-73.8516124";
                    var tabs = document.querySelector('paper-tabs');
                    var pages = document.querySelector('iron-pages');
                    tabs.addEventListener('iron-select', function () {
                        pages.selected = tabs.selected;
                    });
                    this.getJobs();
                };
                Jobine.prototype.getJobs = function () {
                    var _this = this;
                    this._jobService.getJobs()
                        .subscribe(function (jobs) { return _this.jobList = jobs; }, function (error) { return _this.errorMessage = error; });
                };
                Jobine.prototype.userLogin = function () {
                    this._router.navigate(['Login']);
                };
                Jobine = __decorate([
                    core_1.Component({
                        selector: 'jobine-comp',
                        template: "\n  <div> \n    <paper-drawer-panel id=\"drPanel\">\n        <paper-header-panel id=\"sidePanel\" drawer>\n           <paper-toolbar id=\"sideToolbar\">\n             <paper-icon-button icon=\"home\" id=\"btnHome\"></paper-icon-button>\n             <paper-button active=\"!isLoggedin()\"  on-click=\"userLogin()\" id=\"btnLogin\">login</paper-button>\n          \n           </paper-toolbar>\n           <router-outlet></router-outlet>\n        </paper-header-panel>\n\n        <paper-header-panel id=\"mainPanel\" main>\n            <paper-toolbar id=\"mainToolbar\">\n                <paper-icon-button icon=\"menu\" paper-drawer-toggle  id=\"btnMainMenu\"></paper-icon-button>\n                <paper-tabs selected=\"0\">\n                    <paper-tab>MAP</paper-tab>\n                    <paper-tab>LIST</paper-tab>\n                </paper-tabs>  \n            </paper-toolbar>\n            <section id=\"section\">             \n                <iron-pages selected=\"0\">\n                  <div>  \n                    <google-map   latitude={{lat}} longitude={{long}} disableDefaultUI >\n                        <google-map-marker *ngFor=\"let marker of jobList\" latitude=\"{{marker.job.location.latitude}}\" longitude=\"{{marker.job.location.longitude}}\" title=\"{{marker.job.name}}\"></google-map-marker>\n                    </google-map>\n                  </div>\n                  <div id=\"listJob\">\n                  <li *ngFor=\"let marker of jobList\"  title=\"{{marker.job.name}}\">Name: {{marker.job.name}} description: {{marker.job.description}} </li>\n                  </div>                 \n                </iron-pages>\n                <paper-toolbar id=\"footToolbar\">\n                    <paper-button toggles class=\"fancy\" on-click=\"getJobs\" >Switch places</paper-button>\n                </paper-toolbar>\n            </section>\n\n        </paper-header-panel>\n    </paper-drawer-panel>\n   \n</div>\n  ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [job_service_ts_1.JobService, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS],
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_1.Login },
                        { path: '/Menu', name: 'Menu', component: menu_1.Menu }
                    ]), 
                    __metadata('design:paramtypes', [job_service_ts_1.JobService, router_deprecated_1.Router])
                ], Jobine);
                return Jobine;
            }());
            exports_1("Jobine", Jobine);
        }
    }
});
//# sourceMappingURL=app.component.js.map