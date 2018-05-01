import { Component, OnInit, ViewChild, NgZone, AfterViewInit,Output } from '@angular/core';
import {MdDialog,MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-disscount',
  templateUrl: './disscount.component.html',
  styleUrls: ['./disscount.component.css'],
})
export class DisscountComponent implements OnInit,AfterViewInit {

  text:any = { tx:"", vl:""};
  input_focus:boolean = false;
  key_event:EventListener;
  choise:any;

  @ViewChild('input1') input_ref;

  constructor(public dialogRef: MdDialogRef<DisscountComponent>) {
    
    this.text.tx = "";
    this.text.vl = "";
   }

  ngOnInit() {
  }


  isformvalid(){

    return this.text.vl == '' || this.text.tx == '' 

  }

  key_press(e:KeyboardEvent){

    if (e.keyCode == 13)
    {
      this.dialogRef.close(this.text);
    }
  }

  setFocus(elementRef) {
      elementRef.nativeElement.focus();
    }
  
  focusInput1() {
    this.setFocus(this.input_ref);
  }

  number_click(n){

        if (n == ".")
            this.text.tx += n;        
        else       
            this.text.tx += n.toString();
                    
        console.log(this.text.tx);     
  }


  clean_input(){

    this.text.tx = "";


  }

   ngAfterViewInit() {
     //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
     //Add 'implements AfterViewInit' to the class.

   } 

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

  }
}
