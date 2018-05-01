import { Component, OnInit, Input } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import { Item } from '../interfaces/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  
  @Input() item:Item ;

  constructor() { 
    console.log("constructor");
    //give item init value



  }

  ngOnInit() {
    console.log("init");


  }

}
