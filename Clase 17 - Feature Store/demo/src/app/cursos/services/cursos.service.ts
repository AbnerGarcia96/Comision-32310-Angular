import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
