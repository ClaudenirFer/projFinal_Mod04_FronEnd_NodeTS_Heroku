import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import FullCard from "../../components/FullCard/FullCard";
import LinkButton from "../../components/LinkButton/LinkButton";

export default function ViewUser(props) {
  const id = props.match.params.id;
  console.log("id: ", id, typeof id);
  console.log(props);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdUserUrl(id),
        true
      );

      const results = await response.json();

      setUser(results);
    };

    loadUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log("userView:  ", user);

  return (
    <div className="item">
      <FullCard user={user}></FullCard>

      <div className="item__buttons">
        <LinkButton
          to={"/user/update/" + id}
          className="button button--primary"
          user={user}
        >
          EDITAR
        </LinkButton>

        <LinkButton to={"/user/delete/" + id} className="button button--danger">
          DELETAR
        </LinkButton>
      </div>
    </div>
  );
}
