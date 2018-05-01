import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    settings : any = {
      bis_name:"",
      com_name:"",
      id_number:"",
      phone:""
    };

  constructor() {
      
   }

  ngOnInit() {
  }

}
