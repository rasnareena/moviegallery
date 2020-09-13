import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Movie  from '../model/movie.model';

@Injectable(
  {
    providedIn:"root"
  }
)
  export class MovieService {

    private ApiURL: string = 'https://wookie.codesubmit.io/movies';//---Api to fetch all movies and also to search particular movie
   
    public movieList:Movie[];
    public searchName:string ="";

    constructor(private httpclient: HttpClient) {
     
    }

    /**
     * getMovieList: Observable
     * httpClient.get to 
     * Fetch all movies
     */
    getMovieList(): Observable<Movie[]> {      
        return this.httpclient.get<Movie[]>(this.ApiURL);
      }


     /**
     * getSearchMovie: Observable
     * httpClient.get and pass parameter of movie name 
     * to search that particular movie. 
     */
     getSearchMovie(): Observable<Movie[]>{
      console.log('getMovieList');
      return this.httpclient.get<Movie[]>(this.ApiURL, {
        params: new HttpParams().set(
          'q',
          this.searchName
        )
      });
     } 

    getToken():string{
        return 'Wookie2019';
      }
  }