import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yk-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() datas:any[];
  @Input() columns:any[];
  @Input() index:boolean;
  @Input() checkbox:boolean;

  selections:any[];
  isCheckAll:boolean;
  tfootColspan:number;
  currentPage:number;
  size:number;
  pageSize:number;

  constructor() {
    this.isCheckAll = false;
    this.selections = [];
    this.currentPage = 1;
    this.pageSize = 1;
  }

  ngOnInit() {
    if (this.index) {
      this.tfootColspan = this.columns.length + 1;
    } else {
      this.tfootColspan = this.columns.length;
    }
    this.size = this.datas.length;
  }

  checkAll(isCheck:boolean) {
    this.isCheckAll = isCheck;
    this.selections = [];
    if (isCheck) {
      for (let i = 0; i < this.datas.length; i++) {
        this.selections.push(this.datas[i]);
      }
    }
  }

  check(i:number, isCheck:boolean) {
    if (isCheck) {
      this.selections.push(this.datas[i]);
    } else {
      let index:number;
      for (let j = 0; j < this.selections.length; j++) {
        if (this.datas[i] === this.selections[j]) {
          index = j;
        }
      }
      this.selections.splice(index, 1);
    }
  }

  getSelections() {
    return this.selections;
  }
}