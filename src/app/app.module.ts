import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrdersComponent } from './orders-component/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersPipe } from './orders-component/orders.pipe';
import { AppRoutingModule } from './app.routing.module';
import { OrderDetailComponent } from './orders-component/order-detail/order.detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, OrdersComponent, OrdersPipe, OrderDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
