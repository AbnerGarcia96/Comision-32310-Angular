import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsuariosService } from './usuarios.service';
import { of } from 'rxjs';

describe('UsuariosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsuariosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un arreglo de usuarios', (done: DoneFn) => {
    const mockDatos = [
      {usuario:"Ruth.Upton",contrasena:"7Kaie5T4h_2gfbE",admin:true,id:"1"},
      {usuario:"Gloria76",contrasena:"dALKc29xEHFLBKm",admin:true,id:"2"},
      {usuario:"fdsdf",contrasena:"SG1PwoGRsr7gaN1",admin:false,id:"3"},
      {usuario:"Raquel.Lehner",contrasena:"TvQUdcRuafCPPwD",admin:false,id:"4"}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuario().subscribe((usuarios) => {
      expect(usuarios).toEqual(mockDatos);
      done();
    })
  });
});
