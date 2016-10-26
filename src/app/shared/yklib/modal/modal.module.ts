import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    NgbModule.forRoot()
  ],
  exports: [
    ModalComponent
  ]
})

export class ModalModule {

}