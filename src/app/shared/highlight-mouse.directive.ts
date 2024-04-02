import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  //É um listener, ou seja, vai escultar algum evento específico para realizar alguma ação
  @HostListener('mouseenter')
  onMouseOver() {
    // Nesse caso, seria uma forma mais longa de fazer, onde é preciso instanciar também o ElementRef e o Renderer2 para obter acesso ao elemento de estilização
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseDown() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

  // HostBinding é uma associação do elemento HTML que está sendo modificado com o que vai ser modificado em si, nesse caso o background de estilo
  // @HostBinding('style.backgroundColor')
  // backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    //Antes de settar o valor é possível realizar alguma ação utilizando os getters e setters do TypeScript
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
