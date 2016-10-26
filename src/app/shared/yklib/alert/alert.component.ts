import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yk-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent {
  @Input() timeout:number;
  @Output() close = new EventEmitter();

  isShow:boolean;

  constructor() {
    this.isShow = false;
    this.timeout = 0;
  }

  _close(event:any) {
    this.close.emit(event);
  }

  show() {
    this.isShow = true;
    if (this.timeout > 0) {
      setTimeout(()=> {
        this.isShow = false;
      }, this.timeout);
    }
  }

  hide() {
    this.isShow = false;
  }
}