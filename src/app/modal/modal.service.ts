import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  private modal: ModalComponent;

  constructor() {
  }

  registerModal(newModal: ModalComponent): void {
    this.modal= newModal;
    close();
  }

  open(modalId: string): void {
    console.log("open method");
    console.log(this.modal.isOpen);
    if (this.modal) {
      this.modal.isOpen = true;
    }
  }

  close(modalId: string, checkBlocking = false): void {
      this.modal.isOpen = false;
  }
}
