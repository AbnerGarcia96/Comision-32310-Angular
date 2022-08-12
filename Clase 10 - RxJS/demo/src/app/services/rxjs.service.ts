import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  profesores: any[] = [
    {id: 1, nombre: 'Abner', curso: 'Angular'},
    {id: 2, nombre: 'Fran', curso: 'ReactJS'},
    {id: 3, nombre: 'Andres', curso: 'Angular'}
  ];
  profesoresObservable: Observable<any>;
  cursos: any[] = [];
  cursosSubject: Subject<any>;
  alumnos: any[] = [
    {id: 1, nombre: 'Roman', curso: 'Angular'},
    {id: 2, nombre: 'Abner', curso: 'Angular'},
    {id: 3, nombre: 'Jorge', curso: 'React'},
    {id: 4, nombre: 'Fran', curso: 'Vue'},
    {id: 5, nombre: 'Lautaro', curso: 'CSS'}
  ];

  constructor() {
    this.cursosSubject = new Subject();

    this.profesoresObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.profesores);

      setTimeout(()=>{
        this.profesores.push({id: 4, nombre: 'Roman', curso: 'Kotlin' });
        suscriptor.next(this.profesores);
      }, 3000)
    });
  }

  obtenerPromiseProfesores(){
    return new Promise((resolve, reject) => {
      if(this.profesores.length > 0){
        resolve(this.profesores);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay profesores en este arreglo'
        });
      }
    });
  }

  obtenerObservableProfesores(){
    return this.profesoresObservable;
  }

  obtenerObservableCursos(){
    return this.cursosSubject.asObservable();
  }

  agregarNuevoCurso(curso: any){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
    console.log(this.cursos);
  }

  obtenerObservableAlumnos(){
    return of(this.alumnos);
  }
}
