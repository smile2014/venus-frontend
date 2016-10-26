import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @ViewChild('myModal1') myModal1:any;
  @ViewChild('myModal2') myModal2:any;

  open1() {
    this.myModal1.open();
  }

  submit1() {
    this.myModal1.close();
    alert('确认1！');
  }

  open2() {
    this.myModal2.open();
  }

  submit2() {
    this.myModal2.close();
    alert('确认2！');
  }
}