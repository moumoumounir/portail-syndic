import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Reclamos } from 'src/app/clases/reclamos';
import { ReclamosService } from 'src/app/services/reclamos.service';

@Component({
  selector: 'app-kpipaiment-graph',
  templateUrl: './kpipaiment-graph.component.html',
  styleUrls: ['./kpipaiment-graph.component.css']
})
export class KpipaimentGraphComponent implements OnInit {
  reclamos: Reclamos[] = [];
  public numeroError: number = 0;
  public numeroenProgreso: number = 0;
  public numeroFinalizado: number = 0;

  public pieChartLabels: Label[] = ['Total', 'Avance', 'impayé'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: SingleDataSet = [35, 10, 15];
  public pieCharColors;


  constructor(private services: ReclamosService) { }

  ngOnInit(): void {
   // this.cargarReclamos();
  }

  cargarReclamos() {
    this.services.cargarReclamos().subscribe(ReclamosServices => {
      this.reclamos = ReclamosServices;
      for (const a of this.reclamos) {
        if (a.estado == "Finalizado") this.numeroFinalizado++;
        else if (a.estado == "En Progreso") this.numeroenProgreso++;
        else if (a.estado == "Error") this.numeroError++;
        this.pieChartData = [this.numeroError, this.numeroenProgreso, this.numeroFinalizado];
      }
    });
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
}