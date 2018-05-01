import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService, } from '../firebase-service.service';
import { Permission } from '../interfaces/Permission';


@Component({
  selector: 'app-bo-permission',
  templateUrl: './bo-permission.component.html',
  styleUrls: ['./bo-permission.component.css']
})
export class BoPermissionComponent implements OnInit {

  inputs_disabled :boolean = true;
  trash : boolean = false;
  new_item : boolean = true;
  save: boolean =  false;
  key:string = "";
 
  permissions  :any;
  
  quary:string = "";

  permission : Permission = {
    name: "",
    permissions: {
      bo: false,
      bo_dash: false,
      bo_users: false,
      bo_items: false,
      bo_categories: false,
      bo_reports: false,
      bo_permissions: false,
      bo_invantory: false,
      bo_sales: false,
      bo_castumers: false,
        
      settings: false,
      close_day: false,
      start_cash: false,
      x_report: false,
      invoice_search: false,

      pos: false,
      pos_disscount: false,
      pos_open_cash: false,
      pos_refound: false,
      pos_general_cash: false,
      pos_castumer_add: false,
      pos_cash_pay: false,
      pos_credit_pay: false,
      pos_over_pay: false,
    }
  };

  constructor(private afService: FirebaseServiceService) { 
    
    this.permissions = afService.getAllPermissions();

  }

  per_click(name){



  }

  ngOnInit() {
  }

    add_new_permission(){

    this.initInputs();
    this.new_item = false;
    this.save = true;
    this.trash = false;
    
    this.inputs_disabled = false;

  }

  save_permission(){

    console.log(this.permission);

    if(this.key == "")
    {
          if( this.permission.name == "" || this.permission.permissions == {} )
          {
                console.log('new item - no name or category');
          }
          else{

            this.afService.add_permission(this.permission);
            this.new_item = true;
            this.save = false;
            this.trash = false;
            this.inputs_disabled = true;
          }
      

    }
    else if( this.permission.name == "" || this.permission.permissions == {} )
    {

        console.log('edit item - no name or category')
        
    }
    else{

      this.afService.update_permission(this.key,this.permission);
        this.new_item = true;
        this.save = false;
        this.trash = false;
        this.inputs_disabled = true;

    }


  }

  initInputs(){
    this.permission.name = "";
    this.permission.permissions = {
      bo: false,
      bo_dash: false,
      bo_users: false,
      bo_items: false,
      bo_categories: false,
      bo_reports: false,
      bo_permissions: false,
      bo_invantory: false,
      bo_sales: false,
      bo_castumers: false,

      settings: false,
      close_day: false,
      start_cash: false,
      x_report: false,
      invoice_search: false,

      pos: false,
      pos_disscount: false,
      pos_open_cash: false,
      pos_refound: false,
      pos_general_cash: false,
      pos_castumer_add: false,
      pos_cash_pay: false,
      pos_credit_pay: false,
      pos_over_pay: false,
    };
    this.key = "";
  }

   edit_permission(user){
    
    this.per_selected(user);
    
    this.save = true;
    this.trash = true;
    this.new_item = false;

    this.inputs_disabled = false;

   }

  per_selected(permission:any){

    console.log(permission);

    this.inputs_disabled = true;
    this.save = false;
    this.trash = false;
    this.new_item = true;

    this.permission = {
      name:permission.name,
      permissions: {
        pos: permission.permissions.pos,
        bo: permission.permissions.bo,
        bo_dash : permission.permissions.bo_dash,
        bo_users : permission.permissions.bo_users,
        bo_items : permission.permissions.bo_items,
        bo_categories : permission.permissions.bo_categories,
        bo_reports : permission.permissions.bo_reports,
        bo_permissions : permission.permissions.bo_permissions,
        bo_invantory : permission.permissions.bo_invantory,
        bo_sales : permission.permissions.bo_sales,
        bo_castumers : permission.permissions.bo_castumers,
        settings : permission.permissions.settings,
        pos_disscount : permission.permissions.disscount,
        pos_open_cash : permission.permissions.open_cash,
        pos_refound : permission.permissions.refound,
        pos_general_cash : permission.permissions.general_cash,
        pos_castumer_add : permission.permissions.castumer_add,
        pos_cash_pay : permission.permissions.cash_pay,
        pos_credit_pay : permission.permissions.credit_pay,
        pos_over_pay : permission.permissions.over_pay,
        close_day : permission.permissions.close_day,
        start_cash : permission.permissions.start_cash,
        x_report : permission.permissions.x_report,
        invoice_search : permission.permissions.invoice_search
    }
    };

    this.key = permission.$key;
  
  } 

  
  delete_permission(){

    this.save = false;
    this.trash = false;
    this.new_item = true;
    
    this.inputs_disabled = true;
    this.afService.delete_permission(this.key);
    this.initInputs();
    
  }
  

}
