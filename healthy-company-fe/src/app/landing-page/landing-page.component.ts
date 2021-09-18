import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SettingsDialogService} from '../settings-dialog/settings-dialog.service';
import {JournalObj} from '../../services/dto/JournalObj';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MoodDialogService} from '../mood-dialog/mood-dialog.service';
import {MoodStoreService} from '../mood-dialog/mood-store.service';

const JOURNAL_DATA: JournalObj[] = [
  {date: new Date(), mood: 'Ecstatic', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Sad', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Normal', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Joyful', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Distraught', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Normal', affirmations: 'Do Better'}
];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['dateCaptured', 'mood', 'affirmations'];
  dataSource = new MatTableDataSource<JournalObj>(JOURNAL_DATA);
  clickedRows = new Set<JournalObj>();

  constructor(private router: Router,
              public moodDialogService: MoodDialogService,
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

  addNewRowToSet(row: JournalObj) {
    this.clickedRows.clear();
    this.clickedRows.add(row);
    console.log(this.clickedRows);
  }


}
