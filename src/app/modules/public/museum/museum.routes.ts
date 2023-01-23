

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// elementos del musseum
import { Gallery1Component  } from './museum.index';




const hallRoutes: Routes = [

        {
          path: "1",
          component: Gallery1Component,
          // data: {state:  'sector1'}
          // data: {state:  'sector1'}
        },



        {
          path: "**",
          component: Gallery1Component,
        },

        {
          path: "",
          component: Gallery1Component,
        },

  ];

  @NgModule({
    imports: [ RouterModule.forChild(hallRoutes) ],
    exports: [ RouterModule ]
})
export class _MUSSEUM_ROUTES {}


