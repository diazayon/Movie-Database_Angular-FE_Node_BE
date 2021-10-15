import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CurrentmoviesComponent } from './components/currentmovies/currentmovies.component';
import { ContinuewatchingComponent } from './components/continuewatching/continuewatching.component';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';
import { TopratedmoviesComponent } from './components/topratedmovies/topratedmovies.component';
import { TrendingmoviesComponent } from './components/trendingmovies/trendingmovies.component';
import { PopulartvComponent } from './components/populartv/populartv.component';
import { TopratedtvComponent } from './components/topratedtv/topratedtv.component';
import { TrendingtvComponent } from './components/trendingtv/trendingtv.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { TvdetailsComponent } from './components/tvdetails/tvdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CurrentmoviesComponent,
    ContinuewatchingComponent,
    PopularmoviesComponent,
    TopratedmoviesComponent,
    TrendingmoviesComponent,
    PopulartvComponent,
    TopratedtvComponent,
    TrendingtvComponent,
    NavBarComponent,
    MoviedetailsComponent,
    TvdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
