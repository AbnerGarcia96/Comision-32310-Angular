import { TestBed } from '@angular/core/testing';

import { CursosAlphaService } from './cursos-alpha.service';

describe('CursosAlphaService', () => {
  let service: CursosAlphaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosAlphaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
