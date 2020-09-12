
import { createAction, props } from '@ngrx/store';
import Movie from '../../movie.model';

//export const GetMovieAction = createAction('[Movie] - Get Movie');
export const BeginGetMovieAction = createAction('[Movie] - Begin Get Movie');

export const SuccessGetMovieAction = createAction(
    '[Movie] - Sucess Get Movie',
    props<{ payload: Movie[] }>()
  );

  export const ErrorMovieAction = createAction('[Movie] - Error', props<Error>());