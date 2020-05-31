import { Component } from '@angular/core';
import { MovieDetails } from 'src/app/shared/movies.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  radius: number = 90;
  rating: number = 0;
  circumference: number = Math.PI*(this.radius*2)
  offset: number = 0;
  movieDetails: MovieDetails;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute
      .data
      .pipe(
        map(res => {
          return {
            ...res.movieDetails,
            Released: res.movieDetails.Released.split(' ')[2],
            imdbRating: (parseInt(res.movieDetails.imdbRating)*10) + ''
          }
        })
      )
      .subscribe(res => {
      this.movieDetails = res;
      this.rating = +this.movieDetails.imdbRating;
      this.offset = (100 - this.rating)*this.circumference/100;
    })
  }
}
