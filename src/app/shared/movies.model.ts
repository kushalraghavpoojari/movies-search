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