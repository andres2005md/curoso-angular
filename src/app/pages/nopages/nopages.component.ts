import { Component } from '@angular/core';

@Component({
  selector: 'app-nopages',
  templateUrl: './nopages.component.html',
  styleUrls: ['./nopages.component.css']
})
export class NopagesComponent {
  year = new Date().getFullYear();


}
