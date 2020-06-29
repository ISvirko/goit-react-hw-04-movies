import React from "react";

const CastList = ({ cast }) => (
  <ul className="cast-list">
    {cast.map((actor) => (
      <li key={actor.cast_id} className="cast-list-item">
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
      </li>
    ))}
  </ul>
);

export default CastList;
