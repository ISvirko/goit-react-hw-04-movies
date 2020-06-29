import React from "react";
import { NavLink } from "react-router-dom";
import getQueryParams from "../utils/getQueryParams";
import routes from "../routes";

const checkQuery = (location) => {
  location.state.from &&
    location.state.from.search &&
    getQueryParams(location.state.from.search);
};

const AdditionalInfo = ({ match, location }) => {
  const query = checkQuery(location);

  return (
    <div className="additional-info-wrapper">
      <div className="additional-info">
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: location.state.from ? location.state.from : routes.home,
                  search: query ? query : "",
                },
              }}
              className="navLink"
              activeClassName="navLink-active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: location.state.from ? location.state.from : routes.home,
                  search: query ? query : "",
                },
              }}
              className="navLink"
              activeClassName="navLink-active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;
