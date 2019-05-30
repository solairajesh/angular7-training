import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit{

  orders = [];
  newOrder;
  title = 'Orders Component';

  constructor(
    private ordersService: OrdersService
  ){}

  ngOnInit() {
    this.getOrders();
    this.setNewOrder();
    //console.log(this.ordersService);
    //console.log(this);
  }

  getOrders(): void {
    this.ordersService.getOrders()
    .subscribe(orders => this.orders = orders);
  }

  addOrder() {
    this.orders.push(this.newOrder);
    this.setNewOrder();
  }

  deleteOrder() {
    this.orders = this.orders.filter((order, index, array) => {
      if(order.active){
        return true;
      }
    });
  }

  setNewOrder() {
      this.newOrder = {
        orderId: "",
        userName: "",
        orderDate: "",
        amount: "",
        status: "",
        statusBadge: "alert-success",
        trackingNumber: "",
        active: true
      };
  }
    
} 