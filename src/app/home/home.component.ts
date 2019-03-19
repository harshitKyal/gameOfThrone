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
  constructor(public gotHttpService:GotHttpService) { }

  ngOnInit() {
    this.charData();
    this.bookData();
    this.houseData();
    setTimeout(() => {
      console.log(this.allData);
    }, 10000);
  }

  public charData = ()=>{
    //characters
        this.gotHttpService.getAllCharacters().subscribe(
          data =>{            
            this.allData = this.allData.concat(data);            
          }
        );
  }

  public bookData = () =>{
      //books
      this.gotHttpService.getAllBooks().subscribe( 
      data =>{
        this.allData = this.allData.concat(data);        
      });

  }

  public houseData = ()=>{
  //houses
    this.gotHttpService.getAllHouses().subscribe( 
      data =>{
          this.allData = this.allData.concat(data);
          //final composed data array having all the data in one array
          
        }
    );
  }
  }
