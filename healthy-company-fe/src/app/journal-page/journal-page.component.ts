import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {JournalEntryObject} from '../../services/dto/JournalEntryObject';
import {MoodStoreService} from '../mood-dialog/mood-store.service';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private moodStoreService: MoodStoreService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(entry?: JournalEntryObject) {
    if (entry == null) {
      entry = {
        morning: null,
        afternoon: null,
        night: null,
        mood: this.moodStoreService.mood
      };
    }
    this.form = this.formBuilder.group({
      morning: entry.morning,
      afternoon: entry.afternoon,
      night: entry.night,
      mood: this.moodStoreService.mood
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
