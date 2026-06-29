import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artesanato } from './artesanato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoServiceService {
  private readonly URL = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {}

  buscarDados(): Observable<Artesanato[]> {
    return this.httpClient.get<Artesanato[]>(this.URL);
  }

  comprarProduto(produto: Artesanato) {
    console.log(produto);
    
    const preco = produto.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const mensagem = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o produto: \n ${produto.nome} por ${preco} `,
    );
    
    window.open(`https://wa.me/5577998200797?text=${mensagem}`, `_blank`);
  }
}
