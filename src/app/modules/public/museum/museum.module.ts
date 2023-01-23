import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "../../../components/components.module";
import { MuseumComponent } from "./museum.component";
import { Gallery1Component } from "./museum.index";



@NgModule({
  declarations: [MuseumComponent, Gallery1Component],
  imports: [

    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ComponentsModule,
    // DialogModule

  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MuseumModule { }
