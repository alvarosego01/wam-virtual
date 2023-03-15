import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { A_TableStands_ComponentService } from "./components";


@NgModule({
  providers: [
    A_TableStands_ComponentService
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    // DefaultThingamajigModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AframeModule { }
