import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FirebaseServiceService, } from '../firebase-service.service';
import { User } from '../interfaces/User';
import {Md5} from 'ts-md5/dist/md5';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-bo-users',
  templateUrl: './bo-users.component.html',
  styleUrls: ['./bo-users.component.css']
})
export class BoUsersComponent implements OnInit {


  inputs_disabled :boolean = true;
  trash : boolean = false;
  new_item : boolean = true;
  save: boolean =  false;
  key:string = "";
 
  users : any;
  permissions  :any;
  
  quary:string = "";
  file:any;

  @Output() perEmiiter = new EventEmitter();


  user : User = {
    name: "",
    phone : "",
    id_number : "",
    h_password:"",
    permission:"",
    is_active:true
  };

  constructor(private afService: FirebaseServiceService,public snackBar: MdSnackBar ) { 

      this.users = this.afService.getAllUsers();

      this.afService.getPermissions().subscribe((data)=>{

         this.permissions = data;

      });

  }

  ngOnInit() {
  }


  add_new_user(){

    this.initInputs();
    this.new_item = false;
    this.save = true;
    this.trash = false;
    
    this.inputs_disabled = false;

  }

  save_user(){

    console.log(this.user);

    if(this.key == "")
    {
          if( this.user.name == "" || this.user.h_password == "" || this.user.permission == "" )
          {
                this.openSnackBar("נא למלות את כל השדות ");
          }
          else{

            this.user.h_password = Md5.hashStr(this.user.h_password).toString(); 
            
            this.afService.add_user(this.user);  
            this.new_item = true;
            this.save = false;
            this.trash = false;
            this.inputs_disabled = true;
          }
      

    }
    else if( this.user.name == "" || this.user.h_password == "" || this.user.permission == "")
    {

        console.log('edit item - no name or category')
        
    }
    else{

      this.afService.update_user(this.key,this.user);
        this.new_item = true;
        this.save = false;
        this.trash = false;
        this.inputs_disabled = true;

    }


  }

  initInputs(){
    this.user.name = "";
    this.user.phone = "";
    this.user.h_password = "";
    this.user.permission = "";
    this.user.is_active = true;
    this.user.id_number = "";
    this.key = "";
  }

   edit_user(user){
    
    this.user_selected(user);
    
    this.save = true;
    this.trash = true;
    this.new_item = false;

    this.inputs_disabled = false;

   }

   openSnackBar(msg) {
    this.snackBar.open(msg,"אזהרה", {
      duration: 2000,
    });
  }

  user_selected(user:any){

    console.log(user);

    this.inputs_disabled = true;
    this.save = false;
    this.trash = false;
    this.new_item = true;

    this.user = {
      name:user.name,
      id_number:user.id_number,
      phone:user.phone,
      permission : user.permission,
      h_password : user.h_password,
      is_active:user.is_active
    };
    this.key = user.$key;
  
  } 

  
  delete_user(){

    this.save = false;
    this.trash = false;
    this.new_item = true;
    
    this.inputs_disabled = true;
    this.afService.delete_user(this.key);
    this.initInputs();
    
  }
  
  go_to_permissions(){

    this.perEmiiter.emit();
  }

}
