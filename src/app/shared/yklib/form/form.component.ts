import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormService } from './form.service';
import { BaseModel } from './base.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'yk-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Input() models:BaseModel<any>[] = [];
  @Output() cancel = new EventEmitter();
  form:FormGroup;
  payLoad:string = '';

  constructor(private formService:FormService) {

  }

  ngOnInit() {
    this.form = this.formService.toForm(this.models);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  _cancel(event:any) {
    this.cancel.emit(event);
  }
}