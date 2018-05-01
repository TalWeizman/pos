import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../interfaces/Item"

@Pipe({
  name: 'categoriesFilter',
  pure : false
})
export class CategoriesFilterPipe implements PipeTransform {

  transform(items: Item[], cat:string ): Item[] {
    
    console.log(items);
    console.log(cat);

    if (!items || cat == "") {
        return items;
    }

    return items.filter(i => i.category == cat);

  }

}
