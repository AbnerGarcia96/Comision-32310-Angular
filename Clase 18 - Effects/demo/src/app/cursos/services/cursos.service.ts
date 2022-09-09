import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/cursos`);
  }

  eliminarCursos(curso: Curso): Observable<Curso> {
    return this.http.delete<Curso>(`${environment.api}/cursos/${curso.id}`).pipe(
      catchError(this.manejarError)
    );
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${environment.api}/cursos`, curso).pipe(
      catchError(this.manejarError)
    );
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    );
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servicor', error.status, error.message)
      alert('Hubo un error de comunnicacion, intente de nuevo')
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
