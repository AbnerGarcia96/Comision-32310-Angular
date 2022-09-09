import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { cargarCursos } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public curso: Curso,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    private cursosService: CursosService,
    private store: Store<CursoState>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl(curso.nombre, [Validators.required]),
      fechaInicio: new FormControl(curso.fechaInicio, [Validators.required]),
      fechaFin: new FormControl(curso.fechaFin, [Validators.required]),
      profesor: new FormControl(curso.profesor, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

  editarCurso(){
    const c: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor
    }
    this.cursosService.editarCurso(c).subscribe((curso) => {
      this.store.dispatch(cargarCursos());
      this.snackBar.open(`${curso.nombre} fue editado exitosamente`, 'Ok', {duration: 3000});
      this.cerrarDialog();
    });
  }

}
