import { Component } from '@angular/core';


import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  
  public label1 : string []=   ['Pan','Gaseosa', 'Pizza'];

   public data1: ChartData<'doughnut'> = {
    labels: this.label1,
    datasets: [
      { data: [20, 30, 50],
        backgroundColor:[ '#33ffe3','#ff9333','#e213ff']
      },
    
    ],
  };
}
