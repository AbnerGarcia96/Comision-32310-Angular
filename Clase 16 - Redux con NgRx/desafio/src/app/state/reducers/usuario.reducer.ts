import { createReducer, on } from "@ngrx/store";
import { UsuarioState } from "src/app/models/usuario.state.model";
import { crearSesion } from "../actions/usuario.action";

export const estadoInicial: UsuarioState = {
    sesionActiva: false,
    usuario: {
        id: '',
        usuario: '',
        contrasena: '',
        admin: false
    }
}

export const usuarioReducer = createReducer(
    estadoInicial,
    on(crearSesion, (estado, {usuario}) => {
        return { ...estado, sesionActiva: true, usuario };
    })
);