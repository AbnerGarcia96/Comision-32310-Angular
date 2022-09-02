import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";

export const crearSesion = createAction(
    '[Auth Login] Sesion iniciada',
    props<{ usuario: Usuario }>()
);