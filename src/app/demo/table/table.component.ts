import { Component, ViewChild, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
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

  datas:any[];

  constructor(private tableService:TableService) {
    this.datas = [];
  }

  ngOnInit() {
    this.tableService.getData().subscribe(
        (res:any)=> {
          this.datas = res;
        },
        (error:any)=> {
          console.log(error);
        }
    );
  }

  getSelections() {
    this.selections = JSON.stringify(this.ykTable.getSelections());
  }
}