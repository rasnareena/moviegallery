import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieGalleryService } from '../../moviegallery.service';
import { MoviegalleryComponent } from '../../moviegallery.component';
import * as MovieActions from '../actions/movie.actions';
import Movie from '../../Movie.model';

@Injectable()
export class MovieEffects {

    constructor(private moviehttpService: MovieGalleryService, private action$:Actions){

    }

    GetMovieList$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(MovieActions.BeginGetMovieAction),
      mergeMap(action =>
        this.moviehttpService.getMovieList().pipe(
          map((data: Movie[]) => {
              console.log('httpservice');
              console.log(data);
            return MovieActions.SuccessGetMovieAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(MovieActions.ErrorMovieAction(error));
          })
        )
      )
    )
  );

}