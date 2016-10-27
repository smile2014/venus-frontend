import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() classType:string;
  @Input() i:string;
  @Input() disabled:boolean;
  @Input() type:string;

  constructor() {
    this.type = 'button';
  }

  setClass() {
    return 'btn btn-' + this.classType;
  }

  setIClass() {
    return 'fa fa-' + this.i;
  }
}