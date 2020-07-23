import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaterialModule } from "./material/material.module";
import { ChartOneComponent } from "./chart-one/chart-one.component";
import { ChartTwoComponent } from "./chart-two/chart-two.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    NgApexchartsModule,
    PDFExportModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    ChartOneComponent,
    ChartTwoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
