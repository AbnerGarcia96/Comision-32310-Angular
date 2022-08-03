import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../tabla/tabla.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.formulario = fb.group({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor),
      numeroEstudiantes: new FormControl(data.numeroEstudiantes),
      matriculaAbierta: new FormControl(data.matriculaAbierta)
    })
  }

  ngOnInit(): void {
  }

  actualizar(){

  }

  cerrar(){}
}
