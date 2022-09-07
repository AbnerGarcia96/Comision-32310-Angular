import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { MaterialModule } from '../shared/material.module';
import { StoreModule } from '@ngrx/store';
import * as fromCursos from './state/cursos.reducer';

@NgModule({
  declarations: [
    CursosComponent,
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromCursos.cursosFeatureKey, fromCursos.reducer)
  ]
})
export class CursosModule { }
