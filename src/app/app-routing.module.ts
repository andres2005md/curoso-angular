import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


//modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/auth.routing';


import { NopagesComponent } from './nopages/nopages.component';





const routes: Routes = [
    
  //path: 'dashboard' pagesRouting
  //path: 'auth' AuthRouting

  { path: '',redirectTo:'/dashboard',pathMatch: 'full'},
  { path: '**',component:NopagesComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),  
    PagesRoutingModule,
    authRoutingModule
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
