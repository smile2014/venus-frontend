import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    NgbModule.forRoot(),
    CommonModule
  ],
  exports: [
    DropdownComponent
  ]
})

export class DropdownModule {

}