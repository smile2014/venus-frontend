import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { TableModule } from './table/table.module';
import { CheckboxModule } from './checkbox/checkbox.module';

const module = [
  ButtonModule,
  TableModule,
  CheckboxModule
];

@NgModule({
  imports: module,
  exports: module
})

export class YkModule {

}