const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "3230d8d4ae7a8c1846aab82409a4e8ca";

const fetchMovieDetails = (movieId) => {
  return fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`).then((res) =>
    res.json()
  );
};

const fetchMoviesWithQuery = (searchQuery) => {
  return fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`)
    .then((res) => res.json())
    .then((entries) => entries.results.map((entry) => entry));
};

const getPopularMovies = () => {
  return fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`)
    .then((res) => res.json())
    .then((entries) => entries.results.map((entry) => entry));
};

const fetchMovieCast = (movieId) => {
  return fetch(`${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((res) => res.cast);
};

const fetchMovieReviews = (movieId) => {
  return fetch(`${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}&page=1`)
    .then((res) => res.json())
    .then((res) => res.results);
};

export default {
  fetchMovieDetails,
  fetchMoviesWithQuery,
  getPopularMovies,
  fetchMovieCast,
  fetchMovieReviews,
};