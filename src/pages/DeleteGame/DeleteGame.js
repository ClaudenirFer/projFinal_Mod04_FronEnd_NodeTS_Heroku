import React from "react";
import { Api } from "../../api/Api";

export default function DeleteGame(props) {
  const id = props.match.params.id;

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(Api.deleteUrl(id), true);

    if (response.status === 204) {
      alert("Game deletado com sucesso");
      props.history.push(`/`);
    } else {
      alert("O Game não foi deletado. O servidor retornou um erro.");
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
// Verificar
