import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MoviegalleryComponent } from './moviegallery/moviegallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MoviegalleryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
