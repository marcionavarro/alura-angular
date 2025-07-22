import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  acoes$: any;

  constructor(private acoesService: AcoesService) {
    this.acoes$ = this.acoesService.getAcoes();
  }
}
