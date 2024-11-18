import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagesComponent } from './nopages/nopages.component';






@NgModule({
  declarations: [
    AppComponent,
    NopagesComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
