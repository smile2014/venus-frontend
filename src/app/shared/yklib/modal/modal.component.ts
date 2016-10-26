import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'yk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() title:string;
  @Input() backdrop:any;
  @Input() keyboard:boolean;
  @Input() windowClass:string;
  @Output() submit = new EventEmitter();
  @ViewChild('content') content:any;

  modal:any;

  constructor(private modalService:NgbModal) {
    this.title = '';
    this.backdrop = true;
    this.keyboard = true;
    this.windowClass = '';
  }

  open() {
     this.modal = this.modalService.open(this.content, {
      backdrop: this.backdrop,
      keyboard: this.keyboard,
      windowClass: this.windowClass
    });
  }

  close() {
    this.modal.close();
  }

  _submit(event:any) {
    this.submit.emit(event);
  }
}