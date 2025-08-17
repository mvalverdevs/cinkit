import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductCategory } from 'src/api/models';
import { ProductCategoryService, ProductService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class ProductListComponent  implements OnInit {

  dataSource = new MatTableDataSource<Product>();
  displayedColumns: string[] = ['image', 'name', 'price', 'actions'];
  categories: ProductCategory[] = [];

  constructor(
    private _productService: ProductService,
    private _productCategoryService: ProductCategoryService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts(category?: number) {
    this.dataSource.data = [];
    this._productService.productList({
      category_id: category
    }).subscribe({
      next: (response) => {
        this.dataSource.data = response.results;
      }
    });
  }

  getCategories(){
    this._productCategoryService.productCategoryList$Response().subscribe(
      {
        next: (response) => {
          this.categories = response.body.results;
        }
      }
    )
  }

  onCategoryChange(event: any) {
    this.getProducts(event.value);
  }
}
