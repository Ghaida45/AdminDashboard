import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagsViewsLikesChart } from './tags-views-likes-chart';

describe('TagsViewsLikesChart', () => {
  let component: TagsViewsLikesChart;
  let fixture: ComponentFixture<TagsViewsLikesChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsViewsLikesChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsViewsLikesChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
