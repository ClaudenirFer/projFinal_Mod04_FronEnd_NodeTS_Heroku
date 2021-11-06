import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/menucard.css";
import xboxlogo4 from "../../assets/images/xboxlogo4.png";

export default function ViewCard() {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push(`/game/view/${game.id}`);
  // };

  return (
    <div className="menu__card">
      {/* <div className="card__title">
        <h1>{game.title}</h1>
      </div>

      <div className="card__inform ">$ {game.cover}</div>

      <div className="card__images">
        {game.profiles.map((profile, index) => (
          <div key={`game_profile_${index}`} className="card__image">
            <img src={profile.nickname} alt={game.image + "'s image"} />
          </div>
        ))}
      </div> */}

      <div className="menu__card__itens">
        {/* <img src={xboxlogo4} className="card__logo"/> */}
        <h2> VISUALIZAR </h2>
        <Link to="/">
          <button> JOGOS </button>
        </Link>
        <Link to="/user/list">
          <button> USUÁRIO / PERFIL </button>
        </Link>
        <Link to="/genre/view/all">
          <button> GÊNERO </button>
        </Link>
        <Link to="/">
          <button> FAVORITOS </button>
        </Link>
      </div>
    </div>
  );
}
