import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
 public id;
 public house;
 name:any[];
  constructor(public gotHttpService : GotHttpService,public _route: ActivatedRoute, public router : Router) { }

  ngOnInit() {
    this.id =this._route.snapshot.paramMap.get('id');
    this.getHouseDetails(this.id);
  }

  getHouseDetails(id){
    this.gotHttpService.getSingleHouse(id).subscribe(
      data=>{
        this.house = data;
        // console.log(data);

      //   for (var i in this.house.titles) {
      //     this.names.push(this.house.titles[i]);
      // }

      // main.titles = this.names.toString();
            
// tslint:disable-next-line: forin
if (this.house ) {
  // console.log("if")
  // console.log(this.char)
// tslint:disable-next-line: forin
      for (let i in this.house.titles) {
        // this.name.push(i);
        //console.log(main.people);
    }
  }
    // console.log("series")
    // console.log(this.series)
    // this.house.titles = this.name.toString();
    // console.log("house")
    // console.log(this.house)
      },

      error =>{
        console.log("error found");
      }
    )
  }

  

}