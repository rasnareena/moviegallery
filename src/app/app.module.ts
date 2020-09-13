import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';//----Font Awesome Module

import { AppRoutingModule } from './app.routing.module';//---App routing mdoule

import {MovieService} from './service/movie.service'; //---Service
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './service/auth.interceptor';//--- Http Interceptor

//---Ngrx Store: Effects, Store, Reducer
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './store/effects/movie.effects';
import { MovieReducer } from './store/reducers/movie.reducers';
//-----

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    StoreModule.forRoot({ movies: MovieReducer }),
    EffectsModule.forRoot([MovieEffects]),
    HttpClientModule,
    AppRoutingModule   
 
  ],
  providers: [
    MovieService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
