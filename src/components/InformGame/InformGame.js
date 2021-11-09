import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import xboxlogo4 from "../../assets/images/xboxlogo4.png";

export default function InformGame(props) {
  const history = useHistory();
  // const id = props.match.params.id;

  console.log("INFORGAME_PROPS:  ", props);
  const game = props.game;

  console.log("INFORM GAME game:  ", game);

 
  // console.log("Genres:  ",game.genres[0].id);
  // console.log("TAMANHO DO ARRAY: ", game.genres.length - 1)
  const genre = [];
  if (game.genres) {
    game.genres.map((g) => {
      genre.push(` ${g.genre}  `);
    });
  }

  console.log("ARRAY GENRE:  ", genre);

  return (
    <div className="card_inform" >
      <div className="card__inform__top">
        <img src={xboxlogo4} />
      </div>

      <div className="card__inform__image__cover">
        <img src={game.cover} alt={game.image + "'s image"} />
      </div>

      <div className="card__title">
        <h1>{game.title}</h1>
      </div>

      <div className="card__inform">
        <p className="inform">
          <span> DESCRIÇÃO: </span>
          {game.description}{" "}
        </p>
      </div>

      <div className="card__inform">
        <p className="inform">
          <span> GÊNERO: </span>
        </p>
        <p>{genre}</p>
        {/* {genre.map((g,i) => (
          g.genre
        ))}  */}
        {/* </p> */}
      </div>

      <div className="card__inform">
        <p className="inform">
          <span> ANO: </span> {game.launchYear}{" "}
        </p>
      </div>

      <div className="card__inform">
        <p className="inform">
          {" "}
          <span> IMDB: </span>
          {game.imdbRating}
        </p>
      </div>

      <div className="card__inform" id="imdb">
        <p className="card__inform-gameplay">
          <a href={game.gamePlayUrl} target="_blank">
            {`<<`} GAMEPLAY {`>>`}
          </a>
        </p>
      </div>

      <div>
        <p className="inform">
          {" "}
          <span> TRAILER </span>
        </p>
      </div>

      <div className="card__inform__trailer-iframe">
        <iframe
          className="card__inform__trailer"
          id="video"
          width=""
          height=""
          src={game.youtubeUrl.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
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
