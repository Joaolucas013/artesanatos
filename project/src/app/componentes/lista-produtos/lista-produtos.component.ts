import { Component, OnInit } from '@angular/core';
import { Artesanato } from '../../artesanato';
import { ProdutoServiceService } from '../../produto-service.service';
import { CurrencyPipe } from '@angular/common';
import { aumentarBordaTrigger, estilizarBotao } from '../../animacoes';
import { QuantidadeDirective } from '../../quantidade.directive';
import { ValorDirective } from '../../valor.directive';

@Component({
  selector: 'app-lista-produtos',
  imports: [CurrencyPipe, QuantidadeDirective, ValorDirective],
  animations: [aumentarBordaTrigger, estilizarBotao],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutosComponent implements OnInit {
  listaProdutos: Artesanato[] = [];
  indexProduto: number = -1;
  produto!: Artesanato;
  fotoAtualIndice: number[] = [];
  private intervalos: any[] = [];
  produtoSelecionado?: Artesanato;

  constructor(private service: ProdutoServiceService) {}
  ngOnInit(): void {
    this.service.buscarDados().subscribe((lista) => {
      this.listaProdutos = lista;
    });
  }

  iniciarCarrosel(produto: Artesanato, index: number) {
    this.intervalos[index] = setInterval(() => {
      this.fotoAtualIndice[index] =
        ((this.fotoAtualIndice[index] || 0) + 1) % produto.fotos.length;
    }, 2000);
  }

  pararCarrossel(index: number) {
    clearInterval(this.intervalos[index]);
    this.fotoAtualIndice[index] = 0;
  }

  comprar(produto: Artesanato) {
    this.service.comprarProduto(produto);
  }

  saberMais(produto: Artesanato) {
    this.produtoSelecionado = produto;
  }

  fecharCard() {
    this.produtoSelecionado = undefined;
  }
  irAoWhats() {
    const mensagem = encodeURIComponent(
      `Olá, gostaria de saber mais sobre os produtos.`,
    );

    window.open(`https://wa.me/5577988440731?text=${mensagem}`, `_blank`);
  }
}
