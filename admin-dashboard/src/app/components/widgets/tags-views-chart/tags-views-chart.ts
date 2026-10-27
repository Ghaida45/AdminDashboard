import { Component, computed, inject } from '@angular/core';
import { ChartsWidget } from '../charts-widget/charts-widget';
import { PostsService } from '../../../services/posts-service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { translate, TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ChartsWidget, TranslatePipe],
  selector: 'app-tags-views-chart',
  styleUrl: './tags-views-chart.css',
  templateUrl: './tags-views-chart.html',
})
export class TagsViewsChart {
  private posts = inject(PostsService).posts;

  tagsViews = computed (() =>{
    const posts = this.posts.value()?.posts ?? [];

    // const tagsViews: Record<string, { count: number, views: number }> = {}
    const tagsViews: {[key: string]: { count: number, views: number }} = {}

    for (const post of posts) {
      for (const tag of post.tags) {
        tagsViews[tag] = {
          count: (tagsViews[tag]?.count ?? 0) + 1,
          views: (tagsViews[tag]?.views ?? 0) + post.views,
        };
      }
    }

    const tagsArray = Object.entries(tagsViews);
    tagsArray.sort((a, b) => b[1].count - a[1].count);
    const top10ByTags = tagsArray.slice(0, 10);
    
    const labels = top10ByTags.map(t => t[0]);
    const counts = top10ByTags.map(t => t[1].count);
    const avgViews = top10ByTags.map(t => Math.round(t[1].views / t[1].count));

    return {labels, counts, avgViews}
  });

  private postsLabel = translate('charts.tags-views-posts');
  private avgViewsLabel = translate('charts.tags-views-avg-views');

  datasets = computed<ChartDataset[]>(() => [
    { type: 'bar', label: this.postsLabel(), data: this.tagsViews().counts, yAxisID: 'y', order: 2 },
    { type: 'line', label: this.avgViewsLabel(), data: this.tagsViews().avgViews, yAxisID: 'y1', order: 1 },
  ])

  chartOptions: ChartOptions = {
    scales: {
      y:  { title: { display: true, text: 'Posts' } },
      y1: {
        position: 'right',
        title: { display: true, text: 'Avg views' },
        grid: { drawOnChartArea: false },
      },
    },
  };

}
