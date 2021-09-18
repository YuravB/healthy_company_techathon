import {Injectable} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import {MoodDialogComponent} from '../mood-dialog/mood-dialog.component';
import {SettingsDialogComponent} from './settings-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsDialogService {

  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-xl'
  };

  constructor(private modalService: BsModalService) {
  }

  showDialog() {
    let bsModalRef = this.modalService.show(SettingsDialogComponent,
      Object.assign({}, this.config, {}));

    let modalContent: SettingsDialogComponent = bsModalRef.content;

  }
}
