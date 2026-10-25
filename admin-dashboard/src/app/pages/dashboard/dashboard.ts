import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { ReactionChart } from '../../components/widgets/reaction-chart/reaction-chart';
import { TagsChart } from '../../components/widgets/tags-chart/tags-chart';
import { ViewsLikesChart } from '../../components/widgets/views-likes-chart/views-likes-chart';
import { ViewsDistributionChart } from '../../components/widgets/views-distribution-chart/views-distribution-chart';
import { TagsViewsChart } from '../../components/widgets/tags-views-chart/tags-views-chart';
import { TagsViewsLikesChart } from '../../components/widgets/tags-views-likes-chart/tags-views-likes-chart';

@Component({
  imports: [
    ReactionChart, 
    TagsChart, 
    ViewsLikesChart, 
    ViewsDistributionChart, 
    TagsViewsChart,
    TagsViewsLikesChart,
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  posts = inject(PostsService).posts;
}
