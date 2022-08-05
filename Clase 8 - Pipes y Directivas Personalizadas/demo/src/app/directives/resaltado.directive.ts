import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit{
  @Input('appResaltado') colorResaltado!: string;

  constructor(
    private elemento: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
  }
}
