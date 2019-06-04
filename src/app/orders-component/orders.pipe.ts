import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeOrdersCount',
  pure: false
})
export class OrdersPipe implements PipeTransform {
  
  transform(value, args) {
    return this.activeOrdersCount(value);
  }

  activeOrdersCount(context) {
    return context.filter((order, index, array) => {
      if(order.active) {
      return true
      }
    }).length;
  }

}