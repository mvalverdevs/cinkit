import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/api/models';

@Component({
  standalone: true,
  selector: 'app-grid-image-list',
  templateUrl: './grid-image-list.component.html',
  styleUrls: ['./grid-image-list.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class GridListComponent  implements OnInit {

  @Input() items: any[] = [];
  @Input() PRODUCT_LIST_ROWS = 2;
  @Input() COL_SIZE = 6;
  itemRows: Product[][] = [];

  constructor(
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.itemRows = this.agruparEnFilas(this.items, this.PRODUCT_LIST_ROWS);
    }
  }

  private agruparEnFilas(lista: any[], tamañoFila: number): Product[][] {
    const filas = [];
      for (let i = 0; i < lista.length; i += tamañoFila) {
        filas.push(lista.slice(i, i + tamañoFila));
      }
      return filas;
  }

}
