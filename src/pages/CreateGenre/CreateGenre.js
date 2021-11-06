import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";

export default function CreateGenre(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const genre = event.target.genre.value;

    const payload = {
      genre,
    };

    const response = await Api.buildApiPostRequest(
      Api.createGenreUrl(),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 201) {
      const id = body.id;
      props.history.push(`/genre/view/${id}`);
      alert("Criado com sucesso");
    } else {
      alert("Algo deu errado!!!");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="genre">
            Gênero:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="genre"
            name="genre"
          />
        </div>

        <div>
          <input className="form__submit" type="submit" value="ADICIONAR" />
          <Link to="/">
            <button type="submit">VOLTAR</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
