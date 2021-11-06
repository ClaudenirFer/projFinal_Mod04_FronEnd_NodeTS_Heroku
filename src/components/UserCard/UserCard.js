import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/user/view/${user.id}`);

    console.log("usuário push: ", user.id);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__title">
        <h1>{user.name}</h1>
      </div>

      <div className="card__inform ">{user.email}</div>

      {/* <div className="card__images">
        {user.map((profile, index) => (
          <div key={`user_profile_${index}`} className="card__image">
            <img src={profile.nickname} alt={profile.image + "'s image"} />
            <p>{profile.nickname} </p>
          </div>          
        ))}
        <div> 
            <Link to={`/user/view/${user.id}`} > Visualizar </Link>

        </div>
      </div>       */}
    </div>
  );
}
