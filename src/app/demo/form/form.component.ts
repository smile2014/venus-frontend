import { Component, OnInit } from '@angular/core';
import { BaseModel } from '../../shared/yklib/form/base.model';
import { SelectModel } from '../../shared/yklib/form/select.model';
import { TextModel } from '../../shared/yklib/form/text.model';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  models:BaseModel<any>[];

  constructor() {
    this.models = [];
  }

  ngOnInit() {
    this.models = this.getModels();
  }

  getModels() {
    let models:BaseModel<any>[] = [
      new SelectModel({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextModel({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        order: 1
      }),
      new TextModel({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return models.sort((a, b) => a.order - b.order);
  }
}