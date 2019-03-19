import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Router } from '@angular/router';
import { GotHttpService } from './got-http.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './character/character.component';
import { BooksComponent } from './books/books.component';
import { HouseComponent } from './house/house.component';
import { FilterPipe } from './filter.pipe';
import { SelectPipe } from './select.pipe';
import { SortPipe } from './sort-pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,
  RouterModule.forRoot([
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'character/:id',component:CharacterComponent},
    {path:'books/:id',component:BooksComponent},
    {path:'houses/:id',component:HouseComponent}
    
  ])
   ],
  declarations: [ AppComponent, HomeComponent, CharacterComponent, BooksComponent, HouseComponent, FilterPipe, SelectPipe,SortPipe ],
  bootstrap:    [ AppComponent ],
  providers: [GotHttpService,HttpClient]
})
export class AppModule { }
