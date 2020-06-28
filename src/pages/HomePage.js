import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import MoviesPage from "../components/MoviesList";
import Spinner from "../components/Spinner";
import Notification from "../components/Notification";

class HomePage extends Component {
  state = {
    trending: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesApi
      .getPopularMovies()
      .then((trending) => this.setState({ trending }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { trending, loading, error } = this.state;

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

        <h2 className="trending-title">Trending today</h2>
        <MoviesPage movies={trending} />
      </>
    );
  }
}

export default HomePage;
