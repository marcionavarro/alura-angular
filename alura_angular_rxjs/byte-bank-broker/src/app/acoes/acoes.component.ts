import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcoesService } from './acoes.service';
import { switchMap, tap } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';
import { Acoes } from './modelo/acoes';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todasAcoes$!: Observable<Acoes>;
  filtroPeloInput$!: Observable<Acoes>;
  acoes$!: Observable<Acoes>;

  constructor(private acoesService: AcoesService) { }

  ngOnInit() {
    this.todasAcoes$ = this.acoesService.getAcoes().pipe(
      tap(() => { console.log('Fluxo inicial') })
    );

    this.filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
      tap(() => { console.log("Fluxo do filtro") }),
      switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
    );

    this.acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);
  }
}
