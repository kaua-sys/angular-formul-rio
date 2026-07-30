import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {
  id_produto: number = 0
  descricao_produto: string = ""
  valor_unitario: number = 0.0

  addItem (){
    console.log(this.descricao_produto,'<->', this.valor_unitario)
  }
 
}
