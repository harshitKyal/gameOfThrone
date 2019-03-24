import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class searchPipe implements PipeTransform {
  transform(items: any[], searchText?:string,searchText2?:string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    return items.filter( it => {
        if((it[searchText2] != "") && it.hasOwnProperty(searchText2)){
              return it[searchText2].includes(searchText)};
          });}
}