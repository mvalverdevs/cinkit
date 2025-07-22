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

  constructor(
    private _productService: ProductService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this._productService.productList().subscribe(
        {
        next: (products) => {
          this.products = products.results!;
        },
        error: (e) => console.error(e),
        complete: () => {
        }
      }
      )
    }

}
