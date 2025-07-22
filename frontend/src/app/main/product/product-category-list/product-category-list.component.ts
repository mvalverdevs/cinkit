import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/api/models';
import { ProductCategoryService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class ProductCategoryListComponent  implements OnInit {

  categories: ProductCategory[] = [];

  constructor(
    private _productCategoryService: ProductCategoryService
  ) {}

  ngOnInit() {
  }

  async ionViewWillEnter() {
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

}
