import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { TvdetailsComponent } from './components/tvdetails/tvdetails.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'watch/movie/:id', component:MoviedetailsComponent },
  {path: 'watch/tv/:id', component: TvdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
