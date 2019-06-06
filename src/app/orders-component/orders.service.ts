import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdersService {

  private ordersUrl = 'https://jsonblob.com/api/4933fecc-7bd7-11e9-b226-2343c40bf0cc';
  private orderDetailUrl = 'https://jsonblob.com/api/7f73429a-881d-11e9-b9f8-7d83d22589bd';

  constructor(
    private http: HttpClient,
    private ordersService: OrdersService
  ) { }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.ordersUrl);
  }

  getOrderDetail(): Observable<any> {
    return this.http.get<any>(this.orderDetailUrl);
  }

}

