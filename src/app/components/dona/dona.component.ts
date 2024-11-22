import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input () title: string = 'Sin titulo';
  
  @Input('label') doughnutChartLabels: string [] = ['Label1','Label2','Label3',];
  
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor:[ '#33ffe3','#ff9333','#e213ff']
      },
    
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  
}
