import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcoesService } from './acoes.service';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';
import { Acoes } from './modelo/acoes';

const ESPERA_DIGITACAO = 300;

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
      debounceTime(ESPERA_DIGITACAO),
      tap(() => { console.log("Fluxo do filtro") }),
      tap(console.log),
      filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
      tap(console.log)
    );

    this.acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);
  }
}
