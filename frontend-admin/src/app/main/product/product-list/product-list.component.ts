import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/api/models';
import { ProductService } from 'src/api/services';
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

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.productList().subscribe({
      next: (response) => {
        this.dataSource.data = response.results;
      }
    });
  }

}
