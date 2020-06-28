import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Layout>
  </>
);

export default App;
