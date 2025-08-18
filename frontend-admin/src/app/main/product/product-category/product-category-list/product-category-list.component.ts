import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductCategory } from 'src/api/models';
import { ProductCategoryService, ProductService } from 'src/api/services';
import { ImageLibraryDialogComponent } from 'src/app/components/image-library-dialog/image-library-dialog.component';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss'],
  standalone: true,
  imports: [ImageLibraryDialogComponent, ...SHARED_IMPORTS],
})
export class ProductCategoryListComponent  implements OnInit {

  dataSource = new MatTableDataSource<ProductCategory>();
  displayedColumns: string[] = ['image', 'name', 'actions'];

  constructor(
    private _productCategoryService: ProductCategoryService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getCategories();
  }

  getCategories() {
    this._productCategoryService.productCategoryList().subscribe({
      next: (response) => {
        this.dataSource.data = response.results;
      }
    });
  }

  deleteCategory(category: ProductCategory) {
    this._productCategoryService.productCategoryDestroy$Response(
      {
        id: category.id
      }
    ).subscribe(
      {
        next: (response) => {
          this.getCategories();
        }
      }
    )
  }

}
