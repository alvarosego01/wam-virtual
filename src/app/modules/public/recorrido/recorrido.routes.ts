

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// elementos del recorrido
import { Sector10Component, Sector11Component, Sector12Component, Sector13Component, Sector14Component, Sector15Component, Sector1Component, Sector2Component, Sector3Component, Sector4Component, Sector5Component, Sector6Component, Sector7Component, Sector8Component, Sector9Component } from './recorrido.index';


const recorridoRoutes: Routes = [

        {
          path: "1",
          component: Sector1Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "2",
          component: Sector2Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "3",
          component: Sector3Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "4",
          component: Sector4Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "5",
          component: Sector5Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "6",
          component: Sector6Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "7",
          component: Sector7Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "8",
          component: Sector8Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "9",
          component: Sector9Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "10",
          component: Sector10Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "11",
          component: Sector11Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "12",
          component: Sector12Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "13",
          component: Sector13Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "14",
          component: Sector14Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },
        {
          path: "15",
          component: Sector15Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },


        {
          path: "**",
          component: Sector1Component,
        },

        {
          path: "",
          component: Sector1Component,
        },

  ];

  @NgModule({
    imports: [ RouterModule.forChild(recorridoRoutes) ],
    exports: [ RouterModule ]
})
export class _RECORRIDO_ROUTES {}





// export const _ADMIN_ROUTES = RouterModule.forChild(adminRoutes);
