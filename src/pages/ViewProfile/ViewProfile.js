import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function ViewProfile(props) {
  const id = props.match.params.id;
  console.log("PROPS:  ", props);
  console.log("ID:  ", id);

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

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item">
      <ProfileCard profile={profile} />

      <div className="item__buttons">
        <LinkButton
          to={"/profile/update/" + id}
          className="button button--primary"
        >
          EDITAR
        </LinkButton>

        <LinkButton
          to={"/profile/delete/" + id}
          className="button button--danger"
        >
          DELETAR
        </LinkButton>
      </div>
    </div>
  );
}
