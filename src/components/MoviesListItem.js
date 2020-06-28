import React from "react";
import { Link } from "react-router-dom";

const MoviesListItem = ({ movie, location }) => (
  <li className="moviesList-item">
    <img
      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
      alt={movie.title}
    />
    <Link
      to={{
        pathname: `/movies/${movie.id}`,
        state: { from: location },
      }}
    >
      <p className="movieTitle">{movie.title}</p>
    </Link>

    <div className="movieInfo">
      <div>
        <span className="infoTitle">Release:</span>
        <span className="infoText">{movie.release_date}</span>
      </div>

      <div>
        <span className="infoTitle">Rating:</span>
        <span className="infoText-rating"> {movie.vote_average}</span>
      </div>
    </div>
  </li>
);

export default MoviesListItem;
