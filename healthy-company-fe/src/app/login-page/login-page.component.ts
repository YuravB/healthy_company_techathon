import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseFormComponent} from './base-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends BaseFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required]
    });
  }

  /*  routeAfterSuccessfulLogin() {
      this.router.navigate([this.authService.afterUrlLogin])
        .catch(error => {
          console.log(error);
        });
    }*/

  public onSubmit() {
    /*    this.authService.login(this.form.value)
          .subscribe(() => this.routeAfterSuccessfulLogin());*/
  }

}
