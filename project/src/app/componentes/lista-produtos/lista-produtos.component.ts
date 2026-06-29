import { Component, OnInit } from '@angular/core';
import { Artesanato } from '../../artesanato';
import { ProdutoServiceService } from '../../produto-service.service';
import { ProdutoComponent } from "../produto/produto.component";

@Component({
  selector: 'app-lista-produtos',
  imports: [ProdutoComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutosComponent implements OnInit {
  listaProdutos: Artesanato[] = [];


  constructor(private service: ProdutoServiceService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.buscarDados().subscribe((lista) => {
      this.listaProdutos = lista;
    });
  }
}
