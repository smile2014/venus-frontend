import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import { fullRouting } from '../main/full.routing';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    fullRouting
  ],
  providers: [],
  exports: [
    SidebarComponent
  ]
})

export class SidebarModule {

}