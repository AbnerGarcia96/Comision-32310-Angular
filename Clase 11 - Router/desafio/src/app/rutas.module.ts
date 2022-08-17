import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponenteAComponent } from "./components/componente-a/componente-a.component";
import { ComponenteBComponent } from "./components/componente-b/componente-b.component";

const router: Routes = [
    {path: 'componenteA', component: ComponenteAComponent}, //componenteA
    {path: 'componenteB/:nombre/:apellido', component: ComponenteBComponent}, // localhost:4200/componenteB/nombre/apellido;id=valor
    {path: '', redirectTo: 'componenteA', pathMatch: 'full'},
    {path: '**', redirectTo: 'componenteB', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(router)
    ],
    exports: [
        RouterModule
    ]
})
export class RutasModule{}