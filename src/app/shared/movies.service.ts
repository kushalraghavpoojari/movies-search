import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesResponse, Movie } from './movies.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    movieResults = new Subject<Movie[]>();
    constructor(private http: HttpClient) {}

    fetchMovies(movieName: String) {
        this.http
            .get<MoviesResponse>(`https://www.omdbapi.com/?s=${movieName}&apikey=${environment.apikey}`)
            .pipe(
                tap(resData => {
                    this.movieResults.next(resData.Search)
                })
            )
            .subscribe();
    }
}