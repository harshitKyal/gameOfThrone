import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText?:Array <string>): any[] {
    //c//onsole.log("in filter pipeeeeeeeeee")
    // console.log(searchText)
    if(!items) return [];
    if(!searchText) return items;
    //searchText = searchText.toLowerCase();

// console.log("in filter pipe")
// console.log(items)
// console.log(searchText)
return items.filter( it => {
  if((it.isbn != "") && it.hasOwnProperty('isbn'))
        return it.isbn.includes(searchText);
    });
   }
}