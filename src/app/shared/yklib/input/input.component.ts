import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() label:string;
  @Input() labelWidth:string;
  showHint:boolean = true;
}