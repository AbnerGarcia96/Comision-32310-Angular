import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    UsuariosComponent,
    PaginaNoEncontradaComponent,
    AutenticacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
