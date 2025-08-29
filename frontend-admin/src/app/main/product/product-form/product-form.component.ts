import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image, Product, ProductCategory, ProductOptionGroup, User } from 'src/api/models';
import { ProductCategoryService, ProductOptionGroupService, ProductOptionItemService, ProductService, UserService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { RoleEnum } from 'src/api/models';
import { ImageLibraryDialogComponent } from 'src/app/components/image-library-dialog/image-library-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  standalone: true,
  imports: [ImageLibraryDialogComponent, ...SHARED_IMPORTS],
})
export class ProductFormComponent implements OnInit {
  // Form attrs
  productForm: FormGroup;

  // Detail attrs
  productId?: number
  productImage?: Image;
  categories: ProductCategory[] = [];
  products: Product[] = [];

  types = [
    {
      value: 'simple',
      display: 'Simple'
    },
    {
      value: 'bundle',
      display: 'Pack'
    },
  ]

  @ViewChild(ImageLibraryDialogComponent) imageDialogCmp!: ImageLibraryDialogComponent;

  constructor(
    private _productService: ProductService,
    private _productCategoryService: ProductCategoryService,
    private _productOptionGroupService: ProductOptionGroupService,
    private _productOptionItemService: ProductOptionItemService,

    private _formBuilder: FormBuilder,

    private _router: Router,
    private _route: ActivatedRoute,
    
  ) {
    this.productForm = this._formBuilder.group({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl(''),
      type: new FormControl(''),
      option_groups: this._formBuilder.array([]) 
    });
  }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.productId = params['id'];
        this.getProduct(this.productId!);
      }
    });
  }

  getProduct(id: number) {
    this._productService.productRetrieve$Response({ id }).subscribe({
      next: (response) => {
        // patchValue solo para los campos normales
        this.productForm.patchValue({
          image: response.body.image,
          name: response.body.name,
          price: response.body.price,
          category: response.body.category,
          type: response.body.type,
        });

        // reconstruir option_groups
        const optionGroups = this.productForm.get('option_groups') as FormArray;
        optionGroups.clear();

        response.body.option_groups.forEach((og: any) => {
          optionGroups.push(
            this._formBuilder.group({
              id: new FormControl(og.id),
              name: new FormControl(og.name),
              max_choices: new FormControl(og.max_choices),
              min_choices: new FormControl(og.min_choices),
              product: new FormControl(og.product),
              sort_order: new FormControl(og.sort_order),
              source_category: new FormControl(og.source_category),
            })
          );
        });

        console.log(response);
        this.productImage = response.body.image_data;
      },
    });
  }

  getProducts() {
    this._productService.productList().subscribe({
      next: (response) => {
        this.products = response.results;
      }
    });
  }

  onSubmit(){
    let product = this.productForm.value;
    product.image = this.productImage?.id;
    if (this.productId) {
      this._productService.productPartialUpdate$Json$Response({id: this.productId!, body: product}).subscribe(
        {
          next: (response) => {
            this.saveOptionsGroup();
            this._router.navigate(['/products']);
          }
        }
      )
    } else {
      this._productService.productCreate$Json$Response({body: product}).subscribe(
        {
          next: (response) => {
            this.saveOptionsGroup();
            this._router.navigate(['/products']);
          }
        }
      )
    }
  }

  saveOptionsGroup(){
    let product = this.productForm.value as Product;
    if (this.productId) {
      product.option_groups.forEach(option_group => {
        this._productOptionGroupService.productOptionGroupCreate$Json$Response(
          {
            body: option_group
          }
        ).subscribe(
          {
            next: (option_group) => {

            }
          }
        )
      });
      
    }
  }

  openImageLibrary() {
      const ref = this.imageDialogCmp.open();
      ref.afterClosed().subscribe((image: Image) => {
          this.productImage = image;
          this.productForm.patchValue({
            image: image.id
          });
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
    this.productForm.patchValue({
      category: event.value
    });
  }

  createOptionGroup(): FormGroup {
    return this._formBuilder.group({
      product: [this.productId],
      name: ['', Validators.required],
      min_choices: [0],
      max_choices: [1],
      source_category: [''],
      sort_order: [1],
      items: this._formBuilder.array([])  // Aquí añadimos los items dinámicamente
    });
  }

  createOptionItem(): FormGroup {
    return this._formBuilder.group({
      group: [''],
      product: [''],
      price_delta: [0],
      is_default: [false],
      sort_order: [0]
    });
  }

  get optionGroups(): FormArray {
    return this.productForm.get('option_groups') as FormArray;
  }

  addOptionGroup() {
    this.optionGroups.push(this.createOptionGroup());
  }

    step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

}
