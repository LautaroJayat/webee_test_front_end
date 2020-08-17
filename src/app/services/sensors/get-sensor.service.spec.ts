import { TestBed } from '@angular/core/testing';

import { GetSensorService } from './get-sensor.service';

describe('GetSensorService', () => {
  let service: GetSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
