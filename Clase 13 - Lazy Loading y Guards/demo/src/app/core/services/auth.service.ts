import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<Sesion>

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  iniciarSesion(usuario: Usuario){
    const sesion: Sesion = {
      sesionActiva: true,
      usuario: {
        usuario: usuario.usuario,
        contrasena: usuario.contrasena,
        admin: usuario.admin,
        canActivateChild: usuario.canActivateChild,
        canLoad: usuario.canLoad,
        canDeactivate: usuario.canDeactivate
      }
    }

    this.sesionSubject.next(sesion);
  }

  cerrarSesion(){
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject.next(sesion);
  }

  obtenerSesion(){
    return this.sesionSubject.asObservable();
  }
}
