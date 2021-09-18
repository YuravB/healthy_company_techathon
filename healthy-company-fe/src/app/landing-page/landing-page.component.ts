import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export enum paths {
  LANDING = '/home',
  LOGIN = '/login',
  ABOUT = '/about',
  JOURNAL = '/journal'
}

export interface JournalObj {
  date: Date;
  mood: string;
  title: string;
  affirmations: string;
}

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public routeToLogin() {
    this.router.navigateByUrl(paths.LOGIN);
  }

  public routeToHome() {
    this.router.navigateByUrl(paths.LANDING);
  }

  public routeToAbout() {
    this.router.navigateByUrl(paths.ABOUT);
  }

  public routeToJournal() {
    this.router.navigateByUrl(paths.JOURNAL);
  }

  displayedColumns: string[] = ['dateCaptured', 'mood', 'title', 'affirmations'];
  dataSource =  new MatTableDataSource<JournalObj>(JOURNAL_DATA);
  clickedRows = new Set<JournalObj>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  parseObjectToJson(obj: JournalObj) {
    console.log(JSON.parse(JSON.stringify(obj)));
    return JSON.parse(JSON.stringify(obj));
  }


}
