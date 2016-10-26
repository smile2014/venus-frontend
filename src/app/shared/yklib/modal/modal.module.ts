import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    NgbModule.forRoot()
  ],
  exports: [
    ModalComponent
  ]
})

export class ModalModule {

}