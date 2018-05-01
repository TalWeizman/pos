import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login_errors:string= "שם/סיסמה לא קיימים";
  reg_form : FormGroup;
  data : any ;

  constructor(fb:FormBuilder,public afAuth: AngularFireAuth) {

    this.reg_form = fb.group({

      
      'full_name': [null,Validators.compose( [Validators.required , Validators.minLength(3), Validators.maxLength(30) ]   ) ],
      'email': [null,Validators.compose( [Validators.required , Validators.email,Validators.maxLength(30) ]   ) ],
      'phone': [null,Validators.compose( [Validators.required ,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[0]{1}[5]{1}[0-9]{8}$/) ]   ) ],
      'user_name': [null,Validators.compose( [Validators.required,Validators.pattern(/^[a-zA-Z0-9]{3,30}$/) ] ) ],
      'password': [null,Validators.compose( [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ,Validators.maxLength(30) ]   ) ],
      'confirm_password': [null,Validators.compose( [Validators.required ] ) ],

    });

   }

   submit_reg_form(data){

      this.afAuth.auth.createUserWithEmailAndPassword(data.email,data.password).catch((error)=>{

        throw error;
      })

   }

  ngOnInit() {
  }

}
