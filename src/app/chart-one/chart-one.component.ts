import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import ApexCharts from "apexcharts";

@Component({
  selector: "app-chart-one",
  templateUrl: "./chart-one.component.html",
  styleUrls: ["./chart-one.component.css"]
})
export class ChartOneComponent implements AfterViewInit, OnInit, OnDestroy {
  ngOnInit() {}

  ngOnDestroy() {}

  ngAfterViewInit() {
    var options = {
      chart: {
        type: "line"
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }
}
