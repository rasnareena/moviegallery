import Movie from '../../model/movie.model';

export default class MovieState {
  Movies: Array<Movie>;
  MovieError: Error;
}

export const initializeState = (): MovieState => {
  return { Movies: Array<Movie>(), MovieError: null };
};