import { Component, OnInit, AfterViewInit } from '@angular/core';
import ApexCharts from "apexcharts";

@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.css']
})
export class ChartTwoComponent implements AfterViewInit, OnInit {

  ngAfterViewInit() {
     var options = {
          series: [44, 55, 13, 33],
          chart: {
          width: 280,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();
   }

  ngOnInit() {
  }

}