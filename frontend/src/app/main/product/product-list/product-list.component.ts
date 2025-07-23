import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/api/models';
import { ProductCategoryService, ProductService } from 'src/api/services';
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
  categories: ProductCategory[] = [];
  selectedCategoryId?: number;

  constructor(
    private _productService: ProductService,
    private _productCategoryService: ProductCategoryService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.getProducts();
    this._productCategoryService.productCategoryList().subscribe(
        {
        next: (categories) => {
          this.categories = categories.results ?? [];
        },
        error: (e) => console.error(e),
        complete: () => {
        }
      }
      )
  }

  getProducts(){
    this.products = [];
    this._productService.productList({category_id: this.selectedCategoryId}).subscribe(
        {
        next: (products) => {
          this.products = products.results ?? [];
        },
        error: (e) => console.error(e),
        complete: () => {
        }
      }
    );
  }

  selectCategory(category_id: number){
    if (this.selectedCategoryId == category_id){
      this.selectedCategoryId = undefined;
    } else {
      this.selectedCategoryId = category_id;
    }
    this.getProducts();
  }

}
