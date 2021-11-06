import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import Select from "react-select";

export default function UpdateGame(props) {
  const id = props.match.params.id;
  const [game, setGame] = useState(undefined);

  const [genres, setGenres] = useState([]);
  const [genresIds, setGenresIds] = useState([]);

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUrl(id), true);

      const results = await response.json();

      setGame(results);
    };

    loadGame();
  }, [id]);

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
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const cover = event.target.cover.value;
    const description = event.target.description.value;
    const launchYear = event.target.launchYear.value;
    const imdbRating = +event.target.imdbRating.value;
    const youtubeUrl = event.target.youtubeUrl.value;
    const gamePlayUrl = event.target.gamePlayUrl.value;

    const payload = {
      title,
      cover,
      description,
      launchYear,
      imdbRating,
      youtubeUrl,
      gamePlayUrl,
      genres: [],
      genresIds,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateUrl(id),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 200) {
      alert("Game atualizado com sucesso.");
      const id = body.id;
      props.history.push(`/game/view/${id}`);
    } else {
      alert(
        "O game não foi atualizado. Talvez você não tenha preenchido corretamente campos."
      );
    }
  };

  if (!game) {
    return <div>Loading...</div>;
  }

  const options = genres.map((genre) => ({
    value: genre.id,
    label: genre.genre,
  }));

  const selectedOption = game.genres.map((genre) => ({
    value: genre.id,
    label: genre.genre,
  }));

  if (genresIds.length === 0) {
    setGenresIds(selectedOption.map((option) => option.value));
  }

  const handleGenreChange = (selectedOption) => {
    setGenresIds(selectedOption.map((option) => option.value));
  };

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
            defaultValue={game.title}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="cover">
            Capa:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="cover"
            name="cover"
            defaultValue={game.cover}
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
            defaultValue={game.description}
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
            defaultValue={game.launchYear}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="imdbRating">
            Imdb:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="imdbRating"
            name="imdbRating"
            defaultValue={game.imdbRating}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="youtubeUrl">
            Youtube:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="youtubeUrl"
            name="youtubeUrl"
            defaultValue={game.youtubeUrl}
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
            defaultValue={game.gamePlayUrl}
          />
        </div>

        <div>
          <Select
            isMulti
            options={options}
            onChange={handleGenreChange}
            defaultValue={selectedOption}
          />
        </div>

        <div>
          <input
            className="form__submit button button--primary"
            type="submit"
            value="SALVAR"
          />
        </div>
      </form>
    </div>
  );
}
