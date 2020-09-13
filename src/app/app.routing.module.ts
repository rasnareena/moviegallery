import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Lazy Load MovieGallery Module
 */
const routes: Routes = [
    {
        path:'',loadChildren:() =>import('./moviegallery/moviegallery.module').then(m=>m.MovieGalleryModule)
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }