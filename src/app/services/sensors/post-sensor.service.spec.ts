import { TestBed } from '@angular/core/testing';

import { PostSensorService } from './post-sensor.service';

describe('PostSensorService', () => {
  let service: PostSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
