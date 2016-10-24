import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CheckboxComponent
  ]
})

export class CheckboxModule {
}