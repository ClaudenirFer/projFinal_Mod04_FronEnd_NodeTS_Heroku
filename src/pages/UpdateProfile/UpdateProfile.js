import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import Select from "react-select";

export default function UpdateProfile(props) {
  console.log("UPDATE__PROFILE PROPS:  ", props);
  const id = props.match.params.id;

  // const idUser = props.history.location.state.user.id;
  // const idProf = +props.match.params.id;
  // const profile = props.history.location.state.profile;

  // console.log("UPDATE__PROFILE ", idProf);

  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    const loadProfile = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdProfileUrl(id),
        true
      );
      const results = await response.json();

      setProfile(results);
    };
    loadProfile();
  }, [id]);

  console.log("UPDATE PROFILE:   ", profile);
  // console.log("PROPS", props.history.location.state.user)
  // console.log("Usuário: ", user.profiles.nickname)

  // console.log("USERS", users)

  // const x = user.profiles.map((p) => {
  //     p.id = id
  // })
  // console.log("Const X:  ", x)

  // const [user, setUser] = useState(undefined);

  // useEffect(() => {
  //   const loadUser = async () => {
  //     const response = await Api.buildApiGetRequest(
  //       Api.readByIdUserUrl(idUser),
  //       true
  //     );

  //     const results = await response.json();

  //     setUser(results);
  //   };

  //   loadUser();
  // }, [idUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nickname = event.target.nickname.value;
    const image = event.target.image.value;

    const payload = {
      // idProf: idProf,
      nickname: nickname,
      image: image,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateProfileUrl(id),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 200) {
      alert("O perfil foi atualizado com sucesso.");
      const id = body.id;
      props.history.push(`/profile/view/${id}`);
    } else {
      alert(
        "O perfil não foi atualizado. Talvez os dados não tenha sido preenchido corretamente ou o servidor se comportou de maneira inesperada."
      );
    }
  };

  if (!profile) {
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
      <h1> Perfis: </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="nickname">
            Perfil:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="nickname"
            name="nickname"
            defaultValue={profile.nickname}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="image">
            Imagem:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="image"
            name="image"
            defaultValue={profile.image}
          />
        </div>

        {/* <div>
          <Select
            isMulti
            options={options}
            onChange={handleGenreChange}
            defaultValue={selectedOption}
          />
        </div> */}

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
