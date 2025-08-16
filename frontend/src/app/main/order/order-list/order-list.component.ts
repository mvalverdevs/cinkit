import { Component, OnInit } from '@angular/core';
import { BillService, OrderService, ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';
import { Bill, Order, Zone } from 'src/api/models';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private _orderService: OrderService,
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getOrders();
  }

  getOrders(){
    this._orderService.orderList({delivered: false}).subscribe(
      {
        next: (orders) => {
          this.orders = orders.results;
        }
      }
    )
  }

  createOrder(){
  }

  deliverOrder(order: Order){
    this._orderService.orderSetDeliveredCreate$Json({
      id: order.id
    }).subscribe({
      next: (_order) => {
        order.delivered = true;
        this.orders.splice(this.orders.indexOf(order), 1);
      }
    }
      
    )
  }

}
