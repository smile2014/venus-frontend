import { Component } from '@angular/core';

@Component({
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {
  change(event:any) {
    console.log(event);
  }
}