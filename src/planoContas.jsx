import React, { useEffect, useState } from "react";
import {
  cadastrarPlanoContas,
  visualizarPlanoContas,
  visualizarPlanoConta,
  atualizarPlanoConta,
} from "./components/planoContasService";

function planoContasDois() {
  const [planoContas, setPlanoContas] = useState([]);
  const [novoPlano, setNovoPlano] = useState({ descricao: "", tipo: "" });

  useEffect(() => {
    carregarPlanos();
  }, []);

  const carregarPlanos = async () => {
    try {
      const dados = await visualizarPlanoContas();
      setPlanoContas(dados);
    } catch (error) {
      console.error("Erro ao carregar planos de contas:", error);
    }
  };

  const handleCadastro = async (event) => {
    event.preventDefault();
    console.log(novoPlano);
    try {
      await cadastrarPlanoContas(novoPlano);
      setNovoPlano({ descricao: "", tipo: "" });
      carregarPlanos();
    } catch (error) {
      console.error("Erro ao cadastrar plano de contas:", error);
    }
  };

  const handleAtualizacao = async (id, dados) => {
    try {
      await atualizarPlanoConta(id, dados);
      carregarPlanos();
    } catch (error) {
      console.error("Erro ao atualizar plano de contas:", error);
    }
  };

  return (
    <div className="App">
      <header className="menu_op">
        <h1>Gestão de Plano de Contas</h1>
      </header>
      <main className="box_content">
        <div className="box">
          <form onSubmit={handleCadastro}>
            <h3>Cadastrar Novo Plano</h3>
            <input
              type="text"
              placeholder="Descrição"
              value={novoPlano.descricao}
              onChange={(e) =>
                setNovoPlano({ ...novoPlano, descricao: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Tipo"
              value={novoPlano.tipo}
              onChange={(e) =>
                setNovoPlano({ ...novoPlano, tipo: e.target.value })
              }
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>

        <div className="box">
          <h3>Planos de Contas</h3>
          <ul>
            {planoContas.map((plano) => (
              <li key={plano.idPlanoContas}>
                <span>{plano.CodigoPlano}</span>
                <span>{plano.Descricao}</span>
                <span>{plano.Tipo}</span>
                <button
                  onClick={() => handleAtualizacao(plano.idPlanoContas, plano)}
                >
                  Atualizar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default planoContasDois;
