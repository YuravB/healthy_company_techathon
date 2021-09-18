import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {JournalPageComponent} from '../journal-page/journal-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: LoginPageComponent },
  { path: 'settings', component: LoginPageComponent },
  { path: 'journal', component: JournalPageComponent }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
