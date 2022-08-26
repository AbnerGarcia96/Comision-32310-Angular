import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/core/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { DialogEditarComponent } from '../dialog-editar/dialog-editar.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  
  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos()
  }

  eliminar(id: string){
    this.cursoService.eliminarCurso(id).subscribe((curso: Curso) => {
      alert(`${curso.id} - ${curso.nombre} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

  abrirDialog(curso: Curso){
    const dialogRef = this.dialog.open(DialogEditarComponent, {
      width: '300px',
      data: curso
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){
        alert(`${curso.id}-${curso.nombre} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }
}
