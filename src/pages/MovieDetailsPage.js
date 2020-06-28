import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import { Switch, Route, NavLink } from "react-router-dom";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Spinner from "../components/Spinner";
import Notification from "../components/Notification";
import routes from "../routes";

const getYear = (str) => {
  return str.substring(0, 4);
};

const getVotesPercentage = (num) => {
  return Math.round(num * 10) + "%";
};

const getGenres = (arr) => {
  return arr.map((item) => <span key={item.id}>{item.name} </span>);
};

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true });

    moviesApi
      .fetchMovieDetails(match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state && state.from) {
      return history.push(state.from);
    }

    history.push(routes.movies);
  };

  render() {
    const { match } = this.props;
    const { movie, loading, error } = this.state;

    return (
      <>
        {error && (
          <Notification
            message="Whoops, something went wrong"
            error={error.message}
            type="danger"
          />
        )}

        {loading && <Spinner />}

        <button type="button" onClick={this.handleGoBack}>
          Back To Movies List
        </button>

        {movie && (
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

            <div className="additional-info-wrapper">
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
            </div>

            <Switch>
              <Route path={`${match.path}/cast`} component={Cast} />
              <Route path={`${match.path}/reviews`} component={Reviews} />
            </Switch>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
