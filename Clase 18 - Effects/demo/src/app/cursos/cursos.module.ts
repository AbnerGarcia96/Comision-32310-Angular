import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { MaterialModule } from '../shared/material.module';
import { StoreModule } from '@ngrx/store';
import * as fromCursos from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.effects';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';

@NgModule({
  declarations: [
    CursosComponent,
    ListaCursosComponent,
    NuevoCursoComponent,
    EditarDialogComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCursos.cursosFeatureKey, fromCursos.reducer),
    EffectsModule.forFeature([CursosEffects])
  ]
})
export class CursosModule { }
