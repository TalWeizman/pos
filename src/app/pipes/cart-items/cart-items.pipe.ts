import { Pipe, PipeTransform } from '@angular/core';
import {CartItem} from "../../interfaces/CartItem"

@Pipe({
  name: 'cartItems',
  pure: false
})
export class CartItemsPipe implements PipeTransform {

  transform(items: CartItem[], args?: any): number {
    let total_items : number = 0;

    if (items == []) {

            return 0;
    }
    else{

      items.forEach(element => { 
        
        total_items += element.amount;
      });

      return total_items;
    }


  }

}
