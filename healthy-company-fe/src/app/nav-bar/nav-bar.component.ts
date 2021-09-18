import {Component, OnInit} from '@angular/core';
import {paths} from '../paths';
import {Router} from '@angular/router';
import {SettingsDialogService} from '../settings-dialog/settings-dialog.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              public settings: SettingsDialogService) {
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

}
