import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuario(){
    return this.http.get('https://6308098f46372013f575799e.mockapi.io/usuarios');
  }
}
