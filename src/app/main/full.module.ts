import { NgModule } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';

import { FullComponent } from './full.component';
import { fullRouting } from './full.routing';
import { ClassModule } from '../class/class.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    SharedModule,
    fullRouting,
    NgbModule.forRoot(),
    NavbarModule,
    SidebarModule,
    ClassModule
  ],
  providers: [
    Title
  ]
})

export class FullModule {
}