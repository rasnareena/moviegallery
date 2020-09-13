import { Action, createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import MovieState, { initializeState } from '../state/movie.state';

const initialState = initializeState();// Initialize movie state

const reducer = createReducer(
    initialState,
    on(MovieActions.BeginGetMovieAction, state => state),    
  
    on(MovieActions.SuccessGetMovieAction, (state: MovieState, { payload }) => {
      
      return { ...state, Movies: payload };
    }),

    on(MovieActions.BeginSearchMovieAction, state => state),    
  
    on(MovieActions.SuccessSearchMovieAction, (state: MovieState, { payload }) => {
      
      return { ...state, Movies: payload };
    }),
    on(MovieActions.ErrorMovieAction, (state: MovieState, error: Error) => {
   
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