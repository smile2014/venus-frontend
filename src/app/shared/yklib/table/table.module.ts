import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '../checkbox/checkbox.module';

@NgModule({
  declarations:[
      TableComponent
  ],
  imports:[
      CommonModule,
      CheckboxModule
  ],
  exports:[
      TableComponent
  ]
})

export class TableModule {
  
}