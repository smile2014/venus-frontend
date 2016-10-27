import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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
        label: '英雄等级',
        options: [
          {key: 'solid', value: '可靠'},
          {key: 'good', value: '不错'},
          {key: 'great', value: '很好'},
          {key: 'wonderful', value: '卓越'}
        ],
        order: 3
      }),
      new TextModel({
        key: 'firstName',
        label: '姓名',
        value: '杨恺',
        order: 1,
        validators: [Validators.required]
      }),
      new TextModel({
        key: 'emailAddress',
        label: '邮箱地址',
        type: 'email',
        order: 2
      })
    ];
    return models.sort((a, b) => a.order - b.order);
  }
}