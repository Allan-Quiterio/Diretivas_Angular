import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss'],
})
export class DiretivaNgstyleComponent {
  ativo = false;
  tamanhoFonte: 10;

  onClick() {
    this.ativo = !this.ativo;
  }
}
