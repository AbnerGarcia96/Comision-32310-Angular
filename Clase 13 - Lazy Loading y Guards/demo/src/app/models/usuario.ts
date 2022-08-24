export interface Usuario{
    usuario: string;
    contrasena: string;
    admin: boolean;
    canActivateChild: boolean;
    canLoad: boolean;
    canDeactivate: boolean;
}