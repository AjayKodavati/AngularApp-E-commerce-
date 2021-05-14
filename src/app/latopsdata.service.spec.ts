import { TestBed } from '@angular/core/testing';

import { LatopsdataService } from './latopsdata.service';

describe('LatopsdataService', () => {
  let service: LatopsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatopsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
