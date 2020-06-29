import React, { Component } from "react";
import ReviewsList from "../components/ReviewsList";
import Notification from "../components/Notification";
import moviesApi from "../services/moviesApi";

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    moviesApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { reviews, error } = this.state;

    return (
      <>
        {error && (
          <Notification
            message="Whoops, something went wrong"
            error={error.message}
            type="danger"
          />
        )}

        {reviews ? (
          <ReviewsList reviews={reviews} />
        ) : (
          <p>There are no reviews for this movie yet</p>
        )}
      </>
    );
  }
}

export default Reviews;
