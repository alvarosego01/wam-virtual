import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BeginComponent } from "./modules/public/begin/begin.component";
import { _PUBLIC_ROUTES } from "./modules/public/public.routes";
import { PublicComponent } from './modules/public/public.component';


const routes: Routes = [


  // {
  //   path: "public",
  //   component: PublicComponent,
  //   // canActivate: [LoginVerifyGuard],
  //   // canActivateChild: [LoginVerifyGuard],
  // },

  { path: '**', component: BeginComponent },
  { path: '', component: BeginComponent }
//   { path: '**', component: PublicComponent },
//   { path: '', component: PublicComponent }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),

    // _DASHBOARD_ROUTES,
    _PUBLIC_ROUTES,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
