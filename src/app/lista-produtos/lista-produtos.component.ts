import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {
  id_produto: number = 0
  descricao_produto: string = ""
  valor_unitario: number = 0.0
  listaItens: Item[] = []

  addItem (){
    console.log(this.descricao_produto,'<->', this.valor_unitario)
    //Instanciando a classe Item
    //let item = new Item(this.listaItens.length + 1,this.descricao_produto, this.valor_unitario)
    let item = new Item()
    item.idProduto = this.listaItens.length + 1
    item.descricaoProduto = this.descricao_produto
    item.valorUnitario = this.valor_unitario

    this.listaItens.push(item)

    this.descricao_produto = ""
    this.valor_unitario = 0.0
  }

 limparTudo(): void {
  this.listaItens = []
 }
}

