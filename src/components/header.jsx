import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleMouseEnter = (index) => {
    // Mover a sombra para o item selecionado
  };

  return (
    <div className="header">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <div className="header-content">
        <h1>Contábil</h1>
        <h2>Bem vindo, Usuario</h2>
      </div>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        className="customDrawer"
      >
        <List>
          <ListItem
            button
            onClick={() => handleNavigation("/")}
            onMouseEnter={() => handleMouseEnter(0)}
          >
            Dashboard
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("/planocontas")}
            onMouseEnter={() => handleMouseEnter(1)}
          >
            Plano de Contas
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("/movimentacao")}
            onMouseEnter={() => handleMouseEnter(2)}
          >
            Movimentação
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("/escrituracao")}
            onMouseEnter={() => handleMouseEnter(3)}
          >
            Escrituração
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("/financeiro")}
            onMouseEnter={() => handleMouseEnter(4)}
          >
            Financeiro
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("/relatorio")}
            onMouseEnter={() => handleMouseEnter(5)}
          >
            Relatório
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("/mostrarComponetes")}
            onMouseEnter={() => handleMouseEnter(5)}
          >
            Mostrar Componentes
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
