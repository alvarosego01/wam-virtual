

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Begin2Component, Begin3Component, BeginComponent } from './index';



// elementos del hall


const hallRoutes: Routes = [

    // {
    //     path: '',
    //     redirectTo: 'hall',
    //     pathMatch: 'full'
    // },


      {
          path: "",
          component: BeginComponent,
        },

    {
        path: "hall",
        component: BeginComponent,
        // data: {state:  'sector1'}
        // data: {state:  'sector1'}
    },
    // {
    //     path: "hall2",
    //     component: Begin2Component,
    //     // data: {state:  'sector1'}
    //     // data: {state:  'sector1'}
    // },
    // {
    //     path: "hall3",
    //     component: Begin3Component,
    //     // data: {state:  'sector1'}
    //     // data: {state:  'sector1'}
    // },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },


    //  {
    //       path: "**",
    //       redirectTo: 'hall',
    //       pathMatch: 'full',
    //       component: BeginComponent,
    //     },




];

@NgModule({
    imports: [RouterModule.forChild(hallRoutes)],
    exports: [RouterModule]
})
export class _HALL_ROUTES { }


