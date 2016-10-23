import { NgModule } from '@angular/core';
import { fullRouting } from '../main/full.routing';
import { ClassComponent } from './class.component';

@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    fullRouting
  ],
  exports: [
    ClassComponent
  ]
})

export class ClassModule {

}