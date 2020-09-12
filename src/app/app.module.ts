import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
//import { MoviegalleryComponent } from './moviegallery/moviegallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//import { MovielistComponent } from './moviegallery/movielist/movielist.component';
//import { MoviedetailComponent } from './moviegallery/moviedetail/moviedetail.component' ;
import { MovieGalleryModule } from './moviegallery/moviegallery.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    
    AppRoutingModule,
    MovieGalleryModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
