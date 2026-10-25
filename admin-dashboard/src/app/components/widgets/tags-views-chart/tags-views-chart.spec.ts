import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagsViewsChart } from './tags-views-chart';

describe('TagsViewsChart', () => {
  let component: TagsViewsChart;
  let fixture: ComponentFixture<TagsViewsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsViewsChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsViewsChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
