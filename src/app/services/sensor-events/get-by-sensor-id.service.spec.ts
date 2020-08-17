import { TestBed } from '@angular/core/testing';

import { GetBySensorIdService } from './get-by-sensor-id.service';

describe('GetBySensorIdService', () => {
  let service: GetBySensorIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBySensorIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
