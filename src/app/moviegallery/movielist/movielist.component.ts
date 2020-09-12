import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as MovieActions from '../store/actions/movie.actions';
import Movie from '../movie.model';
import MovieState from '../store/state/movie.state';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  constructor(private store: Store<{ movies: MovieState }>, private router:Router) {
    this.movies$ = store.pipe(select('movies'));
   
  }
  listOfgenres = [];
  listofmoviesongenres = [];
  ngOnInit(): void {
  this.MovieSubscription = this.movies$
    .pipe(
      map(x => {
        console.log(x);
        this.MovieList = x.Movies;
        this.movieError = x.MovieError;
        this.listOfgenres = this.findCommonElements(this.MovieList);
        console.log(this.listOfgenres);

         this.listofmoviesongenres = this.findcommonMovies(this.MovieList);
        console.log(this.listofmoviesongenres);
      })
    )
    .subscribe();

  this.store.dispatch(MovieActions.BeginGetMovieAction());
  //this.router.navigateByUrl('/movie/list');
  console.log('movie component');

  
}

movies$: Observable<MovieState>;
MovieSubscription: Subscription;
MovieList: Movie[] = [];
movieError: Error = null;

private findcommonMovies(arrs){
  if(arrs['movies']!=undefined){
    let arr = [];
   // console.log(this.listOfgenres);
    const listOfUserGroups = [...new Set((arrs['movies'].map((it )=>{
     // console.log(it);
      for(let i=0;i<=this.listOfgenres.length-1;i++){
        if(it.genres.includes(this.listOfgenres[i])){
         // console.log( arr[this.listOfgenres[i]]);
         
          if(arr[this.listOfgenres[i]] === undefined){
            arr[this.listOfgenres[i]] = [];
            arr[this.listOfgenres[i]].push(it);
          }
          else{
            arr[this.listOfgenres[i]].push(it);
          }
          
         
        }
        
      }
    })))];
   return arr;
   // console.log(listOfUserGroups);
  }
  //console.log(countries);
}
 
private findCommonElements(arrs) {
  var resArr = [];
  let arrgenre = [];
  let listOfgenres = [];
  if(arrs['movies']!=undefined){
   // console.log(arrs['movies'].length);
   for(let i=0;i <= arrs['movies'].length-1;i++){
    // console.log(arrs['movies'].length);
    // listOfUserGroups = [...new Set(arrs['movies'][i].genres.map(it => it.group))];
    
     if(i!=arrs['movies'].length-1){
       if(i==0){
       // console.log( [...new Set([...arrs['movies'][i].genres, ...arrs['movies'][i+1].genres])]);
        listOfgenres = [...new Set([...arrs['movies'][i].genres, ...arrs['movies'][i+1].genres])];
       }
       else{
        listOfgenres = [...new Set([...listOfgenres, ...arrs['movies'][i+1].genres])];
       }
      
     }
     
     
    
   }
 //  console.log(listOfgenres);
 // console.log(resArr);
  }
 
 
  /*for (var i = arrs[0].length - 1; i > 0; i--) {


      for (var j = arrs.length - 1; j > 0; j--) {
          if (arrs[j].indexOf(arrs[0][i]) == -1) {
              break;
          }
      }

      if (j === 0) {
          resArr.push(arrs[0][i]);
      }


  }*/
  return listOfgenres;
}

ngOnDestroy() {
  if (this.MovieSubscription) {
    this.MovieSubscription.unsubscribe();
  }
}

  onClick():void{
    this.router.navigateByUrl('/detail');
  }
}
