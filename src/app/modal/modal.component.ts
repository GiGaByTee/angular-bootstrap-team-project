import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal',
    styleUrls: ['./modal.scss'],
    template: `
      <div [ngClass]="{'closed': !isOpen}">
        <div class="modal-overlay" (click)="close(true)"></div>

        <div class="modal">
          <div class="title" *ngIf="modalTitle">
            <span class="title-text">{{ modalTitle }}</span>
            <span class="right-align" (click)="close(true)"><i class="material-icons md-24">clear</i></span>
          </div>

          <div class="body">
            
          </div>
        </div>
      </div>
    `
})
export class ModalComponent implements OnInit {
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking = false;
  isOpen = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    console.log(this);
    this.modalService.registerModal(this);
  }

  close(checkBlocking:boolean): void {
    this.modalService.close(this.modalId, checkBlocking);
  }

}
