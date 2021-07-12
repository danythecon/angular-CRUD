import { TestBed } from '@angular/core/testing';

import { TheConService } from './the-con.service';

describe('TheConService', () => {
  let service: TheConService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheConService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
