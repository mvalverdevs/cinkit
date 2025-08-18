import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItem, Product, ProductCategory } from 'src/api/models';
import { BillService, ProductCategoryService, ProductService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class ProductListComponent  implements OnInit {

  billId?: number;
  categories: ProductCategory[] = [];
  products: Product[] = [];
  selectedCategoryId?: number;
  orderItems: OrderItem[] = [];
  complements: any = [];
  productToAddComplement?: Product;

  isArticlesModalOpen = false;
  isComplementsModalOpen = false;

  constructor(
    private _productService: ProductService,
    private _productCategoryService: ProductCategoryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _billService: BillService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.billId = params['id'];
      }
    });
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state as { fill: string };

    if (state?.fill) {
      this._billService.billLastOrderRetrieve({id: this.billId!}).subscribe(
        {
          next: (order) => {
            if (order.bill){
              this.orderItems = order.items;
            }
          }
        }
      )
    }
  }

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
    this._productService.productList({category_id: this.selectedCategoryId, limit: 100}).subscribe(
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

  getProductById(productId: number){
    return this.products.find(item => item.id === productId);
  }

  selectCategory(category_id: number){
    if (this.selectedCategoryId == category_id){
      this.selectedCategoryId = undefined;
    } else {
      this.selectedCategoryId = category_id;
    }
    this.getProducts();
  }

  selectProduct(product: Product) {
    let existingItem = this.orderItems.find(item => item.product === product.id);

    if (existingItem) {
      existingItem.quantity! += 1;
    } else {
      const newItem: OrderItem = {
        product: product.id,
        quantity: 1,
        order: 0,
        id: 0,
        product_data: {} as Product
      };
      this.orderItems.push(newItem);
    }

    if (product.complements?.length || 0 > 0) {
      this.setComplementsModalOpen(true);
      this.complements = product.complements_data;
    }
  }

  getQuantity(product: Product): number {
    const item = this.orderItems.find(i => i.product === product.id);
    return item ? item.quantity! : 0;
  }

  isSelected(product: Product): boolean {
    return this.getQuantity(product) > 0;
  }

  private agruparEnFilas(lista: any[], tamañoFila: number): any[][] {
    const filas = [];
      for (let i = 0; i < lista.length; i += tamañoFila) {
        filas.push(lista.slice(i, i + tamañoFila));
      }
      return filas;
  }

  decreaseProduct(event: Event, product: Product) {
    // Como el botón está dentro del card y se selcciona al clickar de esta forma solo se llama a esta funcion.
    // Si no se llamaría a selectProduct() y esta a la vez y se anularían
    event.stopPropagation()
    const index = this.orderItems.findIndex(item => {
      const itemProductId = typeof item.product === 'object' ? item.product : item.product;
      return itemProductId === product.id;
    });

    if (index !== -1) {
      const item = this.orderItems[index];

      if (item.quantity! > 1) {
        item.quantity! -= 1;
      } else {
        this.orderItems.splice(index, 1);
      }
      this.orderItems = [...this.orderItems];
    }
  }

  createOrder(){
    this._billService.billNewOrderCreate$Json$Response({
      id: this.billId!,
      body: this.orderItems
    }).subscribe({
      next: (order) => {
        this._router.navigate(['/bills/']);
      }
    })
    
  }

  setArticleModalOpen(isOpen: boolean) {
    this.isArticlesModalOpen = isOpen;
  }

  setComplementsModalOpen(isOpen: boolean) {
    this.isComplementsModalOpen = isOpen;
  }

  addComplement(complement: Product){
    this.setComplementsModalOpen(false);
  }
}