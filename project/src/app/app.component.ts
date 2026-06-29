import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";

import { ListaProdutosComponent } from "./componentes/lista-produtos/lista-produtos.component";

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, ListaProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
