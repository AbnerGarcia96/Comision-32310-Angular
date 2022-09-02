import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { CursoState } from "src/app/models/cursos.state";
import { AppSate } from "../app.state";

export const selectorCurso = (state: AppSate) => state.cursos;

export const selectorCargandoCursos = createSelector(
    selectorCurso,
    (state: CursoState) => state.cargando
);

export const selectorCursosCargados = createSelector(
    selectorCurso,
    (state: CursoState) => state.cursos
)