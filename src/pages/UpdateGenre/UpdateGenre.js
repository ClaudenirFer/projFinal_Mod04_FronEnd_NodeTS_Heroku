import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import Select from "react-select";
import { Link } from "react-router-dom";

export default function UpdateGenre(props) {
  const id = props.match.params.id;
  const [genre, setGenre] = useState(undefined);

  // const [genres, setGenres] = useState([]);
  // const [genresIds, setGenresIds] = useState([]);

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

  // useEffect(() => {
  //   const loadGenres = async () => {
  //     const response = await Api.buildApiGetRequest(
  //       Api.readAllGenreUrl(),
  //       true
  //     );

  //     const results = await response.json();

  //     setGenres(results);
  //   };

  //   loadGenres();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const genre = event.target.genre.value;

    const payload = {
      genre,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateGenreUrl(id),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 200) {
      alert("Gênero atualizado com sucesso.");

      const id = body.id;
      props.history.push(`/genre/view/${id}`);
    } else {
      alert("O gênero não foi atualizado. Algo deu errado.");
    }
  };

  if (!genre) {
    return <div>Loading...</div>;
  }

  // const options = genres.map((genre) => ({
  //   value: genre.id,
  //   label: genre.genre,
  // }));

  // const selectedOption = game.genres.map((genre) => ({
  //   value: genre.id,
  //   label: genre.genre,
  // }));

  // if (genresIds.length === 0) {
  //   setGenresIds(selectedOption.map((option) => option.value));
  // }

  // const handleGenreChange = (selectedOption) => {
  //   setGenresIds(selectedOption.map((option) => option.value));
  // };

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
            defaultValue={genre.genre}
          />
        </div>
        <div>
          <input className="form__submit" type="submit" value="SALVAR" />
          <Link to="/">
            <button type="submit">VOLTAR</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
