import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioContacto!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioContacto = this.fb.group({
      nombre: new FormControl('', [Validators.required]), 
      email: new FormControl('abner@gmail.com', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    
  }

  agregarFila(){
    
  }

  enviarContacto(){
    console.log(this.formularioContacto);
  }

}
