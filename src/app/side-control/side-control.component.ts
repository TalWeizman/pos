import { Component, OnInit,EventEmitter ,Output,Input,AfterContentInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ShiftLogComponent} from '../shift-log/shift-log.component';
import { Item } from "app/interfaces/Item";
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-side-control',
  templateUrl: './side-control.component.html',
  styleUrls: ['./side-control.component.css']
})
export class SideControlComponent implements OnInit,AfterContentInit {

  @Output() keypresed : EventEmitter<any> = new EventEmitter();
  @Output() catpresed : EventEmitter<string> = new EventEmitter();

  @Input() items : FirebaseListObservable<Item[]>;
  
  categories : any[] = [];
  SelectedCategory: string = "";
  quary:any = "";


  constructor(private dialog: MdDialog) { 
    

  }


  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    
  }

  remove_duplicates(arr) {
      let s = new Set(arr);
      let it = s.values();
      return Array.from(it);
  }

  ngOnInit() {

    this.items.subscribe((data)=>{

      data.forEach(item => {
        this.categories.push(item.category); 
      });

      this.categories = this.remove_duplicates(this.categories);

    });



  }


  keypress(e){
    console.log("key pressed");
    console.log(e);
    this.keypresed.emit(e);
    
  }

  cat_click(item){

    this.SelectedCategory = item;

    this.catpresed.emit(this.SelectedCategory);
  }

  
  
  shift_log() {
    let dialogRef = this.dialog.open(ShiftLogComponent);
    dialogRef.afterClosed().subscribe(result => {
      // todo - chack password validation and save the log in the db
      console.log(result);
    });
  }


}
