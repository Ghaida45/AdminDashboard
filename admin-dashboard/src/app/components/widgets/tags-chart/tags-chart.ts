import { Component, computed, inject } from '@angular/core';
import { PostsService } from '../../../services/posts-service';
import { ChartsWidget } from '../charts-widget/charts-widget';

@Component({
  imports: [ChartsWidget],
  selector: 'app-tags-chart',
  styleUrl: './tags-chart.css',
  templateUrl: './tags-chart.html',
})
export class TagsChart {
  private posts = inject(PostsService).posts;

  tags = computed(() => {
    const posts = this.posts.value()?.posts ?? [];
    
    const tagsCount: Record<string, number> = {};

    for (const post of posts) {
      for (const tag of post.tags) {
        tagsCount[tag] = (tagsCount[tag] ?? 0) + 1;
      }
    }

    const tagsArray = Object.entries(tagsCount);
    tagsArray.sort((a, b) => b[1] - a[1]);
    const top10Tags = tagsArray.slice(0, 10);

    const labels = top10Tags.map(top10Tags => top10Tags[0]);
    const data = top10Tags.map(top10Tags => top10Tags[1]);

    return { labels, data };
  });
}
