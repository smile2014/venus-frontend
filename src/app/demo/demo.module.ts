import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DemoComponent
  ]
})

export class DemoModule {
}