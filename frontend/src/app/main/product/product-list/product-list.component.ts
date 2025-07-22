import { Component, OnInit } from '@angular/core';
import { Product } from 'src/api/models';
import { ProductService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class ProductListComponent  implements OnInit {

  products: Product[] = [];
  productRows: Product[][] = [];
  PRODUCT_LIST_ROWS = 2;
  COL_SIZE = 6;

  constructor(
    private _productService: ProductService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this._productService.productList().subscribe(
        {
        next: (products) => {
          this.products = products.results ?? [];
          this.productRows = this.agruparEnFilas(this.products, this.PRODUCT_LIST_ROWS);
        },
        error: (e) => console.error(e),
        complete: () => {
        }
      }
      )
  }

  private agruparEnFilas(lista: Product[], tamañoFila: number): Product[][] {
    const filas = [];
      for (let i = 0; i < lista.length; i += tamañoFila) {
        filas.push(lista.slice(i, i + tamañoFila));
      }
      return filas;
  }

}
