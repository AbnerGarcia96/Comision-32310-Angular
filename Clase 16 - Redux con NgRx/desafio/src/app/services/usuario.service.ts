import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  login(nombreUsuario: string, contrasena: string){
    return this.http.get<Usuario[]>('https://6308098f46372013f575799e.mockapi.io/usuarios').pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((usuario: Usuario) => usuario.usuario === nombreUsuario && usuario.contrasena === contrasena)[0]
      })
    )
  }
}
