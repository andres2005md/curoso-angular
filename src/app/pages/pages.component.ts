import { Component,OnInit } from '@angular/core';

import {SettingsService } from '../services/settings.service';

 declare function customIniFunctions (); 
  
 
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})

export class PagesComponent implements OnInit{
  // ./assets/css/colors/purple-dark.css
 
  constructor ( private SettingsService:SettingsService ) {
    
  }
  ngOnInit(): void {

    customIniFunctions();
  }


  // const url = `./assets/css/colors/${theme}.css`;


}
