import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import UserCard from "../UserCard/UserCard";
import { Link } from "react-router-dom";

export const UserList = (props) => {
  console.log("props", props, typeof props);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadUserList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUserUrl());

      const results = await response.json();

      setUser(results);
    };

    loadUserList();
  }, []);

  console.log(user);
  return (
    <div className="cards">
      {user.map((user, index) => (
        <UserCard key={`user_list_${index}`} user={user}></UserCard>
      ))}
    </div>
  );
};
