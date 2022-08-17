import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router
  ){}
  
  redireccionar(ruta: string){
    this.router.navigate([ruta, {
      id: 1
    }]);
  }
}
