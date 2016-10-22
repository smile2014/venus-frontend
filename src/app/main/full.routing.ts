import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullComponent } from './full.component';
import { ClassComponent } from '../class/class.component';
import { DemoComponent } from '../demo/demo.component';

const routes:Routes = [
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
        component: DemoComponent
      },
      {
        path: 'class',
        component: ClassComponent
      }
    ]
  }
];

export const fullRouting:ModuleWithProviders = RouterModule.forChild(routes);