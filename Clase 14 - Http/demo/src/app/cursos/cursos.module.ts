import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { CursosComponent } from './components/cursos/cursos.component';


@NgModule({
  declarations: [
    ListaCursosComponent,
    NuevoComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
