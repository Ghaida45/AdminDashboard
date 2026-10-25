import { afterRenderEffect, Component, ElementRef, inject, input, LOCALE_ID, OnDestroy, viewChild } from '@angular/core';
import { Chart, ChartDataset, ChartOptions, ChartType, registerables, ScatterDataPoint } from 'chart.js';

Chart.register(...registerables);

@Component({
  imports: [],
  selector: 'app-charts-widget',
  styleUrl: './charts-widget.css',
  templateUrl: './charts-widget.html',
})
export class ChartsWidget implements OnDestroy{
  title = input('');
  type = input<ChartType>('bar');
  labels = input<string[]>([]);
  data = input<number[] | ScatterDataPoint[]>([]);
  direction = input<'x' | 'y'>('x');
  xTitle = input('');
  yTitle = input('');
  datasets = input<ChartDataset[]>();
  options = input<ChartOptions>({});

  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private chart?: Chart;

  constructor() {
    afterRenderEffect(() => {
      this.chart?.destroy();
      this.chart = new Chart(this.canvas().nativeElement, {
        type: this.type(),
        data: {
          labels: this.labels(),
          datasets: this.datasets() ?? [
            { label: this.title(), data: this.data(), },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: this.direction(),
          ...(this.xTitle() || this.yTitle()
            ? {
              scales: {
                x: { title: { display: !!this.xTitle(), text: this.xTitle() } },
                y: { title: { display: !!this.yTitle(), text: this.yTitle() } },
              }
            }
            : {}),
          ...this.options(),
        },
      });
    });
  }

  ngOnDestroy() { this.chart?.destroy(); }
}
