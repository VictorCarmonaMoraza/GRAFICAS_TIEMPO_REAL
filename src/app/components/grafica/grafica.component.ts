import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {



  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81],
        label: 'Ventas',
        backgroundColor: 'yellow',
        borderColor: 'brown',
        pointBackgroundColor: 'orange',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'pink',
        pointHoverBorderColor: 'blue',
        fill: 'origin',
      }
    ],
    labels: ['January', 'February', 'March', 'April'],
  };

  public lineChartType: ChartType = 'line';


  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{

      const newData =[
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100)
      ];

      this.lineChartData= {
        datasets: [
          {
            data: newData,
            label: 'Ventas',
            backgroundColor: '#95E58D',
            borderColor: 'brown',
            pointBackgroundColor: 'orange',
            pointBorderColor: 'red',
            pointHoverBackgroundColor: 'pink',
            pointHoverBorderColor: 'blue',
            fill: 'origin',
          }
        ],
        labels: ['January', 'February', 'March', 'April'],
      }
    },3000);
  }
}
