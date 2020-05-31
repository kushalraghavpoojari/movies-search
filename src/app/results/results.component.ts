import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/movies.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  movies: Movie[];
  subscription$: Subscription;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.subscription$ = this.moviesService.movieResults.subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
    this.movies = [{
      "Title": "Peter's Friends",
      "Year": "1992",
      "imdbID": "tt0105130",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxODM3MTI4M15BMl5BanBnXkFtZTcwNTIzNzU2NA@@._V1_SX300.jpg"
  },
  {
      "Title": "Garfield and Friends",
      "Year": "1988–1995",
      "imdbID": "tt0094469",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1NDQwODgxMF5BMl5BanBnXkFtZTcwNzEzMjYyMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Kill Your Friends",
      "Year": "2015",
      "imdbID": "tt2474958",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTY1MDMxMzY5OV5BMl5BanBnXkFtZTgwMzA0NjkwNzE@._V1_SX300.jpg"
  },
  {
      "Title": "The Friends of Eddie Coyle",
      "Year": "1973",
      "imdbID": "tt0070077",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmNiZDZhNzQtNGYyMC00OTJiLTkyNjItOGNjOTU4NjAzMGU1XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
  },
  {
      "Title": "Circle of Friends",
      "Year": "1995",
      "imdbID": "tt0112679",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWEzZGJhNmYtOTkyYi00OTJhLWE3NTItOGFiNDEwYTc4Y2U3XkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_SX300.jpg"
  },
  {
      "Title": "Your Friends & Neighbors",
      "Year": "1998",
      "imdbID": "tt0119517",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTgzY2Y3OTEtYTI0MC00YWNhLTlhZjEtNGYzZWZiNDg5MDMzXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg"
  },
  {
      "Title": "Friends with Better Lives",
      "Year": "2014",
      "imdbID": "tt2742174",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAyNDA4OTk2NF5BMl5BanBnXkFtZTgwNzczNjc2MTE@._V1_SX300.jpg"
  },
  {
      "Title": "Fox and His Friends",
      "Year": "1975",
      "imdbID": "tt0072976",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTQxN2QwZDctY2Q5OC00MmNjLWI0NTYtNjdjNTA5MDkzNDA5XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
  },
  {
      "Title": "Barney & Friends",
      "Year": "1992–2009",
      "imdbID": "tt0144701",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTIyNjUyMTU1NF5BMl5BanBnXkFtZTcwMDg4ODIzMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Fisherman's Friends",
      "Year": "2019",
      "imdbID": "tt1648186",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDljZmIxOWQtYmFiZS00ODE4LTg1ODgtMmFlOTlkOTZmMTdiXkEyXkFqcGdeQXVyMjkyNzYwMw@@._V1_SX300.jpg"
  }];
  }

}
