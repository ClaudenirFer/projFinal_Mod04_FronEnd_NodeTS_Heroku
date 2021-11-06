import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import UserCard from "../UserCard/UserCard";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";

export const ProfileList = ({ user }) => {
  const id = user.id;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsersList = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUserUrl(id));

      const results = await response.json();

      setUsers(results);
    };

    loadUsersList();
  }, [id]);

  return (
    <div className="cards">
      {user.profiles.map((profile, index) => (
        <ProfileCard
          key={`user_list_${index}`}
          profile={profile}
          user={user}
        ></ProfileCard>
      ))}
    </div>
  );
};
