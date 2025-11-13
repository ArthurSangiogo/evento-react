// cabeçalho
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
    <header>
      <h2> Sistema de Eventos SENAI</h2>
      <h2> Gerenciador Eventos </h2>
      <nav>
      <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link> {" "}
      </nav>
    </header>
    </div>
  );
}

export default Header;