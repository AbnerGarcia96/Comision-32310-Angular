import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
  
  nuevoCurso(curso: Curso){
    return this.http.post<Curso>(`${this.api}/cursos`, curso);
  }

  modificarCurso(curso: Curso){
    return this.http.put<Curso>(`${this.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(id: string){
    return this.http.delete<Curso>(`${this.api}/cursos/${id}`);
  }
}
