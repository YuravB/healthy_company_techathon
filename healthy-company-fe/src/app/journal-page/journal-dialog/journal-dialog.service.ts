import {Injectable} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import {MoodDialogComponent} from '../../mood-dialog/mood-dialog.component';
import {JournalDialogComponent} from './journal-dialog.component';
import {JournalResponse} from '../../../services/dto/JournalResponse';
import {mod} from 'ngx-bootstrap/chronos/utils';

@Injectable({
  providedIn: 'root'
})
export class JournalDialogService {

  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-xl'
  };

  constructor(private modalService: BsModalService) {
  }

  showDialog(row: JournalResponse): void {
    const bsModalRef = this.modalService.show(JournalDialogComponent,
      Object.assign({}, this.config, {}));

    const modalContent: JournalDialogComponent = bsModalRef.content;
    modalContent.journalResponse = row;
  }
}
