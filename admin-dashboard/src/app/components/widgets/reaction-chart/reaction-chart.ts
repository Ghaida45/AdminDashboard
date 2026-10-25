import { Component, computed, inject } from '@angular/core';
import { PostsService } from '../../../services/posts-service';
import { ChartsWidget } from '../charts-widget/charts-widget';

@Component({
  imports: [ChartsWidget],
  selector: 'app-reaction-chart',
  styleUrl: './reaction-chart.css',
  templateUrl: './reaction-chart.html',
})
export class ReactionChart {
  private posts = inject(PostsService).posts;

  totals = computed(() => {
    const posts = this.posts.value()?.posts ?? [];

    let likes = 0;
    let dislikes = 0;

    for (const post of posts) {
      likes += post.reactions.likes;
      dislikes += post.reactions.dislikes;
    }

    return [likes, dislikes];
  });

  labels = [
    $localize`:@@charts.reactions-likes:Likes`,
    $localize`:@@charts.reactions-dislikes:Dislikes`,
  ];
}
