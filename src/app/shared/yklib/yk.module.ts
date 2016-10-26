import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { TableModule } from './table/table.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { InputModule } from './input/input.module';
import { ModalModule } from './modal/modal.module';
import { AlertModule } from './alert/alert.module';
import { DropdownModule } from './dropdown/dropdown.module';

const module = [
  ButtonModule,
  TableModule,
  CheckboxModule,
  InputModule,
  ModalModule,
  AlertModule,
  DropdownModule
];

@NgModule({
  imports: module,
  exports: module
})

export class YkModule {

}