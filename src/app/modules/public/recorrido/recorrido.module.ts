import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecorridoComponent, Sector10Component, Sector11Component, Sector12Component, Sector13Component, Sector14Component, Sector15Component, Sector1Component, Sector2Component, Sector3Component, Sector4Component, Sector5Component, Sector6Component, Sector7Component, Sector8Component, Sector9Component } from './recorrido.index';



import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from 'src/app/components/components.module';






@NgModule({
  declarations: [RecorridoComponent, Sector1Component, Sector2Component, Sector3Component, Sector4Component, Sector5Component, Sector6Component, Sector7Component, Sector8Component, Sector9Component, Sector10Component, Sector11Component, Sector12Component, Sector13Component, Sector14Component, Sector15Component],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RecorridoModule { }
