import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image, Product, ProductCategory, User } from 'src/api/models';
import { ProductCategoryService, ProductService, UserService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { RoleEnum } from 'src/api/models';
import { ImageLibraryDialogComponent } from 'src/app/components/image-library-dialog/image-library-dialog.component';

@Component({
  selector: 'app-product-category-form',
  templateUrl: './product-category-form.component.html',
  styleUrls: ['./product-category-form.component.scss'],
  standalone: true,
  imports: [ImageLibraryDialogComponent, ...SHARED_IMPORTS],
})
export class ProductCategoryFormComponent implements OnInit {

  categoryForm: FormGroup
  categoryId?: number
  categoryImage?: Image;

  @ViewChild(ImageLibraryDialogComponent) imageDialogCmp!: ImageLibraryDialogComponent;

  constructor(
    private _productCategoryService: ProductCategoryService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.categoryForm = this._formBuilder.group({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.categoryId = params['id'];
        this.getProduct(this.categoryId!);
      }
    });
  }

  getProduct(id: number) {
    this._productCategoryService.productCategoryRetrieve$Response({id: id}).subscribe(
      {
        next: (response) => {
          this.categoryForm.setValue({
            image: response.body.image,
            name: response.body.name
          }
          );
          this.categoryImage = response.body.image_data;
        }
      }
    )
  }

  onSubmit(category: ProductCategory){
    category.image = this.categoryImage?.id;
    if (this.categoryId) {
      this._productCategoryService.productCategoryPartialUpdate$Json$Response({id: this.categoryId!, body: category}).subscribe(
        {
          next: (response) => {
            this._router.navigate(['/products/categories']);
          }
        }
      )
    } else {
      this._productCategoryService.productCategoryCreate$Json$Response({body: category}).subscribe(
        {
          next: (response) => {
            this._router.navigate(['/products/categories']);
          }
        }
      )
    }
  }

  openImageLibrary() {
      const ref = this.imageDialogCmp.open();
      ref.afterClosed().subscribe((image: Image) => {
          this.categoryImage = image;
          this.categoryForm.patchValue({
            image: image.id
          })
      });
  }
}
