import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseServiceService } from '../firebase-service.service'
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_errors:string= "שם/סיסמה לא קיימים";
  user2: Observable<firebase.User>;
  username:string = ""; 
  password:string = "";
 

  constructor(private router :Router,public auth: FirebaseServiceService,private flashMessagesService : FlashMessagesService) {


   }

  ngOnInit() {

      //localStorage.removeItem('user');
  

      //check if user is all ready connected
      if(localStorage.getItem('user'))
      {
        this.router.navigate(['pos',localStorage.getItem('user')]);  
      }
  }

  login_with_gmail() {
    this.auth.login_with_gmail().then((result)=>{

      //if its the user first time 
      if (!localStorage.getItem('user'))
      {
        localStorage.setItem('user',result.user.uid);

        //to know later if its first time - to show profile setting screen
        localStorage.setItem('first_time',"yes");
      }

      //navigate to user screen using the user id
      this.router.navigate(['pos',result.user.uid]); 

    }).catch(error => {
       
       // todo - show error msg
        
      
    });
  }

    login_with_github() {
      this.auth.login_with_github();
  }

  login_with_facebook() {
    this.auth.login_with_facebook();

  }

    login_with_email_and_password(email,password){
    
        this.auth.login_with_email_and_password(email,password);
    }


}
