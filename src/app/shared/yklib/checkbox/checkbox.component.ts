import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
  selector: 'yk-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {

  @Input() disabled:boolean;
  @Input() text:string;
  @Input() checked:boolean;
  @Input() value:any;
  @Output() change = new EventEmitter();

  constructor() {
    this.checked = false;
  }
  
  _change(event:any) {
    event.stopPropagation();
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}