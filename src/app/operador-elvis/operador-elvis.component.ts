import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss'],
})
export class OperadorElvisComponent {
  tarefa = {
    desc: 'Descrição da tarefa',
    responsavel: null,
  };
}
