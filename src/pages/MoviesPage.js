import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import SearchBox from "../components/SearchBox";
import MoviesList from "../components/MoviesList";
import getQueryParams from "../utils/getQueryParams";
import Notification from "../components/Notification";

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
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
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = (query) => {
    moviesApi
      .fetchMoviesWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }));
  };

  handleSearch = (searchQuery) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies, error } = this.state;
    const { location } = this.props;

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
        <MoviesList movies={movies} location={location} />
      </>
    );
  }
}

export default MoviesPage;
