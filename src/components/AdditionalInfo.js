import React from "react";
import { NavLink } from "react-router-dom";

const AdditionalInfo = ({ match }) => (
  <div className="additional-info-wrapper">
    <div className="additional-info">
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink
            to={`${match.url}/cast`}
            className="navLink"
            activeClassName="navLink-active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
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

export default AdditionalInfo;
