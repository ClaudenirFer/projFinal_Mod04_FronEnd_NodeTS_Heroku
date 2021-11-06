import React from "react";
import { Api } from "../../api/Api";

export default function DeleteUser(props) {
  const id = props.match.params.id;

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteUserUrl(id),
      true
    );

    if (response.status === 204) {
      alert("Usuário deletado com sucesso.");
      props.history.push(`/`);
    } else {
      alert(
        "O usuário não foi deletado. O servidor retornou um erro inesperado."
      );
    }
  };

  return (
    <div>
      <div className="card card--full">
        Você tem certeza que deseja excluir esse usuário?
        <br />
        <br />
        <button className="button button--danger" onClick={handleDelete}>
          Confirmar exclusão
        </button>
      </div>
    </div>
  );
}
