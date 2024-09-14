import React, { useState } from "react";
import {
  Button,
  InputFilter,
  InputForm,
  InputDropBox,
  ButtonDenied,
  ButtonForm,
  DataBox,
  Modal,
  Card,
} from "./components/Components.jsx";

function MostrarComponentes() {
  const [selectedValue, setSelectedValue] = useState("");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log("Selecionado:", e.target.value);
  };

  const fields = [
    { label: "Nome", value: "José da Silva" },
    { label: "Idade", value: 28 },
    { label: "Cidade", value: "São Paulo" },
  ];

  return (
    <>
      <div className="Mostrar">
        <h2>Botão Aprovado</h2>
        <Button onClick={() => console.log("Botão clicado!")}>Aprovado</Button>
        <br />
        <h2>Botão Negado</h2>
        <ButtonDenied onClick={() => console.log("Botão clicado!")}>
          Negado
        </ButtonDenied>
        <br />
        <h2>Botão Formulário</h2>
        <ButtonForm onClick={() => console.log("Botão clicado!")}>
          Enviar
        </ButtonForm>
        <h2>Input de filtro</h2>
        <InputFilter
          placeholder="Digite algo..."
          onChange={(e) => console.log(e.target.value)}
        />
        <h2>Input de Formulário</h2>
        <InputForm
          placeholder="Insira seu nome"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <h2>Selecione uma opção</h2>
      <InputDropBox
        options={["Opção 1", "Opção 2", "Opção 3", "Opção 4"]}
        placeholder="Escolha uma opção"
        onChange={handleChange}
      />
      <h3>Valor selecionado: {selectedValue}</h3>
      <h2>DataBox</h2>
      <DataBox fields={fields} />
      <br />
      <br />

      <ButtonForm onClick={toggleModal}>Abrir o Modal</ButtonForm>
      <Modal show={showModal} onClose={toggleModal} title="Exemplo de Modal">
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
        <p>Aqui ficam as informações desejadas</p>
      </Modal>
      <br />
      <br />
      <h2>Card</h2>
      <Card data="Dados do Card" legend="Legenda do Card" />
      <br />
      <br />
    </>
  );
}

export default MostrarComponentes;
