import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { BeginComponent } from './begin/begin.component';
import { LandingPlanetComponent } from './begin/landing-planet/landing-planet.component';
import { LightSpeedComponent } from './begin/light-speed/light-speed.component';
import { SaludosComponent } from './begin/saludos/saludos.component';
import { VideoIntroComponent } from './begin/video-intro/video-intro.component';
import { ComponentsModule } from '../../components/components.module';
import { PrincipalComponent } from './principal/principal.component';
import { HallModule } from './hall/hall.module';
import { MuseumModule } from './museum/museum.module';
import { RecorridoModule } from './recorrido/recorrido.module';
import { PromoVideoComponent } from './promo-video/promo-video.component';
import { AframeTestsComponent } from './aframe-tests/aframe-tests.component';



@NgModule({
  declarations: [
    // PublicComponent,
    BeginComponent,
    SaludosComponent,
    LightSpeedComponent,
    LandingPlanetComponent,
    VideoIntroComponent,
    PrincipalComponent,
    PromoVideoComponent,
    AframeTestsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HallModule,
    MuseumModule,
    RecorridoModule
  ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    // PublicComponent
  ]
})
export class PublicModule { }
