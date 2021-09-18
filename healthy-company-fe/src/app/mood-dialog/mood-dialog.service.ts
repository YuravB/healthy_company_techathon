import {Injectable} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import {MoodDialogComponent} from './mood-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MoodDialogService {

  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-xl'
  };

  constructor(private modalService: BsModalService) {
  }

  showDialog(): Subject<string> {
    const bsModalRef = this.modalService.show(MoodDialogComponent,
      Object.assign({}, this.config, {}));

    const modalContent: MoodDialogComponent = bsModalRef.content;

    return modalContent.onClose;

  }
}
