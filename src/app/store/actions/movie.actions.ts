import { createAction, props } from '@ngrx/store';
import Movie from '../../model/movie.model';


export const BeginGetMovieAction = createAction('[Movie] - Begin Get Movie');

export const SuccessGetMovieAction = createAction(
    '[Movie] - Sucess Get Movie',
    props<{ payload: Movie[] }>()
  );


  export const BeginSearchMovieAction = createAction('[Movie] - Begin Seacrch Movie');

export const SuccessSearchMovieAction = createAction(
    '[Movie] - Sucess Search Movie',
    props<{ payload: Movie[] }>()
  );

  export const ErrorMovieAction = createAction('[Movie] - Error', props<Error>());