import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item:any , searchtext: String): any[] {
    if(!item) return [];
    if(!searchtext) return item;
    searchtext= searchtext.toLowerCase();
    
    return item.filter( (item: { toLowerCase: () => String[]; }) => {
      return item.toLowerCase().includes(searchtext);
    });
  }

}
