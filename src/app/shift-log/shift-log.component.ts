import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-log',
  templateUrl: './shift-log.component.html',
  styleUrls: ['./shift-log.component.css']
})
export class ShiftLogComponent implements OnInit {

  password:string = "";
  constructor() { }

  ngOnInit() {
  }

  number_click(num){
    this.password += num.toString();
  }

  clean_input(){  

    this.password = "";
  }

}
