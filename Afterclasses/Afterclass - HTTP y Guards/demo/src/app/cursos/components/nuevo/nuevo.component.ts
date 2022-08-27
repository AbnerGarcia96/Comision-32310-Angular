import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private curso: CursoService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      profesor: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  agregarCurso(){
    const c: Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
    }
    this.curso.nuevoCurso(c).subscribe((curso: Curso) => {
      alert(`${curso.id}-${curso.nombre} agregado correctamente`);
      this.router.navigate(['cursos/lista']);
    });
  }

}
