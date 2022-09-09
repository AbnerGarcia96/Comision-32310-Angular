import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of, retry } from "rxjs";
import { Curso } from "src/app/models/curso";
import { CursosService } from "../services/cursos.service";
import { cargarCursos, cursosCargados } from "./cursos.actions";

@Injectable()
export class CursosEffects{
    cargarCursos$ = createEffect(() => this.actions$.pipe(
        ofType(cargarCursos),
        mergeMap(() => this.cursosService.obtenerCursos().pipe(
            map((c: Curso[]) => cursosCargados({cursos: c}))
        ))
    ));

    constructor(
        private actions$: Actions,
        private cursosService: CursosService
    ){}
}