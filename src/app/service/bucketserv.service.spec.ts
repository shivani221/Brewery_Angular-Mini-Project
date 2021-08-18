import { TestBed } from '@angular/core/testing';

import { BucketservService } from './bucketserv.service';

describe('BucketservService', () => {
  let service: BucketservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BucketservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
