import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FullModule } from './main/full.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    FullModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
