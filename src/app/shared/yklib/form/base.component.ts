import { Component, Input, OnInit } from '@angular/core';
import { BaseModel } from './base.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bf-model',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})

export class BaseComponent implements OnInit {
  @Input() model:BaseModel<any>;
  @Input() form:FormGroup;
  errorMessage:string;
  isValid:boolean;

  constructor() {
    this.isValid = true;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?:any) {
    this.errorMessage = '';
    this.isValid = true;
    const control = this.form.controls[this.model.key];
    if (control && !control.valid) {
      const msg = this.model.validatorMessages;
      for (const key in control.errors) {
        this.errorMessage += msg[key] + ' ';
      }
      this.isValid = false;
    }
  }

}