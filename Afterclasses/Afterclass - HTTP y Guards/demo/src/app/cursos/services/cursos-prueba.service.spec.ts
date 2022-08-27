import { TestBed } from '@angular/core/testing';

import { CursosPruebaService } from './cursos-prueba.service';

describe('CursosPruebaService', () => {
  let service: CursosPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
