import React from "react";
import { useHistory } from "react-router";
import xboxlogo4 from "../../assets/images/xboxlogo4.png";

export default function GameCard({ game }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/game/view/${game.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__top">
        <img src={xboxlogo4} />
      </div>

      <div className="card__image__cover">
        <img src={game.cover} alt={game.image + "'s image"} />
      </div>

      <div className="card__title">
        <h1>{game.title}</h1>
      </div>

      <div className="card__inform">
        <p> Ano: {game.launchYear} </p>
      </div>

      <div className="card__inform">
        <div>IMDB: {game.imdbRating}</div>
      </div>

      <div className="card__images__profile">
        {/* {game.profiles.map((profile, index) => (
          <div key={`game_profile_${index}`} className="card__image">
            <img src={profile.nickname} alt={game.image + "'s image"} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
