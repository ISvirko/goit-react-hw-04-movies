import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import Layout from "./Layout";
import Spinner from "./Spinner";

const AsyncHome = lazy(() =>
  import("../pages/HomePage" /*webpackChunkName: 'homePage' */)
);

const AsyncMovies = lazy(() =>
  import("../pages/MoviesPage" /*webpackChunkName: 'moviesPage' */)
);

const AsyncMovieDetails = lazy(() =>
  import("../pages/MovieDetailsPage" /*webpackChunkName: 'movieDetailsPage' */)
);

const App = () => (
  <>
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.home} exact component={AsyncHome} />
          <Route path={routes.movieDetails} component={AsyncMovieDetails} />
          <Route path={routes.movies} component={AsyncMovies} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;
