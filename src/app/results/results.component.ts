import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movies.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  movies: Movie[];
  subscription$: Subscription;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.subscription$ = this.moviesService.movieResults.subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  ngOnDestroy(): void {
      this.subscription$.unsubscribe();
  }
}
