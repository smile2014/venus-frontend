import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar.component';
import { fullRouting } from '../main/full.routing';

@NgModule({
  declarations:[
      NavbarComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    fullRouting
  ],
  providers:[
    
  ],
  exports:[
      NavbarComponent
  ]
})

export class NavbarModule {
  
}