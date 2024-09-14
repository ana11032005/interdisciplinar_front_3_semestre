import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import dashboard from "./dashBoard.jsx";
import planocontas from "./planoContas.jsx";
import movimentacao from "./movimentacao.jsx";
import escrituracao from "./escrituracao.jsx";
import financeiro from "./financeiro.jsx";
import relatorio from "./relatorio.jsx";
import MostrarComponentes from "./mostrarComponentes.jsx";

const WithHeader = ({ Component }) => (
  <>
    <Header />
    <Component />
  </>
);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithHeader Component={dashboard} />} />
        <Route path="/planocontas" element={<WithHeader Component={planocontas} />} />
        <Route path="/movimentacao" element={<WithHeader Component={movimentacao} />} />
        <Route path="/escrituracao" element={<WithHeader Component={escrituracao} />} />
        <Route path="/financeiro" element={<WithHeader Component={financeiro} />} />
        <Route path="/relatorio" element={<WithHeader Component={relatorio} />} />
        <Route path="/mostrarComponetes" element={<WithHeader Component={MostrarComponentes} />} />
      </Routes>
    </Router>
  );
}

export default App;
