import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import MoviesList from "../components/MoviesList";
import Notification from "../components/Notification";
import CustomButton from "../components/CustomButton";

class HomePage extends Component {
  state = {
    trending: [],
    error: null,
    page: 1,
  };

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies = () => {
    moviesApi
      .fetchTrendingMovies(this.state.page)
      .then((trending) =>
        this.setState((prev) => ({
          trending: [...prev.trending, ...trending],
          page: prev.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }));
  };

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
        {trending && (
          <>
            <MoviesList movies={trending} />
            <CustomButton
              title="Load more"
              onClick={this.fetchTrendingMovies}
            />
          </>
        )}
      </>
    );
  }
}

export default HomePage;
