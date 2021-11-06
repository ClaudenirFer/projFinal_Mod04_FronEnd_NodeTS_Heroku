import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import GameCard from "../GameCard/GameCard";

export const GameList = (props) => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    const loadGameList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGameUrl());

      const results = await response.json();

      setGame(results);
    };

    loadGameList();
  }, []);

  return (
    <div className="cards">
      {game.map((game, index) => (
        <GameCard key={`game_list_${index}`} game={game}></GameCard>
      ))}
    </div>
  );
};
