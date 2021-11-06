import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";
import GenreCard from "../../components/GenreCard/GenreCard";

export default function ViewGenre(props) {
  const id = props.match.params.id;
  // console.log(props)
  // console.log("VIEW---GENRE ID:  ", id, typeof(id))

  const [genre, setGenre] = useState(undefined);

  useEffect(() => {
    const loadGenre = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdGenreUrl(id),
        true
      );

      const results = await response.json();

      setGenre(results);
    };

    loadGenre();
  }, [id]);

  if (!genre) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item">
      <GenreCard genre={genre} />

      <div className="item__buttons">
        <LinkButton
          to={"/genre/update/" + id}
          className="button button--primary"
        >
          EDITAR
        </LinkButton>

        <LinkButton
          to={"/genre/delete/" + id}
          className="button button--danger"
        >
          DELETAR
        </LinkButton>
      </div>
    </div>
  );
}
