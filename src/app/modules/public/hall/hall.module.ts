import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "../../../components/components.module";
import { HallComponent } from "./hall.component";
import { BeginComponent, Begin2Component, Begin3Component } from "./index";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [HallComponent, BeginComponent, Begin2Component, Begin3Component],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    // DialogModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HallModule { }
