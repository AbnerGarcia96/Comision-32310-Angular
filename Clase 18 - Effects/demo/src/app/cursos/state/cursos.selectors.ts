import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursos from './cursos.reducer';

export const selectCursosState = createFeatureSelector<fromCursos.CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectCargandoState = createSelector(
  selectCursosState,
  (state: fromCursos.CursoState) => state.cargando
);

export const selectCursosCargadosState = createSelector(
  selectCursosState,
  (state: fromCursos.CursoState) => state.cursos
);