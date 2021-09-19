import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseFormComponent} from './base-form.component';
import {Router} from '@angular/router';
import {MoodStoreService} from '../mood-dialog/mood-store.service';
import {MoodDialogService} from '../mood-dialog/mood-dialog.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends BaseFormComponent implements OnInit {

  public form: FormGroup;

  private discoveryLogo = 'assets/discoLogo.png';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public moodDialogService: MoodDialogService,
              private moodStoreService: MoodStoreService) {
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

  public onSubmit() {
    this.moodDialogService.showDialog().subscribe(mood => {
      this.moodStoreService.mood = mood;
    });
    this.router.navigateByUrl('/home');
  }

}
