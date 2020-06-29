import React from "react";
import MoviesListItem from "./MoviesListItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 380,
    width: 300,
  },
}));

export default function MoviesList({ movies, location }) {
  const [spacing] = React.useState(5);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {movies.map((movie) => (
            <Grid key={movie.id} item>
              <Paper className={classes.paper}>
                <MoviesListItem movie={movie} location={location} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
