import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullComponent } from './full.component';
import { DemoComponent } from '../demo/demo.component';
import { ClassComponent } from '../class/class.component';
import { ButtonComponent } from '../demo/button/button.component';

const routes:any = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'demo'
      },
      {
        path: 'demo',
        component: DemoComponent,
        children: [
          {
            path: '',
            redirectTo: 'button'
          },
          {
            path: 'button',
            component: ButtonComponent
          }
        ]
      },
      {
        path: 'class',
        component: ClassComponent
      }
    ]
  }
];

const routing:any = RouterModule.forChild(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})

export class FullRoutingModule {

}