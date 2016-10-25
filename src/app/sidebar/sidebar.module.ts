import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import { FullRoutingModule } from '../main/full-routing.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
      FullRoutingModule
  ],
  exports: [
    SidebarComponent
  ]
})

export class SidebarModule {

}