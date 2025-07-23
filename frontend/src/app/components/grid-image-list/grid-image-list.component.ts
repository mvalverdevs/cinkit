import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();
  itemRows: any[][] = [];

  constructor(
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.itemRows = this.agruparEnFilas(this.items, this.PRODUCT_LIST_ROWS);
    }
  }

  private agruparEnFilas(lista: any[], tamañoFila: number): any[][] {
    const filas = [];
      for (let i = 0; i < lista.length; i += tamañoFila) {
        filas.push(lista.slice(i, i + tamañoFila));
      }
      return filas;
  }

  selectItem(item: any){
    this.selectedItemChange.emit(item);
  }

}
