import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class OrdersService {

  private ordersUrl = './stub/orders.json';

  constructor(
    private http: HttpClient,
    private ordersService: OrdersService
  ) { }

  getOrders(): Observable<> {
    return this.http.get<>(this.ordersUrl);
  }

}

