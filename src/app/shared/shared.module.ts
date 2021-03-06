import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { YkModule } from './yklib/yk.module';

const module = [
  CommonModule,
  FormsModule,
  HttpModule,
  RouterModule,
  BrowserModule,
  YkModule
];

@NgModule({
  imports: module,
  exports: module
})

export class SharedModule {
}