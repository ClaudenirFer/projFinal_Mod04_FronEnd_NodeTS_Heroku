import React from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import "./login.css";

import xbox from "../../assets/images/xbox256.png";

export default function Login(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;
      JwtHandler.setJwt(accessToken);
      console.log({ accessToken });
      props.history.push(`/`);
    } else {
      // Implementar
    }
  };

  return (
    <div>
      <form className="form__login" onSubmit={handleSubmit}>
        <div>
          <img src={xbox} className="img__logo__login" />
        </div>

        <div>
          <label className="form__label__login" htmlFor="email">
            E-mail:
          </label>
        </div>

        <div>
          <input
            className="form__input-text__login"
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label className="form__label__login" htmlFor="password">
            Password:
          </label>
        </div>

        <div>
          <input
            className="form__input-text__login"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <input
            className="form__submit__button--login"
            type="submit"
            value="LOGIN"
          />
        </div>
        <div>
          <Link to="/user/create">
            <button className="form__submit__button--login" type="submit">
              {" "}
              CRIAR USUÁRIO{" "}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
