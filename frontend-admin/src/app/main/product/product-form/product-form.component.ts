import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image, Product, User } from 'src/api/models';
import { ProductService, UserService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { RoleEnum } from 'src/api/models';
import { ImageLibraryDialogComponent } from 'src/app/components/image-library-dialog/image-library-dialog.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  standalone: true,
  imports: [ImageLibraryDialogComponent, ...SHARED_IMPORTS],
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup
  productId?: number
  productImage?: Image;

  @ViewChild(ImageLibraryDialogComponent) imageDialogCmp!: ImageLibraryDialogComponent;

  constructor(
    private _productService: ProductService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.productForm = this._formBuilder.group({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl(''),
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.productId = params['id'];
        this.getProduct(this.productId!);
      }
    });
  }

  getProduct(id: number) {
    this._productService.productRetrieve$Response({id: id}).subscribe(
      {
        next: (response) => {
          this.productForm.setValue({
            image: response.body.image,
            name: response.body.name,
            price: response.body.price,
            category: response.body.category
          }
          );
          this.productImage = response.body.image_data;
        }
      }
    )
  }

  onSubmit(product: Product){
    product.image = this.productImage?.id;
    if (this.productId) {
      this._productService.productPartialUpdate$Json$Response({id: this.productId!, body: product}).subscribe(
        {
          next: (response) => {
            this._router.navigate(['/products']);
          }
        }
      )
    } else {
      this._productService.productCreate$Json$Response({body: product}).subscribe(
        {
          next: (response) => {
            this._router.navigate(['/products']);
          }
        }
      )
    }
  }

  openImageLibrary() {
      const ref = this.imageDialogCmp.open();
      ref.afterClosed().subscribe((image: Image) => {
          this.productImage = image;
          this.productForm.patchValue({
            image: image.id
          })
      });
  }
}
