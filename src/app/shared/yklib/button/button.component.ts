import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() text:string;
  @Input() type:string;
  @Input() i:string;

  setClass() {
    return 'btn btn-' + this.type;
  }

  setIClass() {
    return 'fa fa-' + this.i;
  }
}