import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseModel } from './base.model';

@Injectable()
export class FormService {
  constructor() {
  }

  toForm(models:BaseModel<any>[]) {
    let group:any = {};
    models.forEach(model=> {
      group[model.key] = new FormControl(model.value || '', model.validators);
    });
    return new FormGroup(group);
  }
}