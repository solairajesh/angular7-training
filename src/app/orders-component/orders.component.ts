import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit{

  orders = [];

  constructor(
    private ordersService: OrdersService
  ){}

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.getOrders()
    .subscribe(orders => this.orders = orders);
  }
    
} 