import { TestBed } from '@angular/core/testing';

import { RegionSService } from './region-s.service';

describe('RegionSService', () => {
  let service: RegionSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
