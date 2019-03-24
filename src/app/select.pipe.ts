import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log("in select pipe")
    // console.log(args)
    if(!args)
    return value;
    else if(args=="characters"){
      // console.log(value)

      return value.filter(it=> {
        if(it.gender)
          return it;
      });
    }
    else if(args=="houses"){
      return value.filter(it=>{
        if(it.region)
          return it;
      });
    }
    else {
      // console.log("incelse")
      return value.filter(it=>{
        if(it.isbn)
          return it;
      });
    }
  }

}