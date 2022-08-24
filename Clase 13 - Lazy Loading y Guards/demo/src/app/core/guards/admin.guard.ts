import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    private auth: AuthService,
    private router: Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.usuario?.admin){
            return true;
          }else{
            alert('El usuario no tiene permisos de admin')
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.usuario?.canActivateChild){
            return true;
          }else{
            alert('El usuario no tiene permisos para CanActivateChild');
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.usuario?.canDeactivate){
            return true;
          }else{
            alert('El usuario no tiene permisos para CanDeactivate');
            return false;
          }
        })
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.usuario?.canLoad){
            return true;
          }else{
            alert('El usuario no tiene permisos para CanLoad');
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }
}
