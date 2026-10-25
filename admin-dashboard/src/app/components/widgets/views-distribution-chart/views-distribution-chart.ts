import { Component, computed, inject } from '@angular/core';
import { ChartsWidget } from '../charts-widget/charts-widget';
import { PostsService } from '../../../services/posts-service';
import { ChartDataset, ScriptableContext } from 'chart.js';

@Component({
  imports: [ChartsWidget],
  selector: 'app-views-distribution-chart',
  styleUrl: './views-distribution-chart.css',
  templateUrl: './views-distribution-chart.html',
})
export class ViewsDistributionChart {
  private posts = inject(PostsService).posts;

  views = computed(() => {
    const posts = this.posts.value()?.posts ?? [];

    const counts: number[] = [];
    const rangeSize = 500

    for (const post of posts) {
      const range = Math.floor(post.views / rangeSize);
      counts[range] = (counts[range] ?? 0) + 1;
    }

    const data = Array.from(counts, c => c ?? 0);
    const labels = data.map((_, i) => `${i * rangeSize}-${(i + 1) * rangeSize}`);

    return { labels, data };
  });
}
