import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';

const module = [
    ButtonModule
];

@NgModule({
  imports: module,
  exports: module
})

export class YkModule {
  
}