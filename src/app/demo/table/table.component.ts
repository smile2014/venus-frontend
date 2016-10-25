import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @ViewChild('ykTable') ykTable:any;
  selections:string;
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
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
      age: '12',
      hobbit: '篮球',
      phone: '123123123123'
    },
    {
      name: '太空',
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

  getSelections() {
    this.selections = JSON.stringify(this.ykTable.getSelections());
  }
}