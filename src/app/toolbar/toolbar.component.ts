import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; //--search font awesome icon
import { MovieService } from '../service/movie.service'; //---service
import { select, Store } from '@ngrx/store';
import Movie from '../model/movie.model';//---model
import MovieState from '../store/state/movie.state';
import { Observable, Subscription } from 'rxjs';
import * as MovieActions from '../store/actions/movie.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    faSearch = faSearch;//---Font awesome search icon
  
  /**
   * 
   * @param store 
   * @param movieService 
   * @param router 
   */
  constructor(private store: Store<{ movies: MovieState }>,private movieService:MovieService, private router:Router) { 
   
  }

  ngOnInit(): void {
  }

  /**
   * 
   * @param searchName 
   * searchMovie - method called from search field
   * to search movie 
   */
  searchMovie(searchName:string){
    this.movieService.searchName = searchName;    //---Search data
    this.store.dispatch(MovieActions.BeginSearchMovieAction());//-- Dispatch action to search movie name
    this.router.navigateByUrl('/'); //---route to movie list component    
  }

  

}
