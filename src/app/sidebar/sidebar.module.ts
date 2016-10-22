import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarComponent } from './sidebar.component';
import { fullRouting } from '../main/full.routing';

@NgModule({
  declarations:[
      SidebarComponent
  ],
  imports:[
    BrowserModule,
    HttpModule,
    FormsModule,
    fullRouting
  ],
  providers:[
      
  ],
  exports:[
      SidebarComponent
  ]
})

export class SidebarModule {
  
}