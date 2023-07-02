import React from "react";
import "./Formulario.css";

const Formulario = ({
  botao,
  evento,
  cadastrar,
  error,
  obj,
  cancelar,
  remover,
  alterar,
}) => {
  return (
    <form>
      <input
        type="text"
        value={obj.name}
        onChange={evento}
        name="name"
        placeholder="Nome"
        className="form-control"
      />
      <input
        type="text"
        value={obj.src_image}
        onChange={evento}
        name="src_image"
        placeholder="link da imagem"
        className="form-control"
      />
      <input
        type="text"
        value={obj.qty}
        onChange={evento}
        name="qty"
        placeholder="Quantidade"
        className="form-control"
      />
      <input
        type="text"
        value={obj.marca}
        onChange={evento}
        name="marca"
        placeholder="Marca"
        className="form-control"
      />
      <input
        type="text"
        value={obj.description}
        onChange={evento}
        name="description"
        placeholder="Descrição"
        className="form-control"
      />
      <input
        type="text"
        value={obj.price}
        onChange={evento}
        name="price"
        placeholder="Preço"
        className="form-control"
      />

      {(error === "Cadastro feito como sucesso") & (error !== undefined) ? (
        <div className="msgSituacao done">{error}</div>
      ) : (
        <div className="msgSituacao error">{error}</div>
      )}

      {/* Buttons */}
      {/* Tenho que fazer um condicional */}

      {botao ? (
        //if
        <input
          type="button"
          value="Cadastrar"
          className="btn btn-primary"
          onClick={cadastrar}
        />
      ) : (
        //else if
        <>
          <input
            type="button"
            value="Alterar"
            className="btn btn-warning"
            onClick={alterar}
          />
          <input
            type="button"
            value="Remover"
            className="btn btn-danger"
            onClick={remover}
          />
          <input
            type="button"
            value="Cencelar"
            className="btn btn-secondary"
            onClick={cancelar}
          />
        </>
      )}
    </form>
  );
};

export default Formulario;
