import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormService } from './form.service';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    FormComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FormService
  ],
  exports: [
    FormComponent,
    BaseComponent
  ]
})

export class FormModule {

}