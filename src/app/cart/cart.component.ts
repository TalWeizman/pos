import { Component, OnInit, Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { Cart } from "app/interfaces/Cart";
import {MdDialog, MdDialogRef} from '@angular/material';
import {DisscountComponent} from '../disscount/disscount.component'
import { CashDialogComponent } from '../cash-dialog/cash-dialog.component'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart = {items:[],total_amount:0 };
  @Output() updateTotal :EventEmitter<any>;
  @ViewChild(DisscountComponent) input_ref;
  
  num_of_items:number = 0;
  total_tax:number = 0;
  tax:number = 0.17;


  
  rx:RegExp = new RegExp(/\d+(\.\d{2})?|\.\d{2}/);
  

  constructor(private dialog: MdDialog) {
    
    this.updateTotal = new EventEmitter();
    this.update_total();
    
   }

   update_total(){

      this.cart.total_amount = 0;
    
      this.cart.items.forEach(item => {

        this.cart.total_amount += item.price * item.amount;
        
      });

      this.total_tax = this.cart.total_amount *0.17;
   }

   cash_sale(){

     this.cart.items.push({ id:"99",name:"כללי",price:7.5,amount:1 });
   }


  ngOnInit() {
  }

  cash_dialog(){

    let dialogRef = this.dialog.open(CashDialogComponent,{data:15, height: '500px',width: '600px',});
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
      if(this.rx.test(result))
      // todo - chack password validation and save the log in the db
        console.log(result);
      else
         console.log("erroe");
      });



  }

  open_calc(){

    
  }


  disscount_dialog(){

    let dialogRef = this.dialog.open(DisscountComponent);
    
    dialogRef.componentInstance.focusInput1();
    setTimeout(()=> dialogRef.componentInstance.focusInput1(),1000);

    dialogRef.afterClosed().subscribe(result => {

      console.log(result);
      
      if(this.rx.test(result.tx))
      // todo - chack password validation and save the log in the db
        console.log(result);
      else
         console.log("erroe");
      });

  }

  clean_cart()
  {
    this.cart.items = [];
    this.update_total();
  }


  add_item(i){

    this.cart.items[i].amount++;
    this.update_total();

  }



  sub_item(i){

    if(this.cart.items[i].amount == 1)
      this.delete_item(i);
    else
      this.cart.items[i].amount--;

      this.update_total();
  }


  delete_item(i){
    this.cart.items.splice(i,1);
    this.update_total();
  }

  

}
