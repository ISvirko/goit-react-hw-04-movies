import React, { Component } from "react";

class SearchBox extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;

    if (value.trim()) {
      this.props.onSubmit(value);
    }

    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
