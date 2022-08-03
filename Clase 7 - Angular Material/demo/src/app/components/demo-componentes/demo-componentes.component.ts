import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-componentes',
  templateUrl: './demo-componentes.component.html',
  styleUrls: ['./demo-componentes.component.css']
})
export class DemoComponentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hola(){
    console.log('Hola Mundo')
  }

}
