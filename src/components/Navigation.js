import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => (
  <div className="nav">
    <ul className="navList">
      <li>
        <NavLink
          to={routes.home}
          exact
          className="navLink"
          activeClassName="navLink-active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className="navLink"
          activeClassName="navLink-active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
