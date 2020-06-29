import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(32),
      height: theme.spacing(24),
    },
  },
}));

const CastList = ({ cast }) => {
  const classes = useStyles();

  return (
    <div className="cast-list">
      <div className={classes.root}>
        {cast.map((actor) => (
          <Paper elevation={1} key={actor.cast_id} className="cast-list-item">
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <div>
              <p className="actor-name">{actor.name}</p>
              <p className="actor-character">Character: {actor.character}</p>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default CastList;
