import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../interfaces/Item"

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(items: Item[], filter: string ): any {

      console.log(filter);
        
        if (!items || !filter)
            return items;
        
        else 
            return items.filter( item => item.name.indexOf(filter) !== -1);

    }

}
