import { Component, Input } from '@angular/core';

@Component({
  selector:　'yk-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {
  @Input() disabled:boolean;
  @Input() text:string;
  @Input() checked:boolean;
}