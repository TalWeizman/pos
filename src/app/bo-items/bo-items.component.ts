import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {FirebaseServiceService, } from '../firebase-service.service';

import {no_image} from './no_image_base64';
import { Item } from '../interfaces/Item';


@Component({
  selector: 'app-bo-items',
  templateUrl: './bo-items.component.html',
  styleUrls: ['./bo-items.component.css']
})
export class BoItemsComponent implements OnInit {

  inputs_disabled :boolean = true;
  trash : boolean = false;
  new_item : boolean = true;
  save: boolean =  false;
  key:string = "";

  @Output() catEmiiter = new EventEmitter();

  items : any;
  categories  :any;

  item : Item = {
    name: "",
    price : 0,
    img64 : no_image,
    category:"",
    inventory:0,
    is_active:true

  };

  
  quary:string = "";

  file:any;
  
  constructor(private afService: FirebaseServiceService) {

      this.afService.getAllItems().subscribe((data)=>{

         this.items = data;

      });

      this.afService.getCategories().subscribe((data)=>{

         this.categories = data;

      });

   }
   
   



  //  onChange(event){

  //       this.file = event.srcElement.files[0];

  //  }


   upload_to_firebase(file:any){

    var storageRef = firebase.storage().ref();
    storageRef.child("/logo.jpg").put(file).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
        });
   }

  ngOnInit() {
   

  }

  add_new_item(){

    this.initInputs();
    this.new_item = false;
    this.save = true;
    this.trash = false;
    
    this.inputs_disabled = false;

  }

  save_item(){

    if(this.key == "")
    {
          if( this.item.name == "" || this.item.category == "")
          {
                console.log('new item - no name or category',this.item.name,this.item.category)
          }
          else{

            this.afService.add_item(this.item);
            this.new_item = true;
            this.save = false;
            this.trash = false;
            this.inputs_disabled = true;
          }
      

    }
    else if( this.item.name == "" || this.item.category == "" )
    {

        console.log('edit item - no name or category')
        
    }
    else{

      this.afService.update_item(this.key,this.item);
        this.new_item = true;
        this.save = false;
        this.trash = false;
        this.inputs_disabled = true;

    }


  }

  initInputs(){
    this.item.name = "";
    this.item.price = 0;
    this.item.img64 = no_image;
    this.item.category = "";
    this.item.inventory = 0;
    this.item.is_active = true;
    this.key = "";
  }

   edit_product(item){
    
    this.item_selected(item);
    
    this.save = true;
    this.trash = true;
    this.new_item = false;

    this.inputs_disabled = false;

   }

  item_selected(item:any){

    console.log(item);

    this.inputs_disabled = true;
    this.save = false;
    this.trash = false;
    this.new_item = true;

    this.item = {
      name:item.name,
      price:item.price,
      inventory:item.inventory,
      img64:item.img64,
      category:item.category,
      is_active:item.is_active
    };
    this.key = item.$key;
  
  } 

  
  delete_item(){

    this.save = false;
    this.trash = false;
    this.new_item = true;
    
    this.inputs_disabled = true;
    this.afService.delete_item(this.key);
    this.initInputs();
    
  }  


  go_to_categories(){

    this.catEmiiter.emit();
  }

  onChange(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.item.img64 = "data:image/jpeg;base64," + btoa(binaryString);
    }

}
