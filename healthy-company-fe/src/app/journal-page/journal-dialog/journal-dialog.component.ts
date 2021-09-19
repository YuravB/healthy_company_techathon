import {Component, OnInit} from '@angular/core';
import {JournalResponse} from '../../../services/dto/JournalResponse';

@Component({
  selector: 'app-journal-dialog',
  templateUrl: './journal-dialog.component.html',
  styleUrls: ['./journal-dialog.component.css']
})
export class JournalDialogComponent implements OnInit {

  private _journalResponse: JournalResponse;

  get journalResponse(): JournalResponse {
    return {
      user_id: '1',
      journalId: 10,
      entry: 'I am depressed',
      date: new Date().toString(),
      semantic: null,
      mood: 'angry',
      affirmation: 'You can do it'
    };
  }

  set journalResponse(value: JournalResponse) {
    this._journalResponse = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
