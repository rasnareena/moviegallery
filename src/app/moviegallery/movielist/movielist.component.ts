import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as MovieActions from '../../store/actions/movie.actions';
import Movie from '../../model/movie.model';
import MovieState from '../../store/state/movie.state';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})

export class MovielistComponent implements OnInit {

  private listOfGenres = [];
  listOfMoviesGenres = [];
  isMovieListAvailable:boolean = false;
  private movies$: Observable<MovieState>;
  private MovieSubscription: Subscription; 
  movieError: Error = null;
  private counter:number = 320;
  private movieList:Movie[];

  /**
   * 
   * @param store 
   * @param router 
   * @param movieService 
   */
  constructor(private store: Store<{ movies: MovieState }>, private router:Router, private movieService:MovieService) {
    this.movies$ = store.pipe(select('movies'));
   
  }
 
  ngOnInit(): void {
  //---Subscribe to store Observable with movielist
  this.MovieSubscription = this.movies$
    .pipe(
      map(x => {
        console.log(x);
        this.movieList = x.Movies;
        this.movieError = x.MovieError;
        //---List of all genres
        this.listOfGenres = this.findCommonGenres(this.movieList);
       
        //--list of movies as value and genres as key
        this.listOfMoviesGenres = this.findCommonMoviesGenres(this.movieList);
        
        if(this.movieList['movies'] != undefined)
        {
          this.isMovieListAvailable = this.movieList['movies'].length>0?true : false;
        }
        
        
      })
    )
    .subscribe();
    
      if(this.movieService.searchName == ""){
        this.store.dispatch(MovieActions.BeginGetMovieAction());
      }  
}

/**
 * 
 * @param arrs: Movielist
 * findCommonMoviesGenres - create list of key value pair
 * key: Genres
 * Value: Movie
 */
private findCommonMoviesGenres(arrs:Movie[]){
  if(arrs['movies']!=undefined){
    let arr = [];
   // console.log(this.listOfgenres);
    const listOfUserGroups = [...new Set((arrs['movies'].map((it )=>{
     // console.log(it);
      for(let i=0;i<=this.listOfGenres.length-1;i++){
        if(it.genres.includes(this.listOfGenres[i])){
         // console.log( arr[this.listOfgenres[i]]);
         
          if(arr[this.listOfGenres[i]] === undefined){
            arr[this.listOfGenres[i]] = [];
            arr[this.listOfGenres[i]].push(it);
          }
          else{
            arr[this.listOfGenres[i]].push(it);
          }         
         
        }
        
      }
    })))];
   return arr;
   
  }
 
}

/**
 * 
 * @param arrs: Movielist
 * findCommonGenres - create list of common genres
 */
private findCommonGenres(arrs:Movie[]) {
  var resArr = [];
  let arrgenre = [];
  let listOfgenres = [];
  if(arrs['movies']!=undefined){
    console.log(arrs['movies'].length);
    if(arrs['movies'].length>1){
      for(let i=0;i <= arrs['movies'].length-1;i++){        
         if(i!=arrs['movies'].length-1){
           if(i==0){           
            listOfgenres = [...new Set([...arrs['movies'][i].genres, ...arrs['movies'][i+1].genres])];
            console.log(listOfgenres);
           }
           else{
            listOfgenres = [...new Set([...listOfgenres, ...arrs['movies'][i+1].genres])];
           }
          
         }         
        
       }
    }
    else if(arrs['movies'].length == 1){
      listOfgenres = arrs['movies'][0].genres;
    }  
 
  } 
  return listOfgenres;
}

/**
 * ngOnDestroy - unsubscribe MovieSubscription 
 */
ngOnDestroy() {
  if (this.MovieSubscription) {
    this.MovieSubscription.unsubscribe();
  }
}


  /**
   * 
   * @param el: element
   * scrollRight - scroll to right
   */
  scrollRight(el:any){
    el.scrollLeft += this.counter;
  }

  /**
   * 
   * @param el: element
   * scrollLeft - scroll to left
   */
  scrollLeft(el:any){
    el.scrollLeft -= this.counter;
  }

  
}
