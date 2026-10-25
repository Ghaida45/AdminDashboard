import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsWidget } from './charts-widget';

describe('ChartsWidget', () => {
  let component: ChartsWidget;
  let fixture: ComponentFixture<ChartsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartsWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
