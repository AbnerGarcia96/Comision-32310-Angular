import { Curso } from "./cursos";

export interface CursoState{
    cargando: boolean;
    cursos: Curso[];
}