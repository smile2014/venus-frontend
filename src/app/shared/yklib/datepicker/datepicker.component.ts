import { Component, Input, Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
//noinspection TypeScriptCheckImport
import { UUID } from 'angular2-uuid';

const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  zh: {
    weekdays: ['一', '二', '三', '四', '五', '六', '日'],
    months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  }
};

@Injectable()
export class I18n {
  language = 'en';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n:I18n) {
    super();
  }

  getWeekdayName(weekday:number):string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }

  getMonthName(month:number):string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
}

@Component({
  selector: 'yk-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  viewProviders: [
    I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
  ]
})

export class DatepickerComponent {
  @Input() label:string;
  inputId:string;
  model:any;

  constructor(private _i18n: I18n) {
    this._i18n.language = 'zh';
    this.inputId = 'yk-datepicker' + UUID.UUID();
  }

}