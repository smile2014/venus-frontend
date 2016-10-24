import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    NgbModule.forRoot()
  ],
  exports: [
    TableComponent
  ]
})

export class TableModule {

}