import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
})
export class DiretivaNgifComponent {
  cursos = [];

  mostrarCurso = false;

  onMostrarCursos() {
    this.mostrarCurso = !this.mostrarCurso;
  }
}
