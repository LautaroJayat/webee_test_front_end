import { TestBed } from '@angular/core/testing';

import { ModifySensorService } from './modify-sensor.service';

describe('ModifySensorService', () => {
  let service: ModifySensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifySensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
