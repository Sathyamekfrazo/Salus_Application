import { TestBed } from '@angular/core/testing';

import { SalusRestApiService } from './salus-rest-api.service';

describe('SalusRestApiService', () => {
  let service: SalusRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalusRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
