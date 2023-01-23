import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ScreenBoardComponent } from './aframeComponents.index';



@NgModule({
  declarations: [
    ScreenBoardComponent
  ],
  exports: [
    ScreenBoardComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AframeComponentsModule { }
