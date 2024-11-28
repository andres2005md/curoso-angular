import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[] = [
    {
      titulo: 'Dashboard!!!',
      icono:  'mdi mdi-gauge',
      submenu:[
        { titulo:'Graficas',url:'grafica1' },
        { titulo:'Main',url:'/' },
        { titulo:'ProgressBar',url:'progess' },
        { titulo:'Promesa',url:'promesa'},
        { titulo:'Rxjs',url:'rxjs'}
      ]
    
    }

  ]
  constructor() { }
}
