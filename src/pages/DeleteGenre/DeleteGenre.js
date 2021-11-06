import React from "react";
import { Api } from "../../api/Api";

export default function DeleteGenre(props) {
  const id = props.match.params.id;

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(Api.deleteGenreUrl(id),
      true);

    if (response.status === 204) {
      alert("Gênero deletado com sucesso.")
      props.history.push(`/`);

    } else {
      alert("Gênero não deletado. Erro inesperado")
    }
  };


  return (
    <div>
      <div className="card card--full">
        Apagar Gênero?
        <br />
        <br />
        <button className="button button--danger" onClick={handleDelete}>
          Confirmar exclusão
        </button>
      </div>
    </div>
  );
}
