import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Movie  from './movie.model';

@Injectable()
  export class MovieGalleryService {
    private ApiURL: string = 'https://wookie.codesubmit.io/movies';
    constructor(private httpclient: HttpClient) {
      console.log('service');
    }

    getMovieList(): Observable<Movie[]> {
      console.log('getMovieList');
        return this.httpclient.get<Movie[]>(this.ApiURL);
      }

    getToken():string{
        return 'Wookie2019';
      }
  }