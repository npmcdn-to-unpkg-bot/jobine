import {EventEmitter, Output, Component, OnInit} from "@angular/core";
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Router,RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Job} from "./job";
import {JobService} from "./job.service.ts";
import {isLoggedin} from "./is-loggedin.ts";
import {Login} from "./login";
import {Menu} from "./menu";


@Component({
    selector: 'jobine-comp',
    template: `
  <div> 
    <paper-drawer-panel id="drPanel">
        <paper-header-panel id="sidePanel" drawer>
           <paper-toolbar id="sideToolbar">
             <paper-icon-button icon="home" id="btnHome"></paper-icon-button>
             <paper-button active="!isLoggedin()"  on-click="userLogin()" id="btnLogin">login</paper-button>
          
           </paper-toolbar>
           <router-outlet></router-outlet>
        </paper-header-panel>

        <paper-header-panel id="mainPanel" main>
            <paper-toolbar id="mainToolbar">
                <paper-icon-button icon="menu" paper-drawer-toggle  id="btnMainMenu"></paper-icon-button>
                <paper-tabs selected="0">
                    <paper-tab>MAP</paper-tab>
                    <paper-tab>LIST</paper-tab>
                </paper-tabs>  
            </paper-toolbar>
            <section id="section">             
                <iron-pages selected="0">
                  <div>  
                    <google-map   latitude={{lat}} longitude={{long}} disableDefaultUI >
                        <google-map-marker *ngFor="let marker of jobList" latitude="{{marker.job.location.latitude}}" longitude="{{marker.job.location.longitude}}" title="{{marker.job.name}}"></google-map-marker>
                    </google-map>
                  </div>
                  <div id="listJob">
                  <li *ngFor="let marker of jobList"  title="{{marker.job.name}}">Name: {{marker.job.name}} description: {{marker.job.description}} </li>
                  </div>                 
                </iron-pages>
                <paper-toolbar id="footToolbar">
                    <paper-button toggles class="fancy" on-click="getJobs" >Switch places</paper-button>
                </paper-toolbar>
            </section>

        </paper-header-panel>
    </paper-drawer-panel>
   
</div>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [JobService, HTTP_PROVIDERS,ROUTER_PROVIDERS],
    
})

@RouteConfig([
    {path: '/login',name:'Login', component: Login},
    {path: '/Menu',name:'Menu', component: Menu}
    ])

export class Jobine implements OnInit {

    constructor(private _jobService:JobService,private _router:Router ) {
    }
    jobList:Job[];
    lat:string;
    long:string;

    errorMessage:string;

    ngOnInit() {
        this.lat = "45.5602804";  //,-73.8516124
        this.long = "-73.8516124";


        var tabs = document.querySelector('paper-tabs');
        var pages =  document.querySelector('iron-pages');
        tabs.addEventListener('iron-select', function() {
            pages.selected = tabs.selected;
        });
        this.getJobs();
    }

    getJobs() {
        this._jobService.getJobs()
            .subscribe(
                jobs => this.jobList = jobs,
                error => this.errorMessage = <any>error);
    }

    userLogin(){
        this._router.navigate(['Login']);
    }


}


