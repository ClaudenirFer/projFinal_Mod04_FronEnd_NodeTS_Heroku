import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Api } from "../../api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";
import { ProfileList } from "../../components/ProfileList/ProfileList";

export default function UpdateUser(props) {
  const id = +props.match.params.id;

  console.log("ID:  ", id, "Props: ", props);
  // const [profiles, setProfiles] = useState([]);
  // const [profilesIds, setProfilesIds] = useState([]);

  const [user, setUser] = useState(undefined);

  //   const [games, setGames] = useState([]);
  //   const [gamesIds, setGamesIds] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdUserUrl(id),
        true
      );

      const results = await response.json();
      console.log("results: ", results);
      setUser(results);
    };

    loadUser();
  }, [id]);

  console.log("USER:  ", user);

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

    console.log();

    const payload = {
      name,
      lastname,
      email,
      password,
      cpf,
      admin,

      profiles: [
        {
          idProf: id,
          nickname: nickname,
          image: image,
        },
      ],
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateUserUrl(id),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 200) {
      alert("Usuário atualizado com sucesso.");
      const id = body.id;
      props.history.push(`/user/view/${id}`);
    } else {
      alert(
        "O usuário não foi atualizado. Talvez os dados não tenha sido preenchido corretamente ou o servidor se comportou de maneira inesperada."
      );
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

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
            defaultValue={user.name}
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
            defaultValue={user.lastname}
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
            defaultValue={user.email}
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
            defaultValue={user.password}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="cpf">
            CPF:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="cpf"
            name="cpf"
            defaultValue={user.cpf}
          />
        </div>

        <div>
          <br />
          <label className="form__label">Perfis:</label>
          <br />
          <br />
        </div>

        <div>
          <ProfileList user={user} />
        </div>

        <div>
          <h3 className="form__label-tit2">Criar Perfil: </h3>
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
            // defaultValue={user.profiles.map((p, i) => p.nickname)}
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
            // defaultValue={user.profiles.map((p) => (p.image))}
          />
        </div>

        <div>
          {/* <Select isMulti options={options} onChange={handleGameChange} /> */}
        </div>

        <div>
          <input className="form__submit" type="submit" value="SALVAR" />
        </div>
      </form>
    </div>
  );
}
