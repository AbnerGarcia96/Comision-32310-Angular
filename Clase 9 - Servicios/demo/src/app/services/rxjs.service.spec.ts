import { TestBed } from '@angular/core/testing';

import { RxjsService } from './rxjs.service';

describe('RxjsService', () => {
  let service: RxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
