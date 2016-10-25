import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FullModule } from './main/full.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FullModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
