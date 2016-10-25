import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'yk-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnChanges {
  @Input() datas:any[];
  @Input() columns:any[];
  @Input() index:boolean;
  @Input() checkbox:boolean;

  selections:any[];
  isCheckAll:boolean;
  tfootColspan:number;
  noDataColspan:number;
  currentPage:number;
  size:number;
  pageSize:number;
  currentPageData:any[];
  hasData:boolean;

  constructor() {
    this.isCheckAll = false;
    this.selections = [];
    this.currentPageData = [];
    this.currentPage = 1;
    this.pageSize = 10;
    this.hasData = false;
  }

  ngOnChanges() {
    this.setSize();
    this.setCurrentPageData();
    this.setTfootColspan();
    this.setNoDataColspan();
  }

  setCurrentPageData() {
    this.currentPageData = [];
    let index = (this.currentPage - 1) * this.pageSize;
    let length = 0;
    if (this.size < this.currentPage * this.pageSize) {
      length = this.size;
    } else {
      length = this.currentPage * this.pageSize;
    }
    for (let i = index; i < length; i++) {
      this.currentPageData.push(this.datas[i]);
    }
  }

  setTfootColspan() {
    if (this.index) {
      this.tfootColspan = this.columns.length + 1;
    } else {
      this.tfootColspan = this.columns.length;
    }
  }

  setNoDataColspan() {
    if (this.index && this.checkbox) {
      this.noDataColspan = this.columns.length + 2;
    }
    if ((this.index && !this.checkbox) || (!this.index && this.checkbox)) {
      this.noDataColspan = this.columns.length + 1;
    }
    if (!this.index && !this.checkbox) {
      this.noDataColspan = this.columns.length;
    }
  }

  setSize() {
    this.size = this.datas.length;
    if (this.size > 0) {
      this.hasData = true;
    } else {
      this.hasData = false;
    }
  }

  checkAll(isCheck:boolean) {
    this.isCheckAll = isCheck;
    this.selections = [];
    if (isCheck) {
      for (let i = 0; i < this.currentPageData.length; i++) {
        this.selections.push(this.currentPageData[i]);
      }
    }
  }

  check(i:number, isCheck:boolean) {
    if (isCheck) {
      this.selections.push(this.currentPageData[i]);
    } else {
      let index:number;
      for (let j = 0; j < this.selections.length; j++) {
        if (this.currentPageData[i] === this.selections[j]) {
          index = j;
        }
      }
      this.selections.splice(index, 1);
    }
  }

  getSelections() {
    return this.selections;
  }

  pageChange(event:any) {
    this.isCheckAll = false;
    this.currentPage = event;
    this.selections = [];
    this.setCurrentPageData();
  }
}