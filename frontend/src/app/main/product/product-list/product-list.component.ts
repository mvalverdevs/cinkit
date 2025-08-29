import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Order, OrderItem, Product, ProductCategory } from 'src/api/models';
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

  // Complementos del item seleccionado si tiene
  complements: any = [];
  lastOrderItemWithComplements?: OrderItem;
  productToAddComplement?: Product;
  groupedOrderItems: any[] = [];

  isArticlesModalOpen = false;
  isComplementsModalOpen = false;

  constructor(
    private _productService: ProductService,
    private _productCategoryService: ProductCategoryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _billService: BillService,
    private _alertController: AlertController
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
    let hasComplements =  product.complements?.length || 0 > 0

    if (existingItem) {
      if(!hasComplements){
        existingItem!.quantity! += 1;
      } else {
        this.lastOrderItemWithComplements = existingItem;
        this.complements = product.complements_data;
        this.setComplementsModalOpen(true);
      }
    } else {
      let newOrderItem = {
        id: 0,
        order: 0,
        product: product.id,
        quantity: 1,
        product_data: product,
        complements_data: [] as Product[],
        complements: []
      }
      if(!hasComplements){
        this.orderItems.push(newOrderItem);
      } else {
        this.lastOrderItemWithComplements = newOrderItem;
        this.complements = product.complements_data;
        this.setComplementsModalOpen(true);
      }
     
    }
    console.log(this.orderItems);
  }

  getQuantity(product: Product): number {
    return (this.orderItems ?? [])
      .filter(i => i.product === product.id)           // coge todas las líneas del producto
      .reduce((total, i) => total + (i.quantity ?? 0), 0); // suma cantidades (0 si falta)
  }

  isSelected(product: Product): boolean {
    return !!this.orderItems.find(item => item.product_data! == product);
  }

  deselectProduct(event: Event, product: Product) {
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

      if (this.isArticlesModalOpen && this.orderItems.length == 0){
        this.isArticlesModalOpen = false;
      }
    }
  }

  decreaseProduct(orderItem: OrderItem) {
    let index = this.orderItems.indexOf(orderItem);
    if (orderItem.quantity! > 1) {
        orderItem.quantity! -= 1;
      } else {
        this.orderItems.splice(index, 1);
      }
      this.orderItems = [...this.orderItems];
  }

  increaseProduct(orderItem: OrderItem) {
    orderItem.quantity! += 1;
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

  setArticlesModalOpen(event: Event, isOpen: boolean) {
    event.stopPropagation();
    this.isArticlesModalOpen = isOpen;
  }

  setComplementsModalOpen(isOpen: boolean) {
    this.isComplementsModalOpen = isOpen;
  }

  addComplement(complement: Product){
    if (this.lastOrderItemWithComplements?.complements?.find(
      item => item === complement.id
    )) {
      this.lastOrderItemWithComplements!.quantity! += 1;
    } else {
      let newOrderItem = {
        id: 0,
        order: 0,
        product: this.lastOrderItemWithComplements?.product,
        quantity: 1,
        product_data: this.lastOrderItemWithComplements?.product_data,
        complements_data: [
          complement
        ],
        complements: [
          complement.id
        ]
      } as OrderItem
      this.orderItems.push(newOrderItem);
    }
    this.lastOrderItemWithComplements = undefined;
    this.setComplementsModalOpen(false);
    console.log(this.orderItems);
  }

  setNoteToItem(event: any, item: OrderItem){
    let noteText = event.detail.data.values[0];
    item.note = noteText;
  }

  async presentAlert(item: OrderItem) {
    const alert = await this._alertController.create({
      header: 'Nota',
      message: 'Añadir una nota al pedido.',
      buttons: [
        {
        text: 'Guardar',
        handler: (data) => {
          // Aquí tienes lo que escribió el usuario
          console.log(data);
          item.note = data[0];
          console.log('Nota guardada:', item.note);
        }
      }
      ],
      inputs: [
        {
          type: 'textarea',
          placeholder: 'Nota',
          value: item.note
        },
      ],
      
    });
    await alert.present();
  }

  get groupedItems(): OrderItem[] {
  const grouped: any = {};

  for (let item of this.orderItems) {
    const productId = item.product_data.id;

    if (!grouped[productId]) {
      grouped[productId] = {
        ...item,
        complements_data: [...item.complements_data],
        quantity: item.quantity
      };
    } else {
      // Sumamos la cantidad
      grouped[productId].quantity += item.quantity;
      // Metemos los complementos que no estén repetidos
      grouped[productId].complements_data.push(...item.complements_data);
    }
  }

  return Object.values(grouped);
}
}