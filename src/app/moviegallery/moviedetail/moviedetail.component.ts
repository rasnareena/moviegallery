import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Movie from '../../model/movie.model';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  movie:Movie;

  /**
   * 
   * @param route 
   * @param router 
   * @param movieService 
   */
  constructor(private route: ActivatedRoute,
    private router: Router, private movieService:MovieService) { }
     
  
    ngOnInit(): void {
      //---fetch movie id passed from movie list page to movie detail page via router and get the movie detail data
      this.route.paramMap.subscribe((params : ParamMap)=> {       
        let id = params.get('id');
        let movielist = this.movieService.movieList;
          this.movie = movielist['movies'].find((p:Movie) => p.id == id);
          
      });
    
  }

  /**
   * prevPage - method called on Back button
   * to move back to movie list page
   */
  prevPage(){
    this.router.navigateByUrl('/'); //---route to movie list component  
  }

}
