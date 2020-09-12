
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviegalleryComponent } from './moviegallery.component';


import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component' ;

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './store/effects/movie.effects';

import { MovieReducer } from './store/reducers/movie.reducers';
import { MovieGalleryRoutingModule } from './moviegallery.routing.module';
import { MovieGalleryService } from './moviegallery.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
  
    MoviegalleryComponent,
    
    MovielistComponent,
    MoviedetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ movies: MovieReducer }),
    EffectsModule.forRoot([MovieEffects]),
    HttpClientModule,
    MovieGalleryRoutingModule
  ],
  providers: [
    MovieGalleryService,
    {
        provide : HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi   : true
      }
  ]
})
export class MovieGalleryModule { }
