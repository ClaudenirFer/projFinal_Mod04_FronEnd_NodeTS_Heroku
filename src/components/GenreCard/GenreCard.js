import React from "react";
import { useHistory } from "react-router";

export default function GenreCard({ genre }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/genre/view/${genre.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__title">
        <h1>{genre.genre}</h1>
      </div>

      <div className="card__images"></div>
    </div>
  );
}
