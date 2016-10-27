import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    NgbModule.forRoot()
  ],
  exports: [
    DatepickerComponent
  ]
})

export class DatepickerModule {

}