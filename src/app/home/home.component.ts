import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
   public allData : any[] = []
   public allCharacters;
   public allBooks;
   public allHouses;
   //public allData : any[]= []
   public allCharArray = [];
   public allBookArray = [];
   public allHouseArray = [];
   public searchBookName="";
   public searchIsbn="";
   public searchPublisher="";
   public searchCharacterName ="";
   public searchGender ="";
   public searchAliases= "";
   public searchHouseName = "";
   public searchRegion="";
  constructor(public gotHttpService: GotHttpService) { }

  ngOnInit() {
    this.charData();
    this.bookData();
    this.houseData();
    this.allShow();
    
    setTimeout(() => {
      // this.allShow();
      // console.log(this.allData);
    }, 10000);
  }

  public charData = () => {
    //characters
        this.gotHttpService.getAllCharacters().subscribe(
          data => {      
            this.allCharArray = this.allCharArray.concat(data)  
            // console.log("in char data")
            // console.log(this.allCharArray)    
            this.allData= this.allData.concat(data)
          }
        );
        // console.log("inchar")
        // console.log(this.allData)
  }

  public bookData = () => {
      //books
      this.gotHttpService.getAllBooks().subscribe( 
      data => {
        this.allData = this.allData.concat(data);
      });
      

  }

  public houseData = () => {
  //houses
    this.gotHttpService.getAllHouses().subscribe( 
      data => {
          this.allHouseArray = this.allCharArray.concat(data)  
          this.allData = this.allData.concat(data);
        }
    );
  }

 public allShow () { //to show all
     console.log("in all show")
    this.allData["all"] = true;
    this.allData["books"] = false ;
    this.allData["characters"] = false;
    this.allData["houses"] = false;

    console.log(this.allData)
}

booksShow() { //to show books
  this.allData["all"] = false;
  this.allData["books"] = true ;
  this.allData["characters"] = false;
  this.allData["houses"] = false;
  console.log(this.allData)
}
charactersShow() { //to show characters
  this.allData["all"] = false;
  this.allData["books"] = false ;
  this.allData["characters"] = true;
  this.allData["houses"] = false;
  console.log(this.allData)
}
public housesShow = function() { // to show houses
  this.allData["all"] = false;
  this.allData["books"] = false ;
  this.allData["characters"] = false;
  this.allData["houses"] = true;
  console.log(this.allData)
}
public resetButton = function(){
  this.searchBookName="";
  this.searchIsbn="";
  this.searchPublisher="";
  this.searchCharacterName ="";
  this.searchGender ="";
  this.searchAliases= "";
  this.search="";

  this.searchHouseName = "";
  this.searchRegion="";
  this.allShow();
}
  }
