import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';

import { FullComponent } from './full.component';
import { fullRouting } from './full.routing';
import { ClassModule } from '../class/class.module';
import { DemoModule } from '../demo/demo.module';

@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    fullRouting,
    NavbarModule,
    DemoModule,
    SidebarModule,
    ClassModule
  ]
})

export class FullModule {
}