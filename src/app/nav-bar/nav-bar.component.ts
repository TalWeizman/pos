import { Component, OnInit,EventEmitter ,Output,Input} from '@angular/core';
import {MdInputModule} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseServiceService } from '../firebase-service.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  date:string = new Date().toLocaleDateString();
  time:string = new Date().toLocaleTimeString();
   
  @Output() mainToggle:EventEmitter<any> = new EventEmitter();
  @Input() current : string ;

  corrent_menu: string = "main";


  constructor(private afService:FirebaseServiceService,private afAuth:AngularFireAuth) { 
  
    this.utcTime();
    
  }   

  menu_click(name){

    this.mainToggle.emit(name);

  }

  utcTime(): void {
        setInterval(() => {
            let DateTime = new Date();
                this.date = DateTime.toLocaleDateString();
                this.time = DateTime.toLocaleTimeString();
        }, 1000);
  }

  log_out(){

    this.afService.logout();

  }

  ngOnInit() {
 
  
  }

}
