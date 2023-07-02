import { useEffect, useState } from "react";
import "./App.css";
import Tabela from "./Tabela";
import Formulario from "./Formulario";

function App() {
  //Objeto produto
  const produto = {
    id: 0,
    name: "",
    src_image: "",
    qty: "",
    marca: "",
    description: "",
    price: "",
    active: "true",
  };

  //useState
  const [btnCadastra, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);
  const [error, setError] = useState("");

  const [submitted, setSubmitted] = useState(false);

  //useEffect -> ele vai fazer a requisição com o beck-end e enviar para o useState
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  //Cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.message !== undefined) {
          setError(retorno_convertido.message);
          console.log(retorno_convertido);
        } else {
          //Tenho que adicionar os produtos que já tem com o novo
          setProdutos([...produtos, retorno_convertido]);
          setError("Cadastro feito como sucesso");
          limparFormulario();
        }
      });
  };

  //Alterar produto
  const alterar = () => {
    fetch("http://localhost:8080/alterar", {
      method: "put",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.message !== undefined) {
          setError(retorno_convertido.message);
        } else {
          //Mensagem
          setError("Alteração feita como sucesso");

          //Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          //Index
          let index = vetorTemp.findIndex((p) => {
            return p.id === objProduto.id;
          });

          //Alterar produto do vetorTemp
          vetorTemp[index] = objProduto;

          //Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          //Limpar formulário
          limparFormulario();
        }
      });
  };

  //Remover produto
  const remover = () => {
    fetch("http://localhost:8080/remover/" + objProduto.id, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        //O produto foi removido no banco de dados
        // Agora tenho duas opções atualizar o vetor com uma nova requisição
        // ou remover sem fazer requisição

        //Removi sem fazer requiaição

        //Mensagem
        alert(retorno_convertido.message);

        //Cópia do vetor de produtos
        let vetorTemp = [...produtos];

        //Index
        let index = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id;
        });

        //Remover produto do vetorTemp
        vetorTemp.splice(index, 1);

        //Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        //Limpar formulário
        limparFormulario();
      });
  };

  //Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  };

  //Selecionar produto

  const selecionarProduto = (index) => {
    setObjProduto(produtos[index]);
    setBtnCadastrar(false);
  };

  //Retorno
  return (
    <>
      <Formulario
        botao={btnCadastra}
        evento={aoDigitar}
        cadastrar={cadastrar}
        error={error}
        obj={objProduto}
        cancelar={limparFormulario}
        remover={remover}
        alterar={alterar}
        validacao={submitted}
      />
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </>
  );
}

export default App;
