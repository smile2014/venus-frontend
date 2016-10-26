import { Component, Input } from '@angular/core';
//noinspection TypeScriptCheckImport
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'yk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() label:string;
  inputId:string;

  constructor() {
    this.inputId = 'yk-input' + UUID.UUID();
  }

  showHint:boolean = false;
}