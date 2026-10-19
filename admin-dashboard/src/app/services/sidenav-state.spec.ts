import { TestBed } from '@angular/core/testing';
import { SidenavState } from './sidenav-state';

describe('SidenavState', () => {
  let service: SidenavState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
