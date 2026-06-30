import { Component, OnInit } from '@angular/core';
import { Artesanato } from '../../artesanato';
import { ProdutoServiceService } from '../../produto-service.service';
import { CurrencyPipe } from '@angular/common';
import { aumentarBordaTrigger, estilizarBotao } from '../../animacoes';

@Component({
  selector: 'app-lista-produtos',
  imports: [CurrencyPipe],
  animations: [aumentarBordaTrigger, estilizarBotao],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutosComponent implements OnInit {
  listaProdutos: Artesanato[] = [];
  indexProduto: number = -1;
  produto!: Artesanato;

  constructor(private service: ProdutoServiceService) {}
  ngOnInit(): void {
    this.service.buscarDados().subscribe((lista) => {
      this.listaProdutos = lista;
    });
  }

  comprar(produto: Artesanato) {
    this.service.comprarProduto(produto);
  }

  irAoWhats() {
    const mensagem = encodeURIComponent(
      `Olá, gostaria de saber mais sobre os produtos.`,
    );

    window.open(`https://wa.me/5577998200797?text=${mensagem}`, `_blank`);
  }
}
