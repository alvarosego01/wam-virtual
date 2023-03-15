import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { HallComponent } from './hall';
import { MuseumComponent } from './museum/museum.index';
import { PrincipalComponent } from './principal/principal.component';
import { PromoVideoComponent } from './promo-video/promo-video.component';
import { PublicComponent } from './public.component';
import { RecorridoComponent } from './recorrido/recorrido.index';
import { AframeTestsComponent } from './aframe-tests/aframe-tests.component';



const publicRoutes: Routes = [


    {
        path: "public",
        component: PublicComponent,
        // canActivate: [LoginVerifyGuard],
        // canActivateChild: [LoginVerifyGuard],
        children: [

            {
                path: '',
                redirectTo: 'begin',
                pathMatch: 'full'
            },

            {
                path: 'begin',
                component: BeginComponent,
                // canActivate: [noLoginVerifyGuard],
                // canActivateChild: [noLoginVerifyGuard],
            },

            {
                path: "principal",
                component: PrincipalComponent,

            },
            {
                path: "3dTest",
                component: AframeTestsComponent,

            },

            {
                path: "travel",
                component: RecorridoComponent,
                data: { state: 'travel' },
                //  canActivate: [noLoginVerifyGuard],
                //   canActivateChild: [noLoginVerifyGuard],
                // canLoad: [ AuthGuard ],
                loadChildren: () => import('./recorrido/recorrido.routes').then(m => m._RECORRIDO_ROUTES)
            },
            {
                path: 'promo',
                component: PromoVideoComponent,
                // canActivate: [noLoginVerifyGuard],
                // canActivateChild: [noLoginVerifyGuard],
            },

            {
                path: "hall",
                component: HallComponent,
                data: { state: 'hall' },
                //  canActivate: [noLoginVerifyGuard],
                //   canActivateChild: [noLoginVerifyGuard],
                // canLoad: [ AuthGuard ],
                loadChildren: () => import('./hall/hall.routes').then(h => h._HALL_ROUTES)
            },

            {
                path: "museum",
                component: MuseumComponent,
                data: { state: 'museum' },
                //  canActivate: [noLoginVerifyGuard],
                //   canActivateChild: [noLoginVerifyGuard],
                // canLoad: [ AuthGuard ],
                loadChildren: () => import('./museum/museum.routes').then(ms => ms._MUSSEUM_ROUTES)
            },


            {
                path: '**',
                redirectTo: 'begin',
                pathMatch: 'full'
            },

        ]

    },



];


@NgModule({
    imports: [RouterModule.forChild(publicRoutes)],
    exports: [RouterModule]
})
export class _PUBLIC_ROUTES { }





// export const _DASHBOARD_ROUTES = RouterModule.forChild(dashboardRoutes);

