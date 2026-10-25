import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewsLikesChart } from './views-likes-chart';

describe('ViewsLikesChart', () => {
  let component: ViewsLikesChart;
  let fixture: ComponentFixture<ViewsLikesChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsLikesChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewsLikesChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
