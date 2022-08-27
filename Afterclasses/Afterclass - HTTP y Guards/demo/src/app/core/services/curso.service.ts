import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private api: string = environment.api;
  private subject!: BehaviorSubject<Curso[]>;

  constructor(
    private http: HttpClient
  ) {
    this.subject = new BehaviorSubject<Curso[]>([]);
  }

  obtenerCursos(): Observable<Curso[]>{
    this.leerCursos();
    return this.subject;
  }

  private leerCursos(){
    this.http.get<Curso[]>(`${this.api}/cursos/`).subscribe((cursos) => {
      this.subject.next(cursos);
    });
  }
  
  nuevoCurso(curso: Curso){
    return this.http.post<Curso>(`${this.api}/cursos`, curso);
  }

  modificarCurso(curso: Curso){
    this.http.put<Curso>(`${this.api}/cursos/${curso.id}`, curso).subscribe((curso) => {
      alert(`${curso.id}-${curso.nombre} fue editado satisfactoriamente`);
      this.leerCursos();
    });
  }

  eliminarCurso(id: string){
    this.http.delete<Curso>(`${this.api}/cursos/${id}`).subscribe((curso) => {
      alert(`${curso.id}-${curso.nombre} fue eliminar satisfactoriamente`);
      this.leerCursos();
    });;
  }
}
