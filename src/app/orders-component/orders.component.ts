import { Component } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent{

  constructor(
    private ordersService: OrdersService
  ){}
  
  name = 'orders component';
} 