import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from '../../service/movie.service';
import * as MovieActions from '../actions/movie.actions';
import Movie from '../../model/movie.model';

@Injectable()
export class MovieEffects {

    constructor(private moviehttpService: MovieService, private action$:Actions){

    }

    /* 
    * GetMovieList: Effect
    * Fetch list of movies from HTTP service
    */
    GetMovieList$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(MovieActions.BeginGetMovieAction),
      mergeMap(action =>
        this.moviehttpService.getMovieList().pipe(
          map((data: Movie[]) => {
            return MovieActions.SuccessGetMovieAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(MovieActions.ErrorMovieAction(error));
          })
        )
      )
    )
  );

   /* 
    * GetSearchMovieList: Effect
    * Search moviename and get list of movies from HTTP service
    */
  GetSearchMovieList$: Observable<Action> = createEffect(()=>
  this.action$.pipe(
    ofType(MovieActions.BeginSearchMovieAction),
    mergeMap(action =>
      this.moviehttpService.getSearchMovie().pipe(
        map((data:Movie[])=>{
          return MovieActions.SuccessSearchMovieAction({payload:data})
        }),
        catchError((error:Error)=>{
          return of(MovieActions.ErrorMovieAction(error));
        })
      )
    )
  )
)

}