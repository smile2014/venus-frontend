import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() datas:any[];
  @Input() columns:any[];
}