import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const cargarCursos = createAction(
  '[Cursos] Cargar Cursos'
);

export const cursosCargados = createAction(
  '[Cursos] Cursos Cargados',
  props<{ cursos: Curso[] }>()
);




