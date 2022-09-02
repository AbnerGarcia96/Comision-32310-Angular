import { createSelector } from "@ngrx/store";
import { UsuarioState } from "src/app/models/usuario.state.model";
import { AppState } from "../app.state";

export const selectorUsuario = (state: AppState) => state.sesion;

export const selectorSesion = createSelector(
    selectorUsuario,
    (state: UsuarioState) => state
);