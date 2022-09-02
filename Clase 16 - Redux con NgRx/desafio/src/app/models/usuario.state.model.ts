import { Usuario } from "./usuario.model";

export interface UsuarioState{
    sesionActiva: boolean;
    usuario: Usuario
}