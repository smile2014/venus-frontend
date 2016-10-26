import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [
    TableComponent
  ]
})

export class TableModule {

}