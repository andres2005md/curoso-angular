import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "../progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
    
  {
    path:'dashboard',
   component:PagesComponent,
   children: [
     
     { path: '',component:DashboardComponent, data: {titulo:'Dashboard'} },
     { path: 'progess',component:ProgressComponent, data: { titulo:'Progess'} },
     { path: 'grafica1',component:Grafica1Component, data: { titulo:'Grafica #1'} },
     {path:  'account',component:AccountSettingsComponent, data: { titulo:'account'} },
     {path:  'promesa',component:PromesasComponent, data: { titulo:'Promesa'} },
     {path: 'rxjs',component:RxjsComponent , data: { titulo:'Rxjs'}}
     
    
   ]
       
 },

]; 


@NgModule({
    imports:[RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}