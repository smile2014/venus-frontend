import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'yk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  @ViewChild('myDropdown') myDropdown:any;
  @Input() up:boolean;
  @Input() text:string;
  @Input() open:boolean;
  @Input() autoClose:boolean;
  @Input() type:string;
  @Output() openChange = new EventEmitter();

  constructor() {
    this.up = false;
    this.text = '';
    this.autoClose = true;
    this.open = false;
    this.type = 'primary-outline';
  }

  setClass() {
    return 'btn btn-' + this.type;
  }

  isOpen() {
    return this.myDropdown.isOpen();
  }

  drop() {
    this.myDropdown.open();
  }

  close() {
    this.myDropdown.close();
  }

  toggle() {
    this.myDropdown.toggle();
  }
  
  _openChange(event:any) {
    this.openChange.emit(this.myDropdown.isOpen());
  }
}