import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsuarioService } from 'src/app/services/usuario.service';
import { crearSesion } from 'src/app/state/actions/usuario.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('Gloria76'),
    contrasena: new FormControl('dALKc29xEHFLBKm')
  })
  constructor(
    private usuarioService: UsuarioService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    const usuario = this.formulario.value.usuario;
    const contrasena = this.formulario.value.contrasena;

    this.usuarioService.login(usuario, contrasena).subscribe((usuario) => {
      if(usuario){
        this.store.dispatch(crearSesion({usuario: usuario}));
        this.router.navigate(['']);
      }else{
        alert('Credenciales incorrectas');
      }
    });
  }

}
