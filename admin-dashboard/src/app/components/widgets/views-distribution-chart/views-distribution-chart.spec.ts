import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewsDistributionChart } from './views-distribution-chart';

describe('ViewsDistributionChart', () => {
  let component: ViewsDistributionChart;
  let fixture: ComponentFixture<ViewsDistributionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsDistributionChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewsDistributionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
