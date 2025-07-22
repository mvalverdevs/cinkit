import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/api/models';
import { ProductService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class ProductFormComponent  implements OnInit {

  product?: Product;
  isCreation = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.isCreation = false;
        // Llamar al retrieve

      }
    });
  }

  submit() {
    if (this.isCreation){
      this._productService.productCreate$Json(
        {
          body: this.product!
        }
      ).subscribe(
        {
          next: (product) => {
            this._router.navigate(['/product/'+ product.id +'/edit/']);
          }
        }
      )
    }
    
  }

}
