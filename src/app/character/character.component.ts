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
  public character : any;
  constructor(public gotHttpService : GotHttpService,public _route: ActivatedRoute, public router : Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id'); 
    this.getCharacterDetails(this.id);
  }

  getCharacterDetails(id){
    this.gotHttpService.getSingleCharacter(id).subscribe(
      data =>{
        this.character= data;
        console.log(data);
      },
      error =>{
        console.log("error occured");
      }
    )
  }

}