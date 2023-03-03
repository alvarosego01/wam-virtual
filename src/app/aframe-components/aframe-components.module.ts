import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ScreenBoardComponent, StandModelComponent } from './index';

@NgModule({
  declarations: [
    ScreenBoardComponent,
    StandModelComponent
  ],
  exports: [
    ScreenBoardComponent,
    StandModelComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AframeComponentsModule { }
