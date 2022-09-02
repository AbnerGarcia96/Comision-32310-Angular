import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly api: string = 'https://6308098f46372013f575799e.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.api}/cursos`).pipe(
      delay(2000)
    );
  }
}
