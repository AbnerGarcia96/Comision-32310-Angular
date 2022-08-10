import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  obtenerCursos(){
    return [
      {id: 1, nombre: 'Angular', comision: '32310'},
      {id: 2, nombre: 'Angular', comision: '32320'},
      {id: 3, nombre: 'Angular', comision: '32330'}
    ]
  }
}
