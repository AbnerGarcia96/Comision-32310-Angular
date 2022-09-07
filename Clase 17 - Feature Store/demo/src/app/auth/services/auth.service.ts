import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: string, contrasena: string): Observable<Usuario>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => u.usuario === usuario && u.contrasena === contrasena)[0]
      })
    );
  }
}
