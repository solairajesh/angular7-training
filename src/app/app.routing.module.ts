import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders-component/orders.component';
import { HelloComponent } from './hello.component';
import { OrderDetailComponent } from './orders-component/order-detail/order.detail.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'orders/:orderId',
    component: OrderDetailComponent
  },
  {
    path: '',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}