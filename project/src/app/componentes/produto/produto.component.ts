import { Component, Input } from '@angular/core';
import { Artesanato } from '../../artesanato';
import { CurrencyPipe } from '@angular/common';
import { ProdutoServiceService } from '../../produto-service.service';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})
export class ProdutoComponent {
   @Input() produto!: Artesanato;



   constructor(private service:ProdutoServiceService){}

   comprar(){
    this.service.comprarProduto(this.produto);
   }

}
