import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Contacto } from '../../models/Contacto';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  contactoModel: any = {
    nombre: '',
    correo: '',
    mensaje: '' 
  };
  @ViewChild('txtNombre') NombreInputRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  enviarContacto(){
    console.log(this.contactoModel);
    const input: HTMLInputElement = this.NombreInputRef.nativeElement;

    input.value = 'Valor cambiado desde mi archivo en typescript';
  }

}
