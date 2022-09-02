import { createReducer, on } from "@ngrx/store";
import { CursoState } from "src/app/models/cursos.state";
import { cargarCursos, cursosCargados } from "../actions/cursos.action";

const estadoInicial: CursoState = {
    cargando: false,
    cursos: []
}

export const cursosReducer = createReducer(
    estadoInicial,
    on(cargarCursos, (estado)=>{
        return { ...estado, cargando: true }
    }),
    on(cursosCargados, (estado, {cursos}) => {
        return { ...estado, cargando: false, cursos: cursos };
    })
)