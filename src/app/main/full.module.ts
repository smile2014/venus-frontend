import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';

import { FullComponent } from './full.component';
import { ClassModule } from '../class/class.module';
import { DemoModule } from '../demo/demo.module';
import { FullRoutingModule } from './full-routing.module';
import { HttpService } from '../util/http.service';

@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    FullRoutingModule,
    NavbarModule,
    DemoModule,
    SidebarModule,
    ClassModule
  ],
  providers:[
      HttpService
  ]
})

export class FullModule {
}