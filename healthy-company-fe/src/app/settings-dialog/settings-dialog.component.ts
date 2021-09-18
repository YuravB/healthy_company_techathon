import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {

  private _versionNumber = '1.0.0';
  private _saveTimer = 24;

  get saveTimer(): number {
    return this._saveTimer;
  }

  set saveTimer(value: number) {
    if (value == null) {
      this._saveTimer = 24;
    } else {
      this._saveTimer = value;
    }
  }

  get versionNumber(): string {
    return this._versionNumber;
  }

  set versionNumber(value: string) {
    this._versionNumber = value;
  }

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  public clickOk() {
    this.bsModalRef.hide();
    // this.onClose.next();
  }

  public clickCancel() {
    this.bsModalRef.hide();
    // this.onClose.next();
  }

}
