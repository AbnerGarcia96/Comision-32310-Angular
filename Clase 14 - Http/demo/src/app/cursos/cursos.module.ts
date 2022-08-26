import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SharedModule } from '../shared/shared.module';
import { DialogEditarComponent } from './components/dialog-editar/dialog-editar.component';


@NgModule({
  declarations: [
    ListaCursosComponent,
    NuevoComponent,
    CursosComponent,
    DialogEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
