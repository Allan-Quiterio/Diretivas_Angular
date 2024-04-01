import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]',

  // É possível determinar o seletor específico que queremos que a diretiva seja adicionada, nesse caso só vai ser adicionada em parágrafos
  // selector: 'p[fundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Essa é a maneira menos segura de fazer a alteração do DOM, pois alterando diretamente na tag, pode criar-se vulnerabilidades
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    //Essa seria a forma correta de fazer essa alteração, através do Renderer2
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
