import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarModule } from '../navbar/navbar.module';

import { FullComponent } from './full.component';
import { fullRouting } from './full.routing';

@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    fullRouting,
    NgbModule.forRoot(),
    NavbarModule
  ],
  providers: [
    Title
  ]
})

export class FullModule {
}