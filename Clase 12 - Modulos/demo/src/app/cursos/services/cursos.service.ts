import { Injectable } from '@angular/core';
import { CursosModule } from '../cursos.module';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  obtenerCursos(){
    return [
      {id: 1, nombre: 'Angular', comision:'32310'},
      {id: 2, nombre: 'Angular', comision:'32311'},
      {id: 3, nombre: 'Angular', comision:'32312'},
      {id: 4, nombre: 'Angular', comision:'32313'},
      {id: 5, nombre: 'Angular', comision:'32314'}
    ]
  }
}
