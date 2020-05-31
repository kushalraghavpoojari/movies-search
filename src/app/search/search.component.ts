import { Component } from '@angular/core';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  movie: String = '';
  constructor(private moviesService: MoviesService) {}
  searchMovie() {
    this.moviesService.fetchMovies(this.movie);
  }
}
