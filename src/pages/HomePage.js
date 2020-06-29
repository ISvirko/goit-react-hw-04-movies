import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import MoviesList from "../components/MoviesList";
import Notification from "../components/Notification";

class HomePage extends Component {
  state = {
    trending: [],
    error: null,
  };

  componentDidMount() {
    moviesApi
      .getPopularMovies()
      .then((trending) => this.setState({ trending }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { trending, error } = this.state;

    return (
      <>
        {error && (
          <Notification
            message="Whoops, something went wrong"
            error={error.message}
            type="danger"
          />
        )}

        <h2 className="trending-title">Trending today</h2>
        {trending && <MoviesList movies={trending} />}
      </>
    );
  }
}

export default HomePage;
