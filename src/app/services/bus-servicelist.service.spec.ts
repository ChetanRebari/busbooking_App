import { TestBed } from '@angular/core/testing';

import { BusServicelistService } from './bus-servicelist.service';

describe('BusServicelistService', () => {
  let service: BusServicelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusServicelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
