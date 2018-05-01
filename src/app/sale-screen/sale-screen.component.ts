import { Component, OnInit,EventEmitter,ViewChild,Output } from '@angular/core';
import { Cart } from "app/interfaces/Cart";
import { Item } from "app/interfaces/Item";
import { CartItem } from "app/interfaces/CartItem";
import  {CartComponent} from "../cart/cart.component";
import {MdButtonToggleModule} from '@angular/material';
import {FirebaseServiceService} from '../firebase-service.service'
import {FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-sale-screen',
  templateUrl: './sale-screen.component.html',
  styleUrls: ['./sale-screen.component.css']
})
export class SaleScreenComponent implements OnInit {

  items : FirebaseListObservable<Item[]>;
  cart: Cart;
  quary:string;
  categoty:string;
  @Output() lodingemitter : EventEmitter<boolean> = new EventEmitter();
  
  @ViewChild(CartComponent) private child: CartComponent;
  
  constructor(private fbService : FirebaseServiceService) {
    

    this.quary = "";
    this.categoty = "";
    this.cart = {
      items: [],
      total_amount : 0
    };
    
   }
   

   productClicked(item : any){
      
      let flag = true;
  
      this.cart.items.forEach(i => {
          if (item.$key == i.id)
            {
                i.amount += 1;
                flag = false;
                this.child.update_total();
                return;
            }      
      });

      if (flag){
        this.cart.items.push({ id: item.$key , name : item.name, price : item.price, amount : 1 });
        this.child.update_total();
        return;
      }

   }

   //handle search quary change | emitted by (keypresed) evenet
   quary_change(e){
    this.quary = e.target.value;
   }

   cat_change(e){

     this.categoty = e;
   }



  ngOnInit() {
    
    this.lodingemitter.emit(true);
    
    this.items = this.fbService.getAllItems(); 
    
    this.items.subscribe(()=>{
      this.lodingemitter.emit(false);
    }); 

  }


}
