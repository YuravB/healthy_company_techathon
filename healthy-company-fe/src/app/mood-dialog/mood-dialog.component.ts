import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-mood-dialog',
  templateUrl: './mood-dialog.component.html',
  styleUrls: ['./mood-dialog.component.css']
})
export class MoodDialogComponent implements OnInit {

  public onClose: Subject<string>;

  private _feelings: string = '';


  get feelings(): string {
    return this._feelings;
  }

  set feelings(value: string) {
    this._feelings = value;
  }

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  public clickOk() {
    this.bsModalRef.hide();
    this.onClose.next(this.feelings);
  }

  public clickCancel() {
    this.bsModalRef.hide();
    this.onClose.next(this.feelings);
  }

}
