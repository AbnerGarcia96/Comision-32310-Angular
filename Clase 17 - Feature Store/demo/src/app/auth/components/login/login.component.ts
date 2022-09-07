import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarSesion } from 'src/app/core/state/sesion.actions';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<SesionState>
  ) {
    this.formulario = fb.group({
      usuario: new FormControl('Gloria76', [Validators.required]),
      contrasena: new FormControl('dALKc29xEHFLBKm', [Validators.required])
    });
  }

  login(){
    this.authService.login(this.formulario.value.usuario, this.formulario.value.contrasena).subscribe((usuario: Usuario) => {
      this.store.dispatch(cargarSesion({
        usuarioActivo: usuario
      }));
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
  }

}
