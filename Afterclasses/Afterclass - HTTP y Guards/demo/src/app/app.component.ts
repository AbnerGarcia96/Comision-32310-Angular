import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sesion$!: Observable<Sesion>;
  
  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.sesion$ = this.auth.obtenerSesion();
  }

  cerrarSesion(){
    this.auth.cerrarSesion();
    this.router.navigate(['auth/login']);
  }
}
