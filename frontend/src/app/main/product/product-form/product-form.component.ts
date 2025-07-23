import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image, Product, ProductCategory } from 'src/api/models';
import { ImageLibraryService, ProductCategoryService, ProductService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  imports: [SHARED_IMPORTS, ],
})
export class ProductFormComponent  implements OnInit {

  productForm?: FormGroup;
  productImageForm?: FormGroup;
  isCreation = true;
  instanceId: number = 0;
  selectedImage = '';
  categories: ProductCategory[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
    private _productCategoryService: ProductCategoryService,
    private _imageLibraryService: ImageLibraryService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.isCreation = false;
        this.instanceId = params['id'];
        this._productService.productRetrieve({id: params['id']}).subscribe(
          {
            next: (product) => {
              this.productForm?.patchValue(product);
              this.selectedImage = product.image_data.image!;
            }
          }
        )

      }
    });
    this.productForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      price: new FormControl(''),
      category: new FormControl(''),
      image: new FormControl(''),
    });
    this.productImageForm = this._formBuilder.group({
      image: [''],
    });
    this._productCategoryService.productCategoryList().subscribe(
      {
        next: (categories) => {
          this.categories = categories.results;
        }
      }
    )
  }

  imageSelected(image: any){
    this.productImageForm!.patchValue({
      image: image
    });
    this._imageLibraryService.imageLibraryCreate$Response({
        body: this.productImageForm!.value as Image
      }).subscribe({
        next: (response) => {
          this.productForm!.patchValue({
            image: response.body.id
          });
          this.selectedImage = response.body.image!;
        },
        error: (e) =>
        console.error(e),
        complete: () => {
        }
      });
  }

  submit() {
    let product = this.productForm!.value as Product
    if (this.isCreation){
      this._productService.productCreate$Json(
        {
          body: product
        }
      ).subscribe(
        {
          next: (product) => {
            this._router.navigate(['/product/'+ product.id +'/edit/']);
          }
        }
      )
    } else {
      this._productService.productPartialUpdate$Json(
        {
          id: this.instanceId,
          body: product,
        }
      ).subscribe(
        {
          next: (response) => {
            console.log(response)
          }
        }
      )
    }
    
  }

}
