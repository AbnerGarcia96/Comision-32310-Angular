import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('abner', [Validators.required]),
    contrasena: new FormControl('1234', [Validators.required]),
    admin: new FormControl(false),
    canActivateChild: new FormControl(false),
    canLoad: new FormControl(false),
    canDeactivate:new FormControl(false)
  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    const usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
      canActivateChild: this.formulario.value.canActivateChild,
      canLoad: this.formulario.value.canLoad,
      canDeactivate: this.formulario.value.canDeactivate
    }

    this.auth.iniciarSesion(usuario);
    this.router.navigate(['inicio']);
  }

}
