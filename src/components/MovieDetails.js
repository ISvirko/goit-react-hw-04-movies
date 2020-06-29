import React from "react";

const getYear = (str) => {
  return str.substring(0, 4);
};

const getVotesPercentage = (num) => {
  return Math.round(num * 10) + "%";
};

const getGenres = (arr) => {
  return arr.map((item) => <span key={item.id}>{item.name} </span>);
};

const MovieDetails = ({ movie }) => (
  <>
    <div className="movieDetails-wrapper">
      <div className="movieDetails">
        <img
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={movie.title}
          className="movieDetails-img"
        />
        <div>
          <h1 className="movieDetails-title">
            {movie.title}
            <span> ({getYear(movie.release_date)})</span>
          </h1>
          <p className="movieDetails-tagline">{movie.tagline}</p>
          <p className="movieDetails-votes">
            User Score: {getVotesPercentage(movie.vote_average)}
          </p>
          <h4 className="movieDetails-text-title">Overview</h4>
          <p>{movie.overview}</p>
          <h4 className="movieDetails-text-title">Genres</h4>
          <p>{getGenres(movie.genres)}</p>
        </div>
      </div>
    </div>

    {/* <div className="additional-info-wrapper">
      <div className="additional-info">
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={`${match.url}/cast`}
              className="navLink"
              activeClassName="navLink-active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/reviews`}
              className="navLink"
              activeClassName="navLink-active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div> */}
  </>
);

export default MovieDetails;
