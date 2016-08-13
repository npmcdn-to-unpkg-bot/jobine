/**
 * Created by Alain on 5/29/2016.
 */

// menu.ts
import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from '@angular/common';
import {Router} from '@angular/router-deprecated';


@Component({
    selector: 'menu',
    directives: [ FORM_DIRECTIVES ],
    template: `
   <div>
   <li>TROUVER UNE JOBINE</li>
   <li>OFFRIR UNE JOBINE</li>
   </div>
  `
})

export class Menu {

}