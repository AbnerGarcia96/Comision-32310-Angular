import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
