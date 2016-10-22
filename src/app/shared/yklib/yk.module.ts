import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { TableModule } from './table/table.module';

const module = [
  ButtonModule,
  TableModule
];

@NgModule({
  imports: module,
  exports: module
})

export class YkModule {

}