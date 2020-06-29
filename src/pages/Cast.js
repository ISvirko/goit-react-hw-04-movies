import React, { Component } from "react";
import CastList from "../components/CastList";
import Notification from "../components/Notification";
import moviesApi from "../services/moviesApi";

class Cast extends Component {
  state = {
    cast: null,
    error: null,
  };

  componentDidMount() {
    moviesApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { cast, error } = this.state;

    return (
      <>
        {error && (
          <Notification
            message="Whoops, something went wrong"
            error={error.message}
            type="danger"
          />
        )}

        {cast && <CastList cast={cast} />}
      </>
    );
  }
}

export default Cast;
