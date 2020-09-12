import { Action, createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import Movie from '../../movie.model';
import MovieState, { initializeState } from '../state/movie.state';

const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(MovieActions.BeginGetMovieAction, state => state),
    
  
    on(MovieActions.SuccessGetMovieAction, (state: MovieState, { payload }) => {
        console.log('SuccessGetMovieAction');
      return { ...state, Movies: payload };
    }),
    on(MovieActions.ErrorMovieAction, (state: MovieState, error: Error) => {
      // remove below line and use different telemetry logging
      console.log('ErrorMovieAction');
      console.error(error);
      return { ...state, MovieError: error };
    })
  );
  
  export function MovieReducer(
    state: MovieState | undefined,
    action: Action
  ) {
    return reducer(state, action);
  }