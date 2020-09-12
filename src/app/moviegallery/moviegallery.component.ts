import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as MovieActions from './store/actions/movie.actions';
import Movie from './movie.model';
import MovieState from './store/state/movie.state';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-moviegallery',
  templateUrl: './moviegallery.component.html',
  styleUrls: ['./moviegallery.component.css']
})
export class MoviegalleryComponent implements OnInit {

  constructor() {
    //this.movies$ = store.pipe(select('movies'));
   
  }

  ngOnInit(): void {
  
  console.log('movie component');
}





}
