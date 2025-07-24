import { Component, OnInit } from '@angular/core';
import { BillService, OrderService, ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';
import { Bill, Order, Zone } from 'src/api/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-bill-retrieve',
  templateUrl: './bill-retrieve.component.html',
  styleUrls: ['./bill-retrieve.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class BillRetrieveComponent implements OnInit {

  bill?: Bill;
  orders: Order[] = [];

  constructor(
    private _billService: BillService,
    private _orderService: OrderService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        let billId = params['id'];

        this._billService.billRetrieve({id: billId}).subscribe(
          {
            next: (bill) => {
              this.bill = bill;
            }
          }
        );

        this._orderService.orderList({bill_id: billId}).subscribe(
          {
            next: (orders) => {
              this.orders = orders.results;
            }
          }
        );
      } else {
        this._router.navigate(['/bills/']);
      }
    });
  }

  createOrder(){
    this._router.navigate(['/bills/' + this.bill!.id + '/order/']);
  }

  closeBill(){
    this._billService.billCloseCreate$Json({id:this.bill!.id}).subscribe(
      {
        next: (bill) => {
          this.bill = bill;
        }
      }
    )
  }

  deliverOrder(order: Order){
    this._orderService.orderSetDeliveredCreate$Json({
      id: order.id
    }).subscribe({
      next: (_order) => {
        order.delivered = true;
      }
    }
      
    )
  }

}
