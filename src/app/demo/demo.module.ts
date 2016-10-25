import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';

@NgModule({
  declarations: [
    DemoComponent,
    ButtonComponent,
    CheckboxComponent,
    TableComponent
  ],
  imports: [
    SharedModule
  ],
  providers:[
    TableService
  ],
  exports: [
    DemoComponent
  ]
})

export class DemoModule {
}