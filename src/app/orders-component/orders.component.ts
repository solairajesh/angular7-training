import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit{

  orders = [];
  title = 'Orders Component';

  constructor(
    private ordersService: OrdersService
  ){}

  ngOnInit() {
    this.getOrders();
    //console.log(this.ordersService);
    //console.log(this);
  }

  getOrders(): void {
    this.ordersService.getOrders()
    .subscribe(orders => this.orders = orders);
  }
    
} 