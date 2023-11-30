import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { Grafica } from 'src/app/interface/grafica';

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


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {

    this.getData();

    //setInterval(()=>{

    //   const newData =[
    //     Math.round(Math.random()*100),
    //     Math.round(Math.random()*100),
    //     Math.round(Math.random()*100),
    //     Math.round(Math.random()*100)
    //   ];

    //   this.lineChartData= {
    //     datasets: [
    //       {
    //         data: newData,
    //         label: 'Ventas',
    //         // backgroundColor: '#95E58D',
    //         // borderColor: 'brown',
    //         // pointBackgroundColor: 'orange',
    //         // pointBorderColor: 'red',
    //         // pointHoverBackgroundColor: 'pink',
    //         // pointHoverBorderColor: 'blue',
    //         // fill: 'origin',
    //       }
    //     ],
    //     labels: ['January', 'February', 'March', 'April'],
    //   }
    // },3000);
  }

  getData(){
    this.http.get<Grafica>('http://localhost:5000/grafica')
    .subscribe((data:any)=>{
      console.log(data);
      console.log(data[0].data);
      this.lineChartData= {
        datasets: [
          {
            data: data[0].data,
            label: data[0].label,
            // backgroundColor: '#95E58D',
            // borderColor: 'brown',
            // pointBackgroundColor: 'orange',
            // pointBorderColor: 'red',
            // pointHoverBackgroundColor: 'pink',
            // pointHoverBorderColor: 'blue',
            // fill: 'origin',
          }
        ],
        labels: ['January', 'February', 'March', 'April'],
      }
    })
  }
}
