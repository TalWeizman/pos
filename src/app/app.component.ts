import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_menu:string = "main"; 
  
  menu_event(name:string){
    
    this.current_menu = name;

  }
  


}