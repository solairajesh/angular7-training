import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  templateUrl: './order.detail.component.html'
})
export class OrderDetailComponent implements OnInit {

  orderDetail = [];
  title = 'I am order detail component';

  constructor(
    private ordersService: OrdersService
  ){ }

  ngOnInit(){
    this.getOrderDetail();
  }

  getOrderDetail() {
    this.ordersService.getOrderDetail()
    .subscribe(orderDetail => this.orderDetail = orderDetail )
  }

}