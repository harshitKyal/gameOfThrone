import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import {ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private id : any;
  public char : any;
  series :[];
  constructor(public gotHttpService : GotHttpService,public _route: ActivatedRoute, public router : Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id'); 
    // console.log("vhjvhvbhjv")
    this.getCharacterDetails(this.id);
    // console.log("get cha")
    // console.log(this.character)
    setTimeout(() => {
      // console.log(this.char);
    }, 10000);
  }

  getCharacterDetails(id){
    this.gotHttpService.getSingleCharacter(id).subscribe(
      data =>{
        this.char= data;
        console.log(this.char);
      
// tslint:disable-next-line: forin
if (this.char) {
  // console.log("if")
  // console.log(this.char)
// tslint:disable-next-line: forin
      for (let i in this.char.tvSeries) {
         this.series.push(i);
        //console.log(main.people);
    }
  }
    // console.log("series")
    // console.log(this.series)
    this.char.seasons = this.series.toString();
  },
    
      error =>{
        console.log("error occured");
      }
    )
  }

}