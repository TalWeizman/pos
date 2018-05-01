import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService, } from '../firebase-service.service'
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-bo-categories',
  templateUrl: './bo-categories.component.html',
  styleUrls: ['./bo-categories.component.css']
})
export class BoCategoriesComponent implements OnInit {

  categories: any;
  new_cat:boolean = true;
  quary:string = "";

  constructor(private afService: FirebaseServiceService,private dialog: MdDialog) { 

      this.categories = this.afService.getCategories();
  }

  ngOnInit() {
  }

  delete_cat(key){

    let dialogRef = this.dialog.open(DelDialog);

    dialogRef.afterClosed().subscribe(result => {
       if (result == "delete")
          this.afService.delCategory(key);

    });

  }

add_new_cat(){

    
    let dialogRef =   this.dialog.open(AddDialog);
    
    dialogRef.afterClosed().subscribe(result => {
       
      let flag = true;
      if (result != ""){

            this.categories.subscribe(data=>{

                data.forEach(el => {
                  if(el.$value == result)
                      flag = false;
                });

                if (flag)
                    this.afService.addCategory(result);
            });    
      }
       
    });
}


}

  @Component({
  selector: 'del-dialog',
  template: `<h1 md-dialog-title style="text-align:right">אזהרה</h1>
<div md-dialog-content>אתה בטוח שאתה רוצה למחוק את הקטגוריה</div>
<div md-dialog-actions>
  <button md-button color="primary" md-dialog-close="delete">מחק</button>
  <span class="fill-space"></span>
  <button md-button md-dialog-close="cancel">ביטול</button>
</div>`,
styleUrls: ['./bo-categories.component.css']
  })
  export class DelDialog {}


    @Component({
  selector: 'add-dialog',
  template: `<h1 md-dialog-title style="text-align:right">הוספת קטגוריה</h1>
<div md-dialog-content>
<md-input-container>
  <input mdInput [(ngModel)]="input" placeholder="שם הקטגוריה" value="">
</md-input-container>
</div>
<div md-dialog-actions>
  <button md-button color="primary" md-dialog-close="{{input}}">הוסף</button>
  <span class="fill-space"></span>
  <button md-button md-dialog-close="">ביטול</button>
</div>`,
styleUrls: ['./bo-categories.component.css']
  })
  export class AddDialog {
    input:string;

  }