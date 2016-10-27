import { Component, Input } from '@angular/core';
import { BaseModel } from './base.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bf-model',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})

export class BaseComponent {
  @Input() model:BaseModel<any>;
  @Input() form:FormGroup;

  get isValid() {
    return this.form.controls[this.model.key].valid;
  }
}