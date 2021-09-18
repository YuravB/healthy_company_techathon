import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SettingsDialogService} from '../settings-dialog/settings-dialog.service';
import {JournalObj} from '../../services/dto/JournalObj';

const JOURNAL_DATA: JournalObj[] = [
  {date: new Date(), mood: 'Ecstatic', title: 'Journal 1', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Sad', title: 'Journal 2', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Normal', title: 'Journal 3', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Joyful', title: 'Journal 4', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Distraught', title: 'Journal 5', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Normal', title: 'Journal 6', affirmations: 'Do Better'},
  {date: new Date(), mood: 'Horny', title: 'Journal 7', affirmations: 'Do Better'},
];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
              public settings: SettingsDialogService) {
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['dateCaptured', 'mood', 'title', 'affirmations'];
  dataSource =  new MatTableDataSource<JournalObj>(JOURNAL_DATA);
  clickedRows = new Set<JournalObj>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
