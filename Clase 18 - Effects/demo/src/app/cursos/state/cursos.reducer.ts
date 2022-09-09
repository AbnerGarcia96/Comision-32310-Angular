import { Action, createReducer, on } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export interface CursoState {
  cargando: boolean;
  cursos?: Curso[];
}

export const initialState: CursoState = {
  cargando: false
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.cargarCursos, (state) => {
    return { ...state, cargando: true }
  }),
  on(CursosActions.cursosCargados, (state, { cursos }) => {
    return { ...state, cargando: false, cursos: cursos };
  })
);
