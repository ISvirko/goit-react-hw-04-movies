import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ movies, location }) => (
  <ul className="moviesList">
    {movies.map((movie) => (
      <MoviesListItem key={movie.id} movie={movie} location={location} />
    ))}
  </ul>
);

export default MoviesList;
