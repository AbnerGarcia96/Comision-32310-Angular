import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  formulario!: FormGroup;
  cursos: any[] = [];

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]) 
    })
  }

  agregarCurso(){
    console.log(this.formulario);
    this.cursos.push(this.formulario.value);
  }

}
