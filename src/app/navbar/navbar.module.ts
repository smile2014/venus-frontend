import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { FullRoutingModule } from '../main/full-routing.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    FullRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule {

}