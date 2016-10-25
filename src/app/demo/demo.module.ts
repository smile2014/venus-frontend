import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    DemoComponent,
    ButtonComponent
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