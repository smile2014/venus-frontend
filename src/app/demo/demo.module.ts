import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    DemoComponent,
    ButtonComponent,
    CheckboxComponent,
    TableComponent,
    InputComponent,
    ModalComponent,
    AlertComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    TableService
  ],
  exports: [
    DemoComponent
  ]
})

export class DemoModule {
}