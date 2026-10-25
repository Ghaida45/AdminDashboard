import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactionChart } from './reaction-chart';

describe('ReactionChart', () => {
  let component: ReactionChart;
  let fixture: ComponentFixture<ReactionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactionChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
