import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullComponent } from './full.component';
import { DemoComponent } from '../demo/demo.component';
import { ClassComponent } from '../class/class.component';
import { ButtonComponent } from '../demo/button/button.component';
import { CheckboxComponent } from '../demo/checkbox/checkbox.component';
import { TableComponent } from '../demo/table/table.component';
import { InputComponent } from '../demo/input/input.component';
import { ModalComponent } from '../demo/modal/modal.component';
import { AlertComponent } from '../demo/alert/alert.component';

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
          },
          {
            path: 'checkbox',
            component: CheckboxComponent
          },
          {
            path: 'table',
            component: TableComponent
          },
          {
            path: 'input',
            component: InputComponent
          },
          {
            path: 'modal',
            component: ModalComponent
          },
          {
            path: 'alert',
            component: AlertComponent
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