import { Component, Input } from '@angular/core';
//noinspection TypeScriptCheckImport
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'yk-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent {
  @Input() label:string;
  inputId:string;
  model:any;

  constructor() {
    this.inputId = 'yk-datepicker' + UUID.UUID();
  }

}