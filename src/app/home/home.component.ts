import { Component, OnInit,NgZone } from '@angular/core';
import {FirebaseServiceService } from '../firebase-service.service'
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/User';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  current_menu:string = "main";
  items: any;
  
  categories:any;
  permissions:any;
  loading_prog:boolean = false;
  

  constructor(public zone: NgZone,private router:Router,public snackBar: MdSnackBar 
        ,private activatedroute:ActivatedRoute,private afService:FirebaseServiceService) { 

  }

  ngOnInit() {

     this.activatedroute.params.subscribe(params => {
        if ( params['id'] != localStorage.getItem('user') )
          {
              this.afService.logout();

          }
       // In a real app: dispatch action to load the details here.
    });

    if (localStorage.getItem('first_time'))
      {
        //navigate to first setting page

      }
      
  }

  loading(val : boolean){

    this.loading_prog = val;

  }
  
  menu_event(name:string){

    let flag = false;

    if (this.afService.user == null)
      {
        this.openSnackBar("משתמש לא מחובר , נא להתחבר לפני"); 
        return;
      }
      else{

        this.afService.user.permissions.forEach(p => {

          if(this.afService.check_permission(name))
            {
              flag = true;
              this.zone.run(()=>this.current_menu = name);
            }

        });

        if (!flag)
          this.openSnackBar("אין הרשאה למשתמש להכנס לשם"); 
      }
    
  }


  setmenu(name)
  {
    this.current_menu = name;
  }

  openSnackBar(msg) {
    this.snackBar.open(msg,"אזהרה", {
      duration: 2000,
    });
  }

  user_log_in(){




  }


}
