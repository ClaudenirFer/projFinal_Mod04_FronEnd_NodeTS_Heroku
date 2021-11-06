import React from "react";
import { useHistory } from "react-router";
import UpdateProfile from "../../pages/UpdateProfile/UpdateProfile";
import UpdateUser from "../../pages/UpdateUser/UpdateUser";

export default function ProfileCard(profile, user, props) {
  // console.log("Profile:  ", profile.profile)
  // console.log("USER:  ", profile.user)

  const history = useHistory();

  const handleClick = () => {
    // console.log("Entrou no HandleClick")
    // console.log("PPROFILE CARD", profile.profile.id)

    history.push(`/profile/view/${profile.profile.id}`, profile);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__images">
        {/* {user.profiles.map((profile, index) => (
          <div key={`game_profile_${index}`} className="card__image">
            <img src={profile.nickname} alt={game.image + "'s image"} />
            <div className="card__title">
              <h1>{profile.nickname}</h1>
            </div>

          </div>
        ))} */}
      </div>

      <div className="card__title">
        <h1>{profile.profile.nickname}</h1>
      </div>

      <div className="card__inform ">{profile.profile.image}</div>

      {/* <div className="card__inform ">$ {game.cover}</div> */}
    </div>
  );
}
