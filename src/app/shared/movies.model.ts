export interface Movie {
    Poster: String,
    Title: String,
    Type: String,
    Year: String,
    imdbID: String,
}
export interface MoviesResponse {
    Response: String,
    Search: Movie[],
    totalResults: String
}
export interface MovieDetails {
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: Rating[],
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    totalSeasons: String,
    Response: String
}

export interface Rating {
    Source: String,
    Value: String
}