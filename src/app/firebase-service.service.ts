import { Injectable,OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable,  Subject } from 'rxjs';
import { Item } from "app/interfaces/Item";

import { FlashMessagesService } from 'angular2-flash-messages';



@Injectable()
export class FirebaseServiceService implements OnInit{
  
 public user:any = null;

  constructor(private router :Router,private afDB:AngularFireDatabase,private afAuth:AngularFireAuth,private flashMessagesService : FlashMessagesService) { 
          

    this.afAuth.auth.onAuthStateChanged((data)=>{

      console.log("auth changed ",data);
      console.log("this user ",this.user);
      

    });

  }

  check_permission(per:string):boolean{
    
    let flag = false;
    this.afDB.list("/" + localStorage.getItem('user') + "/permissions").subscribe(data =>{

      data.forEach(d => {

        if (d.name == this.user.permission)
        {

          flag = true;
          
          switch (per) {
              case "sale":
                return d.permissions.pos;
              
              case "main":
                return true;

              case "back":
                return d.permissions.bo;

              case "setting":
                return d.permissions.setting;
          
              default:
                break;
            }
          
        }
      });
  
      if (!flag)
      {

          //permission not exsist
      }


    });

    return false;
  }

  update_item(key,obj){
  
      this.afDB.list("/" + localStorage.getItem('user') + "/items").update(key,obj);

  }

  getCorrentUser() : Observable<firebase.User>{

    return this.afAuth.authState;

  }
  
 login_with_gmail() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }

  delete_item(key){

    this.afDB.object("/" + localStorage.getItem('user') + "/items/" + key ).remove();
  }

  add_item(obj){

    this.afDB.list("/" + localStorage.getItem('user') + "/items").push(obj);
  }


  getAllItems() : FirebaseListObservable<Item[]> {

    console.log(localStorage.getItem('user'));

    return this.afDB.list( "/" + localStorage.getItem('user') + "/items");

  }

    getAllPermissions() : FirebaseListObservable<any> {

    console.log(localStorage.getItem('user'));

    return this.afDB.list( "/" + localStorage.getItem('user') + "/permissions");

  }

add_permission(obj){

  this.afDB.list("/" + localStorage.getItem('user') + "/permissions").push(obj);

}


update_permission(key,obj){

    this.afDB.list("/" + localStorage.getItem('user') + "/permissions").update(key,obj)
}


delete_permission(key){
  
  this.afDB.object("/" + localStorage.getItem('user') + "/permissions/" + key ).remove();
 }

    update_user(key,obj){
  
      this.afDB.list("/" + localStorage.getItem('user') + "/users").update(key,obj)

  }

  add_user(obj){

    this.afDB.list("/" + localStorage.getItem('user') + "/users").push(obj);
  }


    getAllUsers() : FirebaseListObservable<any> {

      console.log(localStorage.getItem('user'));
      
      return this.afDB.list( "/" + localStorage.getItem('user') + "/users");

    }
    
    delete_user(key){

      this.afDB.object("/" + localStorage.getItem('user') + "/users/" + key ).remove();
    }

    getItemByKey(key) : any{

      return this.afDB.list("/" + localStorage.getItem('user') + "/items").filter(item => item == key);

    }
    getCategories(){

      return this.afDB.list("/" + localStorage.getItem('user') + "/categories");
    }

    getPermissions(){

      return this.afDB.list("/" + localStorage.getItem('user') + "/permissions");

    }

    delCategory(index){

      this.afDB.object("/" + localStorage.getItem('user') + "/categories/"+ index).remove();
      
    }

    addCategory(name){
        
        this.afDB.list("/" + localStorage.getItem('user') + "/categories").push(name);

    }


    login_with_github() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then((result)=>{
      console.log("result");
      console.log(result);
    }).catch((error:any)=>{

     console.log("error");
      console.log(error.message);
      if (error.code == "auth/account-exists-with-different-credential")
      {
        console.log("ספק אחר עם אימייל זהה");
      }
      else if( error.code == "auth/popup-closed-by-user") 
      {

        console.log("משתמש סגר את תיבת ההתחברות");
      }
      

    })

  }

  login_with_facebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((result)=>{
      console.log("result");
      console.log(result);
    }).catch((error:any)=>{

     console.log("error");
      console.log(error);
            if (error.code == "auth/account-exists-with-different-credential")
      {
        console.log("ספק אחר עם אימייל זהה");
      }
      else if( error.code == "auth/popup-closed-by-user") 
      {

        console.log("משתמש סגר את תיבת ההתחברות");
      }
    });

  }

  login_with_email_and_password(email,password){
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then((result)=>{

      console.log("result");
      console.log(result);
      
    }).catch((error)=>{

      console.log("error");
      console.log(error);

    });

  }


  logout() {
    this.afAuth.auth.signOut().then(()=>{

      localStorage.removeItem('user');
       this.router.navigate(['login']);
       
      //log out - need to delete local storage user , redirect to login page
    }).catch(()=>{
      
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    
  }



}
