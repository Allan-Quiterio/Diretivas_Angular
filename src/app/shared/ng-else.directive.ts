import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]',
})
export class NgElseDirective {
  // Criando uma diretiva ng-else na mão
  @Input()
  set ngElse(condicao: boolean) {
    if (!condicao) {
      //É utilizado o viewContainerRef, que é responsável pela criação do elemento HTML que nesse caso é o que precisamos, podendo ser qualquer coisa
      //E precisamos passar a referência do template que queremos criar.
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  constructor(
    // Fazendo a injeção de dependências do Template e do ViewContainer
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
