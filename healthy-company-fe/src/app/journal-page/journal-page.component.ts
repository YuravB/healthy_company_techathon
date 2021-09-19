import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MoodStoreService} from '../mood-dialog/mood-store.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {JournalResponse} from '../../services/dto/JournalResponse';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {
  form: FormGroup;
  @Input()
  hideNavBar: boolean = false;
  private _entry: JournalResponse = null;
  private affMap: Map<number, string> = new Map<number, string>([
    [0, 'I Love Myself for Who I Am.'],
    [1, 'How I Feel Matters.'],
    [2, 'I Am Strong and Capable.'],
    [3, 'I will turn negative thoughts into positive.'],
    [4, 'I will take action and accomplish my goals.'],
    [5, 'My goals are achievable'],
    [6, 'I have faith in my abilities'],
  ]);
  private index = 0;

  get entry(): JournalResponse {
    return this._entry;
  }

  @Input()
  set entry(value: JournalResponse) {
    this._entry = value;
  }

  constructor(private formBuilder: FormBuilder,
              private moodStoreService: MoodStoreService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log(this.entry);
    this.initForm(this.entry);
  }

  initForm(entry?: JournalResponse) {
    if (entry != null) {
      this.form = this.formBuilder.group({
        morning: entry.entry,
        afternoon: null,
        night: null
      });
    } else {
      this.form = this.formBuilder.group({
        morning: null,
        afternoon: null,
        night: null,
        mood: this.moodStoreService.mood
      });
    }
  }

  openAff() {
    this.index = this.genRandNum(7);
    this.snackBar.open(this.affMap.get(this.index), 'x', {
      duration: 3000
    });
  }

  genRandNum(max: number) {
    return Math.floor(Math.random() * max);
  }

  onSubmit() {
    if (this.form.get('morning').value != null || this.form.get('afternoon').value != null || this.form.get('night').value != null) {
      this.openAff();
      console.log(this.journalResponseBuilder());
    } else {
      this.snackBar.open('Please fill in a Journal Entry', 'Dismiss', {
        duration: 3000
      });
    }
  }

  journalResponseBuilder() {
    const journalResponse: JournalResponse = {
      journalId: null,
      entry: this.form.get('morning').value,
      date: new Date().toString(),
      mood: this.moodStoreService.mood,
      affirmation: this.affMap.get(this.index),
      semantic: null
    };
    return journalResponse;
  }


}

