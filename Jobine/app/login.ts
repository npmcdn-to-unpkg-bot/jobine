/**
 * Created by Alain on 5/10/2016.
 */
// login.ts
import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {Authentication} from './authentication';

@Component({
    selector: 'login',
    directives: [ FORM_DIRECTIVES, NgIf ],
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
})

export class Login {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: Authentication, public router: Router) {
        this.form = fb.group({
            username:  ['', Validators.required],
            password:  ['', Validators.required]
        });
    }

    submitForm(value: any) {
        this.auth.login(value.username, value.password)
            .subscribe(
                (token: any) => {
                    var btnLogin = document.querySelector('#btnLogin');
                    btnLogin.hidden = true;
                    this.router.navigate(['../Menu'])},
                        () => { this.error = true; }

            );
    }
}