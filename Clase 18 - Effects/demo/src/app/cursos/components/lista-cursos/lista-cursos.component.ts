import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { cargarCursos } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';
import { selectCursosCargadosState } from '../../state/cursos.selectors';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[] | undefined>;
  
  constructor(
    private store: Store<CursoState>,
    private cursosService: CursosService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectCursosCargadosState);
  }

  eliminarCurso(curso: Curso){
    this.cursosService.eliminarCursos(curso).subscribe((curso) => {
      this.store.dispatch(cargarCursos());
      this.snackBar.open(`${curso.nombre} fue eliminado exitosamente`, 'Ok', {duration: 3000});
    })
  }

  abrirDialogEditar(curso: Curso){
    this.dialog.open(EditarDialogComponent, {
      width: '300px',
      data: curso
    });
  }

}
