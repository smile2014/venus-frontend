import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  @Input() up:boolean;
  @Input() text:string;

  constructor() {
    this.up = false;
    this.text = '';
  }
}