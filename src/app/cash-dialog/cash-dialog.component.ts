import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-cash-dialog',
  templateUrl: './cash-dialog.component.html',
  styleUrls: ['./cash-dialog.component.css']
})
export class CashDialogComponent implements OnInit {

  data:any;
  cash_recived: number = 0;
  change:number;
  smsing:boolean = false;
  sending: boolean = false;
  adding_castumer:boolean = false;

  constructor(public dialogRef: MdDialogRef<CashDialogComponent>) { 

    
  }



  ngOnInit() {
    
    this.data = this.dialogRef._containerInstance.dialogConfig.data;
    console.log(this.data)
    this.change = this.data - this.cash_recived;
  }
  
  
  add_cash(num){

    this.cash_recived += num;
  }

}
