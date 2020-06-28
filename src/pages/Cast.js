import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import Spinner from "../components/Spinner";
import Notification from "../components/Notification";

class Cast extends Component {
  state = {
    cast: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { cast, loading, error } = this.state;

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

        {cast && (
          <ul className="cast-list">
            {cast.map((actor) => (
              <li key={actor.cast_id} className="cast-list-item">
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                    alt={actor.name}
                  />
                )}
                <div>
                  <p className="actor-name">{actor.name}</p>
                  <p className="actor-character">
                    Character: {actor.character}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
