import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { MovieDetails } from './movies.model';
import { MoviesService } from './movies.service';

@Injectable({ providedIn: 'root' })
export class MovieResolverService implements Resolve<MovieDetails> {
  constructor(private moviesService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.moviesService
    //     .fetchMovieDetails(route.params.id);
    return {
        "Title": "Friends with Better Lives",
        "Year": "2014",
        "Rated": "TV-14",
        "Released": "31 Mar 2014",
        "Runtime": "22 min",
        "Genre": "Comedy",
        "Director": "N/A",
        "Writer": "Dana Klein",
        "Actors": "James Van Der Beek, Majandra Delfino, Zoe Lister-Jones, Brooklyn Decker",
        "Plot": "A comedy centered around six 30-something friends who each think the other has it better.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1 nomination.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAyNDA4OTk2NF5BMl5BanBnXkFtZTgwNzczNjc2MTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.0/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.0",
        "imdbVotes": "6,068",
        "imdbID": "tt2742174",
        "Type": "series",
        "totalSeasons": "1",
        "Response": "True"
    };
  }
}
