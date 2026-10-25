import { Component, computed, inject } from '@angular/core';
import { ChartsWidget } from '../charts-widget/charts-widget';
import { PostsService } from '../../../services/posts-service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  imports: [ChartsWidget],
  selector: 'app-tags-views-likes-chart',
  styleUrl: './tags-views-likes-chart.css',
  templateUrl: './tags-views-likes-chart.html',
})
export class TagsViewsLikesChart {
  private posts = inject(PostsService).posts;

  radar = computed(() => {
    const posts = this.posts.value()?.posts ?? [];

    const tagData: Record<string, { count: number, views: number, likes: number, dislikes: number }> = {}

    for(const post of posts) {
      for(const tag of post.tags) {
        tagData[tag] = {
          count: (tagData[tag]?.count ?? 0) + 1,
          views: (tagData[tag]?.views ?? 0) + post.views,
          likes: (tagData[tag]?.likes ?? 0) + post.reactions.likes,
          dislikes: (tagData[tag]?.dislikes ?? 0) + post.reactions.dislikes,
        }
      }
    }

    const tagArray = Object.entries(tagData);
    tagArray.sort((a, b) => b[1].count - a[1].count);
    const top3ByTags = tagArray.slice(0, 3);

    const tags = top3ByTags.map(t => t[0]);
    const counts = top3ByTags.map(t => t[1].count);
    const views = top3ByTags.map(t => t[1].views / t[1].count);
    const likes = top3ByTags.map(t => t[1].likes / t[1].count);
    const dislikes = top3ByTags.map(t => t[1].dislikes / t[1].count);
    
    const highestCount = Math.max(...counts);
    const highestViews = Math.max(...views);
    const highestLikes = Math.max(...likes);
    const highestDislikes = Math.max(...dislikes);

    const labels = [
      $localize`:@@charts.tags-views-likes-avg-posts:Posts`, 
      $localize`:@@charts.tags-views-likes-avg-views:Avg Views`, 
      $localize`:@@charts.tags-views-likes-avg-likes:Avg Likes`, 
      $localize`:@@charts.tags-views-likes-avg-dislikes:Avg Dislikes`, 
    ]

    const postsCount = counts.map(t => Math.round((t / highestCount) * 100));
    const avgViews = views.map(t => Math.round((t / highestViews) * 100));
    const avgLikes = likes.map(t => Math.round((t / highestLikes) * 100));
    const avgDislikes = dislikes.map(t => Math.round((t / highestDislikes) * 100));

    return { labels, tags, postsCount, avgViews, avgLikes, avgDislikes };
  });

  datasets = computed<ChartDataset[]>(() => {
    const r = this.radar();
    return r.tags.map((tag, i) => ({
      label: tag,
      data: [r.postsCount[i], r.avgViews[i], r.avgLikes[i], r.avgDislikes[i]],
    }));
  });

  chartOptions: ChartOptions = {
    scales: {
      r: {
        min: 0,
        max: 110,
        ticks: { display: false },
        grid: { color: 'rgba(255,255,255,0.1)' },
        angleLines: { color: 'rgba(255,255,255,0.1)' },
      },
    },
  };

}
