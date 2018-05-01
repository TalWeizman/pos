import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catFilter'
})
export class CatFilterPipe implements PipeTransform {

  transform(cat: any[], filter: string ): any {

      console.log(filter);
        
        if (!cat || !filter)
            return cat;
        
        else 
            return cat.filter( item => item.$value.indexOf(filter) !== -1);

    }

}
