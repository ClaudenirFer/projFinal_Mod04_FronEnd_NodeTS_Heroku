import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function FullCard({ user }) {
  const history = useHistory();

  const handleClick = () => {
    // history.push(`/user/view/${user.id}`);
    // console.log("usuário push: ", user.id)
  };

  console.log(user);

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__title">
        <h1>
          {user.name} {user.lastname}
        </h1>
        <br />
      </div>

      <div className="card__inform ">Email: {user.email}</div>

      <div className="card__inform ">CPF: {user.cpf}</div>

      <div className="card__images">
        {user.profiles.map((profile, index) => (
          <div key={`user_profiles_${index}`} className="card__image">
            <p>{profile.nickname} </p>

            <p>{profile.image} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
