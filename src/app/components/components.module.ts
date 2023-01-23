import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent, NavDashboardComponent, PaginatorComponent, PrincipalButtonComponent, PrincipalMenuComponent, SpinnerrComponent } from './global/index';
import { AnimateTextComponent } from './global/animate-text/animate-text.component';
import { DirectionalComponent } from './global/directional/directional.component';
import { InfoArtComponent } from './global/info-art/info-art.component';
import { VisorVideoComponent } from './global/visor-video/visor-video.component';



@NgModule({
    declarations: [SpinnerrComponent, LoaderComponent, NavDashboardComponent, PaginatorComponent, PrincipalButtonComponent, AnimateTextComponent, DirectionalComponent, InfoArtComponent, VisorVideoComponent, PrincipalMenuComponent],
    exports: [SpinnerrComponent, LoaderComponent, NavDashboardComponent, PaginatorComponent, PrincipalButtonComponent, AnimateTextComponent, DirectionalComponent, InfoArtComponent, VisorVideoComponent, PrincipalMenuComponent],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
