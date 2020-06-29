import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import MoviesList from "../components/MoviesList";
import Notification from "../components/Notification";
import CustomButton from "../components/CustomButton";
import moviesApi from "../services/moviesApi";
import getQueryParams from "../utils/getQueryParams";

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
    page: 1,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      return this.fetchWithQuery(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ movies: [] });
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = (query) => {
    if (query) {
      moviesApi
        .fetchMoviesWithQuery(query, this.state.page)
        .then((movies) =>
          this.setState((prev) => ({
            movies: [...prev.movies, ...movies],
            page: prev.page + 1,
          }))
        )
        .catch((error) => this.setState({ error }));
    }
  };

  handleSearch = (searchQuery) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies, error, page } = this.state;
    const { location } = this.props;
    const { query } = getQueryParams(this.props.location.search);

    return (
      <>
        {error && (
          <Notification
            message="Whoops, something went wrong"
            error={error.message}
            type="danger"
          />
        )}

        <SearchBox onSubmit={this.handleSearch} />
        {movies.length > 0 && (
          <>
            <MoviesList movies={movies} location={location} />
            <CustomButton
              onClick={() => this.fetchWithQuery(query, page)}
              title="Load more"
            />
          </>
        )}
      </>
    );
  }
}

export default MoviesPage;
