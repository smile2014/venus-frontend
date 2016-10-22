import { NgModule } from '@angular/core';
import { fullRouting } from '../main/full.routing';
import { ClassComponent } from './class.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    NgbModule.forRoot(),
    SharedModule,
    fullRouting
  ],
  providers: [],
  exports: [
    ClassComponent
  ]
})

export class ClassModule {

}