import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, public router: Router) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
