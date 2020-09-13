import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviegalleryComponent } from './moviegallery.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component' ;
import { MovieGalleryRoutingModule } from './moviegallery.routing.module';



@NgModule({
  declarations: [  
    MoviegalleryComponent,    
    MovielistComponent,
    MoviedetailComponent
  ],
  imports: [
    CommonModule,    
    MovieGalleryRoutingModule    
  ],
  providers: [ 
    
  ]
})
export class MovieGalleryModule { }
