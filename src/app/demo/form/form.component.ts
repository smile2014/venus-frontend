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
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ],
        validatorMessages: {
          'required': '这是一个required',
          'minlength': '这是一个minlength-4',
          'maxlength': '这是一个maxlength-10'
        }
      }),
      new TextModel({
        key: 'emailAddress',
        label: '邮箱地址',
        type: 'text',
        order: 2,
        validators: [
            Validators.pattern('([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+')
        ],
        validatorMessages: {
          'pattern': '邮箱格式不对'
        }
      })
    ];
    return models.sort((a, b) => a.order - b.order);
  }
}