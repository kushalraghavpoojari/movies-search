import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { MovieResolverService } from './shared/movie-resolver.service';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'movie/:id',
  component: MovieDetailsComponent,
  resolve: {
    movieDetails: MovieResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
