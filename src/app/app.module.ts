import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicModule } from './modules/public/public.module';

import { GlobalService, SoundsEffectsService, TourService, AframeService } from './services';
import { PublicComponent } from './modules/public/public.component';
import { ComponentsModule } from './components/components.module';
import { AframeModule } from './aframe/aframe.module';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PublicModule,
    AframeModule
  ],
  providers: [
    GlobalService,
    SoundsEffectsService,
    TourService,
    AframeService
  ],
  bootstrap: [AppComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
