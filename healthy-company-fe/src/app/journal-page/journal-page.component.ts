import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JournalEntryObject} from '../../services/dto/JournalEntryObject';
import {MoodStoreService} from '../mood-dialog/mood-store.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {
  form: FormGroup;

  private affMap: Map<number, string> = new Map<number, string>([
    [0, 'I Love Myself for Who I Am.'],
    [1, 'How I Feel Matters.'],
    [2, 'I Am Strong and Capable.'],
    [3, 'I will turn negative thoughts into positive.'],
    [4, 'I will take action and accomplish my goals.'],
    [5, 'My goals are achievable'],
    [6, 'I have faith in my abilities'],
  ]);

  constructor(private formBuilder: FormBuilder,
              private moodStoreService: MoodStoreService,
              private snackBar: MatSnackBar) {
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

  openAff() {
    const num: number = this.genRandNum(7);
    this.snackBar.open(this.affMap.get(num), 'x', {
      duration: 3000
    });
  }

  genRandNum(max: number) {
    return Math.floor(Math.random() * max);
  }

  onSubmit() {
    if (this.form.get('morning').value != null || this.form.get('afternoon').value != null || this.form.get('night').value != null) {
      this.openAff();
      console.log(this.form.value);
    } else {
      this.snackBar.open('Please fill in a Journal Entry', 'Dismiss', {
        duration: 3000
      });
    }
  }
}

