import { Injectable } from '@angular/core';

import {  HttpClient, HttpErrorResponse } from '@angular/common/http';
//Observable imports//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GotHttpService {

  //from documentation taking the base url's for each.
  public charApi = "https://www.anapioficeandfire.com/api/characters";
  public bookApi = "https://www.anapioficeandfire.com/api/books";
  public houseApi = "https://www.anapioficeandfire.com/api/houses";



  constructor(private _http : HttpClient) { }

    getAllCharacters() : any{
    let myResponse = this._http.get(this.charApi);
  
     //observable response
     return myResponse;
   }

   getAllBooks(){
     let myResponse2 = this._http.get(this.bookApi);
     return myResponse2;
   }

   getAllHouses(){
     let myResponse = this._http.get(this.houseApi);
     return myResponse;
   }

   //getting responses for all single characters, books, houses here.....

   getSingleCharacter(id) : any{
     let myResponse = this._http.get(this.charApi+'/'+id);
     return myResponse;
   }

   getSingleBook(id):any{
     let myResponse = this._http.get(this.bookApi+'/'+id);
     return myResponse;
   }

   getSingleHouse(id):any{
     let myResponse = this._http.get(this.houseApi+'/'+id);
     return myResponse;
   }

}// end of class