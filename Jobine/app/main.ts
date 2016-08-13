import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Authentication} from './authentication';
import {Jobine} from './app.component';

bootstrap(Jobine, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  Authentication,

]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/