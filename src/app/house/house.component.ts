import {
  Component,
  OnInit
 } from '@angular/core';
 import {
  GotHttpService
 } from '../got-http.service';
 import {
  ActivatedRoute,
  Router
 } from '@angular/router';
 
 @Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
 })
 export class HouseComponent implements OnInit {
  public id;
  public house;
  name: any[];
  constructor(public gotHttpService: GotHttpService, public _route: ActivatedRoute, public router: Router) {}
 
  ngOnInit() {
   this.id = this._route.snapshot.paramMap.get('id');
   this.getHouseDetails(this.id);
  }
 
  getHouseDetails(id) {
   this.gotHttpService.getSingleHouse(id).subscribe(
    data => {
     this.house = data;
 
     // tslint:disable-next-line: forin
     if (this.house) {
      // tslint:disable-next-line: forin
      for (let i in this.house.titles) {
       this.name.push(i);
       //console.log(main.people);
      }
     }
     this.house.titles = this.name.toString();
    },
 
    error => {
     console.log("error found");
    }
   )
  }
 
 
 
 }