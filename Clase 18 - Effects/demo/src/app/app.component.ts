import { Component } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cerrarSesion } from './core/state/sesion.actions';
import { SesionState } from './core/state/sesion.reducer';
import { selectSesionActivaState, selectUsuarioActivoState, selectUsuarioAdminState } from './core/state/sesion.selectors';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ruta!: string;
  usuarioActivo$: Observable<Usuario | undefined>;
  usuarioAdmin$: Observable<boolean | undefined>;
  sesionActiva$: Observable<boolean | undefined>;


  constructor(
    private router: Router,
    private store: Store<SesionState>
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
        this.ruta = event.url;
      }
    });

    this.usuarioActivo$ = this.store.select(selectUsuarioActivoState);
    this.usuarioAdmin$ = this.store.select(selectUsuarioAdminState);
    this.sesionActiva$ = this.store.select(selectSesionActivaState);
  }

  cerrarSesion(){
    this.store.dispatch(cerrarSesion());
    this.router.navigate(['login']);
  }
}
