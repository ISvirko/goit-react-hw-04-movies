import React from "react";
import { Link } from "react-router-dom";

const MoviesListItem = ({ movie, location }) => (
  <div className="moviesList-item">
    <div className="moviesList-img-wrapper">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
            : "https://uixis.biz/assets/general/images/no_poster.jpg"
        }
        alt={movie.title ? movie.title : movie.name}
        width="154"
      />
    </div>
    <Link
      to={{
        pathname: `/movies/${movie.id}`,
        state: { from: location },
      }}
    >
      <p className="movieTitle">{movie.title ? movie.title : movie.name}</p>
    </Link>

    <div className="movieInfo">
      <div>
        <span className="infoTitle">Release:</span>
        <span className="infoText">
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </span>
      </div>

      <div>
        <span className="infoTitle">Rating:</span>
        <span className="infoText-rating"> {movie.vote_average}</span>
      </div>
    </div>
  </div>
);

export default MoviesListItem;
