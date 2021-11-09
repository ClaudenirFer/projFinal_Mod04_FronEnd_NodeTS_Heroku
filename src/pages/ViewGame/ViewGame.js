import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";
import GameCard from "../../components/GameCard/GameCard";
import InformGame from "../../components/InformGame/InformGame";


export default function ViewGame(props) {
    const id = props.match.params.id;
    console.log(props)
    console.log("### VIEWGAME ID:  ", id, typeof(id))

    const [game, setGame] = useState(undefined);

    useEffect(() => {
        const loadGame = async () => {
            const response = await Api.buildApiGetRequest(
                Api.readByIdUrl(id),
                true
            );

            const results = await response.json();

            setGame(results);
        };

        loadGame();
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item">

            <InformGame game={game} />

            

            <div className="item__buttons">
                <LinkButton
                    to={"/game/update/" + id}
                    className="button button--primary"
                >
                    EDITAR
                </LinkButton>

                <LinkButton
                    to={"/game/delete/" + id}
                    className="button button--danger"
                >
                    DELETAR
                </LinkButton>
            </div>

        </div>
    );
}
