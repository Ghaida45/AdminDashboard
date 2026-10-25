import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagsChart } from './tags-chart';

describe('TagsChart', () => {
  let component: TagsChart;
  let fixture: ComponentFixture<TagsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
