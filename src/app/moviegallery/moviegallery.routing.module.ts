import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component' ;
import { MoviegalleryComponent } from './moviegallery.component';

//---Route to MovielistComponent and MoviedetailComponent
const routes: Routes = [
    {path:'', component:MoviegalleryComponent,
     children:[
         {path:'', component:MovielistComponent},
         {path:'detail/:id',component:MoviedetailComponent}
    ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieGalleryRoutingModule { }