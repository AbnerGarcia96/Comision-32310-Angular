import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/core/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private cursoService: CursoService,
    private dialogRef: MatDialogRef<DialogEditarComponent>,
    @Inject(MAT_DIALOG_DATA) private curso: Curso
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(curso.nombre),
      fechaInicio: new FormControl(curso.fechaInicio),
      fechaFin: new FormControl(curso.fechaFin),
      profesor: new FormControl(curso.profesor),
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
      profesor: this.formulario.value.profesor,
    }
    this.cursoService.modificarCurso(c).subscribe((curso: Curso) => {
      this.dialogRef.close(curso);
    });
  }

}
