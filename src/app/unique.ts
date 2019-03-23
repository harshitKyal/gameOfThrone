
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filterUnique',
    pure: false
})
// tslint:disable-next-line: class-name
export class uniquePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        var newInput = [];
        var myNewList=[];

        for (let item of value){
            if ((item[args] != "") && item.hasOwnProperty(args)) {
                newInput.push(item[args]);
            }
        };
        myNewList =  Array.from(new Set(newInput ));
        return myNewList;
    }
}