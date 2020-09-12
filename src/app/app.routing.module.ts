import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviegalleryComponent } from './moviegallery/moviegallery.component';
import { MovielistComponent } from './moviegallery/movielist/movielist.component';
import { MoviedetailComponent } from './moviegallery/moviedetail/moviedetail.component' ;

const routes: Routes = [
    {
        path:'movie',loadChildren:() =>import('./moviegallery/moviegallery.module').then(m=>m.MovieGalleryModule)
    }
   /* {
        path:'', component:MoviegalleryComponent,
        children:[
            {path:'list', component:MovielistComponent},
            {path:'detail',component:MoviedetailComponent}
        ]
    }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }