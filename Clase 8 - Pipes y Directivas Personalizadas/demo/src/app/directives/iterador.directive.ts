import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIterador]'
})
export class IteradorDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appIterador(numero: number){
    for(let i=0; i<numero; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
