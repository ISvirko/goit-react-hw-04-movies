import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import AdditionalInfo from "../components/AdditionalInfo";
import Notification from "../components/Notification";
import Spinner from "../components/Spinner";
import CustomButton from "../components/CustomButton";
import moviesApi from "../services/moviesApi";
import routes from "../routes";

const AsyncCast = lazy(() => import("./Cast" /*webpackChunkName: 'cast' */));

const AsyncReviews = lazy(() =>
  import("./Reviews" /*webpackChunkName: 'reviews' */)
);

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;

    moviesApi
      .fetchMovieDetails(match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.movies);
  };

  handleGoToHomePage = () => {
    this.props.history.push(routes.home);
  };

  render() {
    const { match, location } = this.props;
    const { movie, error } = this.state;

    return (
      <>
        {error && (
          <Notification
            message="Whoops, something went wrong"
            error={error.message}
            type="danger"
          />
        )}

        <div className="go-back-btn">
          <CustomButton title="Back to Movies" onClick={this.handleGoBack} />
        </div>

        {movie && (
          <>
            <MovieDetails movie={movie} />
            <AdditionalInfo match={match} location={location} />
          </>
        )}

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={`${match.path}/cast`} component={AsyncCast} />
            <Route path={`${match.path}/reviews`} component={AsyncReviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
