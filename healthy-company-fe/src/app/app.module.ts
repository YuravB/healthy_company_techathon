import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import { JournalPageComponent } from './journal-page/journal-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoodDialogComponent } from './mood-dialog/mood-dialog.component';
import { TocDialogComponent } from './toc-dialog/toc-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    JournalPageComponent,
    LandingPageComponent,
    MoodDialogComponent,
    TocDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
