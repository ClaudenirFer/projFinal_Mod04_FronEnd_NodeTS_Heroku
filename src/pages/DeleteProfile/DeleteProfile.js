import React from "react";
import { Api } from "../../api/Api";

export default function DeleteProfile(props) {
  const id = props.match.params.id;
  console.log("PROPS: ", props);
  console.log(id);

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteProfileUrl(id),
      true
    );

    if (response.status === 204) {
      alert("Profile deletado com sucesso");
      props.history.push(`/`);
    } else {
      alert("Perfil não deletado. O servidor retornou um erro.");
    }
  };

  return (
    <div>
      <div className="card card--full">
        Você tem certeza que deseja excluir esse item?
        <br />
        <br />
        <button className="button button--danger" onClick={handleDelete}>
          Confirmar exclusão
        </button>
      </div>
    </div>
  );
}
