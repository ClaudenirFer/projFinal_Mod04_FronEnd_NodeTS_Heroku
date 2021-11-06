import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Api } from "../../api/Api";
import ViewUser from "../ViewUser/ViewUser";

export default function CreateUser(props) {
  // const [profiles, setProfiles] = useState([]);
  // const [profilesIds, setProfilesIds] = useState([]);

  const [games, setGames] = useState([]);

  const [gamesIds, setGamesIds] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpf = event.target.cpf.value;
    const admin = false;
    const nickname = event.target.nickname.value;
    const image = event.target.image.value;
    // const youtubeUrl = event.target.youtubeUrl.value;
    // const gamePlayUrl = event.target.gamePlayUrl.value;

    const payload = {
      name,
      lastname,
      email,
      password,
      cpf,
      admin,

      profiles: [
        {
          nickname: nickname,
          image: image,
          // gamesIds
        },
      ],
    };

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 201) {
      alert("Criado com sucesso");
      const id = body.cratedUser.id;
      // props.history.push(`/user/view/${id}`);
      props.history.push(`/`);
    } else {
      alert(
        "Usuário não criado. Talvez um campo obrigatório tenha ficado em branco ou talvez inserido texto em campos numéricos"
      );
    }
  };

  useEffect(() => {
    const loadGames = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGameUrl(), true);

      const results = await response.json();

      setGames(results);
    };

    loadGames();
  }, [games.length]);

  console.log("payload");

  const options = games.map((game) => ({
    value: game.id,
    label: game.title,
  }));

  console.log("payload");
  const handleGameChange = (selectedOption) => {
    setGamesIds(selectedOption.map((option) => option.value));
  };
  console.log("payload");

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="name">
            Name:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="lastname">
            Sobrenome:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="email">
            Email:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="password">
            Senha:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="cpf">
            CPF:
          </label>
        </div>

        <div>
          <input className="form__input-text" type="text" id="cpf" name="cpf" />
        </div>

        <div>
          <label className="form__label">Perfis:</label>
          <br />
          <br />
        </div>

        <div>
          <label className="form__label" htmlFor="nickname">
            Nick:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="nickname"
            name="nickname"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="image">
            Link da Imagem:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="image"
            name="image"
          />
        </div>

        <div>
          <Select isMulti options={options} onChange={handleGameChange} />
        </div>

        <div>
          <input className="form__submit" type="submit" value="ADICIONAR" />
        </div>
      </form>
    </div>
  );
}
