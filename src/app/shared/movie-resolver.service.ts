import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { MovieDetails } from './movies.model';
import { MoviesService } from './movies.service';

@Injectable({ providedIn: 'root' })
export class MovieResolverService implements Resolve<MovieDetails> {
  constructor(private moviesService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.moviesService
        .fetchMovieDetails(route.params.id);
  }
}
