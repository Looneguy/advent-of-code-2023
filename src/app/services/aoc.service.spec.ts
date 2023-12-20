import { TestBed } from '@angular/core/testing';

import { AocService } from './aoc.service';

describe('AocService', () => {
  let service: AocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
