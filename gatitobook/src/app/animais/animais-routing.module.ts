import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { AutenticacaoGuard } from '../autenticacao/autenticacao.guard';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: { animais: ListaAnimaisResolver },
  },
  {
    path: 'novo',
    component: NovoAnimalComponent,
    canLoad: [AutenticacaoGuard],
  },
  { path: ':animalId', component: DetalheAnimalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
