import React from "react";
import { useHistory } from "react-router";
import xboxlogo4 from "../../assets/images/xboxlogo4.png";
import GradeIcon from "@material-ui/icons/Grade";

export default function GameCard({ game }) {
  const history = useHistory();

  // console.log("game:  ",game)

  const handleClick = () => {
    console.log("History: ", history);
    history.push(`/game/view/${game.id}`, { game });
  };

  function iconImdb(note) {
    const imdb = [];

    if (note >= 9) {
      var n = 5;
      for (var i = 1; i <= n; i++) {
        imdb.push(<GradeIcon />);
      }
      return <div>{imdb}</div>;
    } else if (note >= 8) {
      var n = 4;
      for (var i = 1; i <= n; i++) {
        imdb.push(<GradeIcon />);
      }
      return <div>{imdb}</div>;
    } else if (note >= 6) {
      var n = 3;
      for (var i = 1; i <= n; i++) {
        imdb.push(<GradeIcon />);
      }
      return <div>{imdb}</div>;
    } else if (note >= 4) {
      var n = 2;
      for (var i = 1; i <= n; i++) {
        imdb.push(<GradeIcon />);
      }
      return <div>{imdb}</div>;
    } else {
      return (
        <div>
          {imdb}
          <GradeIcon />
        </div>
      );
    }
  }

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

      <div className="card__inform__icon">
        <div>{iconImdb(game.imdbRating)}</div>
        {/* <GradeIcon  /> */}
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
