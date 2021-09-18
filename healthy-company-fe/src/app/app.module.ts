import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import {JournalPageComponent} from './journal-page/journal-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MoodDialogComponent} from './mood-dialog/mood-dialog.component';
import {TocDialogComponent} from './toc-dialog/toc-dialog.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MoodDialogService} from './mood-dialog/mood-dialog.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ComponentLoaderFactory} from 'ngx-bootstrap/component-loader';
import {PositioningService} from 'ngx-bootstrap/positioning';
import {MatTableModule} from '@angular/material/table';
import {SettingsDialogComponent} from './settings-dialog/settings-dialog.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    JournalPageComponent,
    LandingPageComponent,
    MoodDialogComponent,
    TocDialogComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSliderModule,
  ],
  providers: [
    FormBuilder,
    BsModalRef,
    MoodDialogService,
    BsModalService,
    ComponentLoaderFactory,
    PositioningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
