import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Api } from "../../api/Api";

export default function CreateGame(props) {
  const [genres, setGenres] = useState([]);

  const [genresIds, setGenresIds] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const cover = event.target.cover.value;
    const description = event.target.description.value;
    const launchYear = event.target.launchYear.value;
    const imdbRating = +event.target.imdbRating.value;
    const youtubeUrl = event.target.youtubeUrl.value;
    const gamePlayUrl = event.target.gamePlayUrl.value;

    // console.log(genresIds)
    const payload = {
      title,
      cover,
      description,
      launchYear,
      imdbRating,
      youtubeUrl,
      gamePlayUrl,
      genresIds,

    };

    const response = await Api.buildApiPostRequest(
      Api.createGameUrl(),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 201) {
      const id = body.id;
      props.history.push(`/game/view/${id}`);
      alert("Game adicionado com sucesso");
    } else {
      alert(
        "Game não adicionado. Talvez você não tenha preenchido um campo obrigatório ou usado texto em campos numéricos"
      );
    }
  };

  useEffect(() => {
    const loadGenres = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllGenreUrl(),
        true
      );

      const results = await response.json();

      setGenres(results);
    };

    loadGenres();
  }, [genres.length]);

  console.log("payload");
  const options = genres.map((genre) => ({
    value: genre.id,
    label: genre.genre,
  }));

  console.log("payload");
  const handleGenreChange = (selectedOption) => {
    setGenresIds(selectedOption.map((option) => option.value));
  };
  console.log("payload");

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="title">
            Título:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="title"
            name="title"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="cover">
            Cover:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="cover"
            name="cover"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="description">
            Descrição:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="description"
            name="description"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="launchYear">
            Ano:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="launchYear"
            name="launchYear"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="imdbRating">
            IMDB:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="imdbRating"
            name="imdbRanking"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="youtubeUrl">
            YouTube:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="youtubeUrl"
            name="youtubeUrl"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="gamePlayUrl">
            GamePlay:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="gamePlayUrl"
            name="gamePlayUrl"
          />
        </div>

        <div>
          <label className="form__label">Gênero:</label>
        </div>

        <div>
          <Select isMulti options={options} onChange={handleGenreChange} />
        </div>

        <div>
          <input className="form__submit" type="submit" value="ADICIONAR" />
        </div>
      </form>
    </div>
  );
}
