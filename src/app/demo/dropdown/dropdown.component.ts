import { Component } from '@angular/core';

@Component({
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  change(event:any) {
    alert('当前下拉状态是：' + event);
  }
}