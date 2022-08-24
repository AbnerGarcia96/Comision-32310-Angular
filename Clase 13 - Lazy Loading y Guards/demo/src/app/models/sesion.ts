import { Usuario } from "./usuario";

export interface Sesion{
    sesionActiva: boolean,
    usuario?: Usuario
}