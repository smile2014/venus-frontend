import { Component } from '@angular/core';

@Component({
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent {
  columns:any[] = [
    {
      title: '姓名',
      field: 'name'
    },
    {
      title: '年龄',
      field: 'age'
    },
    {
      title: '爱好',
      field: 'hobbit'
    },
    {
      title: '电话',
      field: 'phone'
    }
  ];

  datas:any[] = [
    {
      name: '杨恺',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '小红',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '小明',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    }
  ];

  test:any = 'testa';
}