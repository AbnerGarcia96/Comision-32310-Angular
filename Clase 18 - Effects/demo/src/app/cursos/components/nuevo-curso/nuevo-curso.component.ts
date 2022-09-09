import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { cargarCursos } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private store: Store<CursoState>,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  agregarCurso(){
    const curso: Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
    };

    this.cursosService.agregarCurso(curso).subscribe((curso) => {
      this.store.dispatch(cargarCursos());
      this.snackBar.open(`${curso.nombre} fue agregado exitosamente`, 'Ok', {duration: 3000});
      this.router.navigate(['cursos']);
    });
    
  }

}
