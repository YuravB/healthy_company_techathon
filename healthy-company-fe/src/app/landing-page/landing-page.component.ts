import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export enum paths {
  LANDING = '/home',
  LOGIN = '/login',
  ABOUT = '/about',
  JOURNAL = '/journal'
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

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

}
