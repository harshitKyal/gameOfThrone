import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';
import{ GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private id;
  public book;
  constructor(public _route : ActivatedRoute, public router : Router, public gotHttpService: GotHttpService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getBookDetails(this.id);
  }

  getBookDetails(id){
    this.gotHttpService.getSingleBook(id).subscribe(
      data =>{
        this.book = data;
        console.log(data);
      },

      error =>{
        console.log("error");
      }
    )
  }
}