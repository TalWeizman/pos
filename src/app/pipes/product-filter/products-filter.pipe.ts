import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../interfaces/Item"

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {


  transform(items: Item[], filter: string , cat:string): any {

      console.log(filter);
        
        if (!items)
            return items;
        
        else if (filter != ""  && cat == "")
            return items.filter( item => item.name.indexOf(filter) !== -1);

        else if (cat == "" && !filter)
            return items;

        else if (cat != "" && !filter)  
            return items.filter( item =>  item.category == cat  )
            
        else if (cat != "" && filter)   
            return items.filter( item => item.name.indexOf(filter) !== -1 && item.category == cat  )
    }


}
