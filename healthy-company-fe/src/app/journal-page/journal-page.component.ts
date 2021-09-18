import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.initForm();
  }

  initForm(/*will take in something eventually*/) {
    this.form = this.formBuilder.group({
      morning: null,
      afternoon: null,
      night: null
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
