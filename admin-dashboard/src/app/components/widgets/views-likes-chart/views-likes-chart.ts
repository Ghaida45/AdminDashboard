import { Component, computed, inject } from '@angular/core';
import { PostsService } from '../../../services/posts-service';
import { ChartsWidget } from '../charts-widget/charts-widget';

@Component({
  imports: [ChartsWidget],
  selector: 'app-views-likes-chart',
  styleUrl: './views-likes-chart.css',
  templateUrl: './views-likes-chart.html',
})
export class ViewsLikesChart {
  private posts = inject(PostsService).posts;

  viewsLikes = computed(() => {
    const posts = this.posts.value()?.posts ?? [];
    
    const vlArray = [];

    for (const post of posts) {
      const vlObject = { x: post.views, y: post.reactions.likes };
      vlArray.push(vlObject);
    }

    return vlArray;
  });
}
