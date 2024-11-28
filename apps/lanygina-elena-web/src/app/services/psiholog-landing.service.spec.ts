import { TestBed } from '@angular/core/testing';

import { PsihologLandingService } from './psiholog-landing.service';

describe('PsihologLandingService', () => {
  let service: PsihologLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsihologLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
