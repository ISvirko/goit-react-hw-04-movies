import React, { Component } from "react";
import ReviewsList from "../components/ReviewsList";
import Notification from "../components/Notification";
import CustomButton from "../components/CustomButton";
import moviesApi from "../services/moviesApi";

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    page: 1,
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    moviesApi
      .fetchMovieReviews(this.props.match.params.movieId, this.state.page)
      .then((reviews) =>
        this.setState((prev) => ({
          reviews: [...prev.reviews, ...reviews],
          page: prev.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }));
  };

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

        {reviews.length > 0 ? (
          <>
            <ReviewsList reviews={reviews} />
            <CustomButton onClick={this.fetchReviews} title="Load more" />
          </>
        ) : (
          <p className="reviews-text">
            There are no reviews for this movie yet
          </p>
        )}
      </>
    );
  }
}

export default Reviews;
