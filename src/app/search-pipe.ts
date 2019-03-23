import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class searchPipe implements PipeTransform {
  transform(items: any[], searchText?:string,searchText2?:string): any[] {
    console.log("in search filter pipeeeeeeeeee")
    console.log(searchText)
    console.log(searchText2)
    console.log(items)
    if(!items) return [];
    if(!searchText) return items;
    //searchText = searchText.toLowerCase();
    var resullt : object;

    return items.filter( it => {
        console.log(it[searchText2])
// tslint:disable-next-line: curly
        if((it[searchText2] != "") && it.hasOwnProperty(searchText2)){
                console.log("inside if")
              return it[searchText2].includes(searchText)};
          });
         
// tslint:disable-next-line: member-ordering
// console.log("printing result")
//         console.log(items)
//         return items
// console.log("in filter pipe")
// console.log(items)
// console.log(searchText)
// return items.filter( it => {
//   if((it.isbn != "") && it.hasOwnProperty('isbn'))
//         return it.isbn.includes(searchText);
//     });
//    }
}
}