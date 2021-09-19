import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SettingsDialogService} from '../settings-dialog/settings-dialog.service';
import {JournalObj} from '../../services/dto/JournalObj';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MoodDialogService} from '../mood-dialog/mood-dialog.service';
import {MoodStoreService} from '../mood-dialog/mood-store.service';
import {JournalResponse} from '../../services/dto/JournalResponse';
import {JournalDialogService} from '../journal-page/journal-dialog/journal-dialog.service';

const JOURNAL_DATA: JournalResponse[] = [
  {journalId: 1, date: new Date().toString(), mood: 'Ecstatic', affirmation: 'Do Better'},
  {journalId: 2, date: new Date().toString(), mood: 'Happy', affirmation: 'Do Better'},
  {journalId: 3, date: new Date().toString(), mood: 'Ecstatic', affirmation: 'Do Better'},
  {journalId: 4, date: new Date().toString(), mood: 'Depressed', affirmation: 'Do Better'},
  {journalId: 5, date: new Date().toString(), mood: 'Sad', affirmation: 'Do Better'},
  {journalId: 6, date: new Date().toString(), mood: 'Normal', affirmation: 'Do Better'},
  {journalId: 7, date: new Date().toString(), mood: 'Angry', affirmation: 'Do Better'},
  {journalId: 8, date: new Date().toString(), mood: 'Jubilant', affirmation: 'Do Better'},
];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['JournalEntry', 'DateCaptured', 'Mood', 'Affirmations'];
  dataSource = new MatTableDataSource<JournalResponse>(JOURNAL_DATA);
  clickedRows = new Set<JournalObj>();

  constructor(private router: Router,
              public journalDialogService: JournalDialogService,
              private moodStoreService: MoodStoreService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  parseObjectToJson(obj: JournalObj) {
    return JSON.parse(JSON.stringify(obj));
  }

  addNewRowToSet(row: JournalResponse) {
    /*    this.clickedRows.clear();
        this.clickedRows.add(row);
        console.log(this.clickedRows);*/
    console.log(row);
    this.journalDialogService.showDialog(row);
  }


}
