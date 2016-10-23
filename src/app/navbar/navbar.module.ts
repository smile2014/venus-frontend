import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { fullRouting } from '../main/full.routing';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    fullRouting
  ],
  providers: [],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule {

}