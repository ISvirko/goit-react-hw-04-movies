import React, { Component } from "react";
import moviesApi from "../services/moviesApi";
import Spinner from "../components/Spinner";
import Notification from "../components/Notification";

class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading, error } = this.state;

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

        <ul className="reviews-list">
          {reviews.map((review) => (
            <li key={review.id} className="reviews-list-item">
              <p className="reviews-list-item-name">{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
