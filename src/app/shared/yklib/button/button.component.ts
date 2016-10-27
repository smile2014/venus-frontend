import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() type:string;
  @Input() i:string;
  @Input() disabled:boolean;

  setClass() {
    return 'btn btn-' + this.type;
  }

  setIClass() {
    return 'fa fa-' + this.i;
  }
}