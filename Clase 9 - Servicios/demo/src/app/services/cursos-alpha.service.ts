import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosAlphaService {

  constructor() { }

  obtenerCursos(){
    return [
      {id: 1, nombre: 'Angular [EXPERIMENTAL]', comision: '32310'},
      {id: 2, nombre: 'ReactJS [EXPERIMENTAL]', comision: '32320'},
      {id: 3, nombre: 'Kotlin [EXPERIMENTAL]', comision: '32330'}
    ]
  }
}
